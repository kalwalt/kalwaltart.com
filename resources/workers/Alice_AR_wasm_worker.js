var model;
var clock = new THREE.Clock();
var mixers = [];

function isMobile() {
    return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent);
}

var interpolationFactor = 24;

var trackedMatrix = {
  // for interpolation
  delta: [
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0
  ],
  interpolated: [
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0
  ]
}

var markers = {
    "Alice_AR": {
      width: 2500,
      height: 1660,
      dpi: 300,
      url: "../data/NFT/Alice_AR/Alice_AR_full_front_marker_top",
  },
};

var setMatrix = function (matrix, value) {
    var array = [];
    for (var key in value) {
        array[key] = value[key];
    }
    if (typeof matrix.elements.set === "function") {
        matrix.elements.set(array);
    } else {
        matrix.elements = [].slice.call(array);
    }
};

//var worker;
function start(container, marker, video, input_width, input_height, canvas_draw, render_update, track_update) {
    worker = new Worker('../../../resources/wasm_worker/artoolkit.wasm_worker.js');
    worker.onmessage = function(ev) {
        start2(container, marker, video, input_width, input_height, canvas_draw, render_update, track_update);
    }
}

function start2(container, marker, video, input_width, input_height, canvas_draw, render_update, track_update) {
    var vw, vh;
    var sw, sh;
    var pscale, sscale;
    var w, h;
    var pw, ph;
    var ox, oy;
    var camera_para = '../data/camera_para.dat'

    var canvas_process = document.createElement('canvas');
    var context_process = canvas_process.getContext('2d');

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas_draw,
      alpha: true,
      // logarithmicDepthBuffer: true,
      precision: 'mediump',
      antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    var scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight( 0xcccccc );
    scene.add( ambientLight );

    var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    light.position.set( 0, 1, 0 ); 			//default; light shining from top
    scene.add( light );

    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512;  // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5;    // default
    light.shadow.camera.far = 500;     // default

    var camera = new THREE.Camera();
    camera.matrixAutoUpdate = false;

    scene.add(camera);

    var root = new THREE.Object3D();
    scene.add(root);

    /* Load Model */
    var threeGLTFLoader = new THREE.GLTF2Loader();

    threeGLTFLoader.load("../../resources/models/alice_ar/Alice_AR.glb", function (gltf) {

            model = gltf.scene;
            model.rotation.y = -Math.PI/2;
            model.position.z = 0;
            model.position.x = 100;
            model.position.y = 50;
            model.scale.set(20,20,20);

            model.castShadow = true;
            model.receiveShadow = false; //default

            gltf.animations.duration = 2;
						var mixer = new THREE.AnimationMixer( model );
						mixers.push( mixer );
						var action = mixer.clipAction( gltf.animations[0] );
						action.play();

            root.matrixAutoUpdate = false;
            root.add(model);
        }
    );

    var load = function() {
        vw = input_width;
        vh = input_height;

        pscale = 320 / Math.max(vw, vh / 3 * 4);
        sscale = isMobile() ? window.outerWidth / input_width : 1;

        sw = vw * sscale;
        sh = vh * sscale;
        // video.style.width = sw + "px";
        // video.style.height = sh + "px";
        // container.style.width = sw + "px";
        // container.style.height = sh + "px";
        // canvas_draw.style.clientWidth = sw + "px";
        // canvas_draw.style.clientHeight = sh + "px";
        // canvas_draw.width = sw;
        // canvas_draw.height = sh;
        w = vw * pscale;
        h = vh * pscale;
        pw = Math.max(w, h / 3 * 4);
        ph = Math.max(h, w / 4 * 3);
        ox = (pw - w) / 2;
        oy = (ph - h) / 2;
        canvas_process.style.clientWidth = pw + "px";
        canvas_process.style.clientHeight = ph + "px";
        canvas_process.width = pw;
        canvas_process.height = ph;

        renderer.setSize(vw, vh);

        worker.postMessage({type: "load", pw: pw, ph: ph, camera_para: camera_para, marker: marker.url});

        worker.onmessage = function(ev) {
            var msg = ev.data;
            switch (msg.type) {
                case "loaded": {
                    var proj = JSON.parse(msg.proj);
                    var ratioW = pw / w;
                    var ratioH = ph / h;
                    proj[0] *= ratioW;
                    proj[4] *= ratioW;
                    proj[8] *= ratioW;
                    proj[12] *= ratioW;
                    proj[1] *= ratioH;
                    proj[5] *= ratioH;
                    proj[9] *= ratioH;
                    proj[13] *= ratioH;
                    setMatrix(camera.projectionMatrix, proj);
                    break;
                }

                case "endLoading": {
                  if (msg.end == true)
                    // removing loader page if present
                    document.body.classList.remove("loading");
                    document.getElementById("loading").remove();
                  break;
                }

                case "found": {
                    found(msg);
                    break;
                }

                case "not found": {
                    found(null);
                    break;
                }
            }

            track_update();
            process();
        };
    };

    var world;

    var found = function(msg) {
      if (!msg) {
        world = null;
      } else {
        world = JSON.parse(msg.matrixGL_RH);
      }
    };

    var lasttime = Date.now();
    var time = 0;

    var draw = function() {
        render_update();
        var now = Date.now();
        var dt = now - lasttime;
        time += dt;
        lasttime = now;

        if (!world) {
            root.visible = false;
        } else {
            root.visible = true;

            // interpolate matrix
            for (var i = 0; i < 16; i++) {
                trackedMatrix.delta[i] = world[i] - trackedMatrix.interpolated[i];
                trackedMatrix.interpolated[i] =
                    trackedMatrix.interpolated[i] +
                    trackedMatrix.delta[i] / interpolationFactor;
            }

            // set matrix of 'root' by detected 'world' matrix
            setMatrix(root.matrix, trackedMatrix.interpolated);
        }

        renderer.render(scene, camera);
    };

    function process() {
      context_process.fillStyle = "black";
      context_process.fillRect(0, 0, pw, ph);
      context_process.drawImage(video, 0, 0, vw, vh, ox, oy, w, h);

      var imageData = context_process.getImageData(0, 0, pw, ph);
      worker.postMessage({ type: "process", imagedata: imageData }, [
        imageData.data.buffer
      ]);
    }

    var tick = function() {
        draw();
        requestAnimationFrame(tick);

        if (mixers.length > 0) {
                    for (var i = 0; i < mixers.length; i++) {
                        mixers[i].update(clock.getDelta());
                    }
                }
    };

    load();
    tick();
    process();
}
