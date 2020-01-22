---
layout: post
idx: 24
title: NFT Natural Feature Tracking with jsartoolkit5
description: >-
  NFT Natural Feature Tracking is a markerless tracking system for augmented
  reality. This new technology is available recently in the javascript
  jsartoolkit5 library. Walter Perdan aka @kalwalt contributed to the
  implementation of NFT in the heart of jsartoolkit5.
author: Walter Perdan
date: 2020-01-21T23:50:04.046Z
lang: en
seo:
  author: Walter Perdan
  datePublished: 2020-01-21T23:50:04.084Z
  type: BlogPosting
image: 'https://ucarecdn.com/554de6fd-e32f-4901-90f8-68c31f60e8f1/NFTjsartoolkit5.jpeg'
intro_paragraph: ' **NFT N**atural  **F**eature  **T**racking is a markerless technology for augmented reality  which allows tracking of almost any image.'
tags: AR NFT 2020 Augmented-Reality jsartoolkit5 markerless
---
{% include figure.html width="1500" caption="Screenshot  with the pinball.jpg image." height="750" alt="NFT Natural Feature Tracking markerless jsartoolkit5" name="NFT-jsartoolkit5" target="_self" title="NFT a Markerless technology with jsartoolkit5" rel="author" jpg_id="554de6fd-e32f-4901-90f8-68c31f60e8f1" link="#" webp_id="499fec07-8fbd-4cff-85ae-4dc0ff26bbaa" %}

## The new version of Jsartoolkit5 with NFT

### NFT or Natural Feature Tracking

 **NFT**  ( **N**atural  **F**eature  **T**racking) technology is a new technological option available in the open source project  **Jsartoolkit5**. It is a **Markerless**  technology that allows the tracking of any image (or almost) in spite of the technology with  **Marker**  which provides or the use of only white / black geometric **Patterns**  (but you can also use colored as long as mono color and highly contrasted) or **Barcode**  that is an array of binary values in the form of black or white squares. Both Barcode or Pattern, in the Artoolkit5 project, must necessarily be surrounded by a dark frame (preferably black), and it is even possible to decide the thickness of this frame, but in any case the marker must necessarily be square in shape. Markerless technologies instead leave more freedom for Augmented Reality applications.

### What is markerless NFT technology

The term Markerless embraces a wide spectrum of possibilities, not only concerns the real time tracking of images, but also the positioning of 3d models on real surfaces coming from a video stream or the positioning of 3d models through the GPS coordinate system. In this short article, however, we will only talk about the Markerless **NFT** technology implemented in the heart of Jsartoolkit5. This type of technology recognizes certain images following a pre-training. We must extract what are called the **features points** and keep this data for later comparison with the image to be traced. This process is performed with a specific software application; it is possible to create a standalone application by downloading and compiling the source code but we recommend using the new web application [NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) developed by [Daniel Fernandes](https://github.com/Carnaux) or the command line utility that you can find in its [github repository](https://github.com/Carnaux/NFT-Marker-Creator). The final result is the data set consisting of 3 files with the extension `.fset .iset .fset3`, with these it will be possible to set the next image tracing.

### Image features for the NFT

Images to be used with NFT must have a reasonable  **degree of detail**  and  **sharp edges**  (a low degree of self-similarity and high spatial frequency), a  **good resolution**  and a rectangular shape (vertically or horizontally). As a reference, take into account the image we used for the tests: the [pinball.jpg](https://github.com/artoolkitx/artoolkit5/blob/master/doc/Marker%20images/pinball.jpg) (1637 x 2048 px).

{% include figure.html width="2048" caption="The pinball image used for the tests well suited for the tests" height="1637" alt="pinball jsartoolkit5 artoolkit" name="pinball" target="_self" title="The pinball image" rel="author" jpg_id="f4ab8949-a3a7-4144-924e-459e28100dae" link="#" webp_id="f4ab8949-a3a7-4144-924e-459e28100dae" %}

Instead the following image is not very suitable for NFT:

{% include figure.html width="1732" caption="An example image not suitable for NFT" height="1080" alt="A minimal image" name="1732px-Wavy_Green_Field_in_Minimalist_Style" target="_blank" title="minimal landscape" rel="author" jpg_id="06bc7f87-6f84-43e3-89c8-dd8d43186aaf" wepb_id="d26874c2-383b-4b58-ba61-a385831fa337" link="https://commons.wikimedia.org/wiki/File:Wavy_Green_Field_in_Minimalist_Style.jpg#/media/File:Wavy_Green_Field_in_Minimalist_Style.jpg" webp_id="d26874c2-383b-4b58-ba61-a385831fa337" %}

The image above is not ideal for NFT since, even if it has a good resolution it has little variance. The result will be lower than the example above and consequently the application will struggle to trace the image.

### NFT in the core of Jsartoolkit5

I started working on this project because I had discovered a dead nft branch in the [artoolkitx / jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5) repository. The problem was that the performance was really poor on desktop and still worse on mobile device. Also there was support for  **[WASM](https://webassembly.org/)**  in the branch master. My effort therefore was to upgrade the NFT branch with the master that contained WASM. Not an easy task because it required a good knowledge of the structure of the Jsartoolkit5 code, a good familiarity with  **[Emscripten](https://emscripten.org/)**  and knowledge of the  C/C ++ and javascript language, since Emscripten only translates the C/C ++ code into a javascript language that can be used later subsequently in a browser or in an application based on **[Node.js](https://nodejs.org/it/)** . I have to say that at the beginning I didn't know what I was doing and I wasn't sure of the result. But I started in small steps and gradually we found a satisfactory solution. The fact that surprised me most is that gradually other people began to take an interest and this allowed me to solve many problems inherent in the code. In fact it is possible to take advantage of the NFT thanks to the implementation of a  **WebWorker**  this allows to relieve a part of the workload from the main thread with a consequent increase in performance and fps. Certainly if compared to applications based on ARcore, 8thwall or Artivive there is no comparison, but we are confident of making further improvements in the near future.

### A code example with Jsartoolkit5 and the NFT

Below I show you a snippet of code as an example for a simple application with the NFT. As you can see, it is essential to initialize the video via a `navigator.GetUserMedia` and then by using an `addEventListener` to inject the video stream to the start function. It is the main core of the application since it manages the flow of information between the WebWorker and the main Thread.

```html
<div id="container">
    <video id="video"></video>
    <canvas style="position: absolute; left:0; top:0" id="canvas_draw"></canvas>
</div>
// main worker create the web worker see in the examples/nft_improved_worker for details
<script src="main_worker.js"></script>
<script>
var container = document.getElementById('container');
var video = document.getElementById('video');
var canvas_draw = document.getElementById('canvas_draw');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var hint = {};
    if (isMobile()) {
        hint = {
            facingMode: {"ideal": "environment"},
            audio: false,
            video: {
                width: {min: 240, max: 240},
                height: {min: 360, max: 360},
            },
        };
    }

    navigator.mediaDevices.getUserMedia({video: hint}).then(function (stream) {
        video.srcObject = stream;
        video.play();
        video.addEventListener("loadedmetadata", function() {
            start(container,
                  markers["pinball"],
                  video,
                  video.videoWidth,
                  video.videoHeight,
                  canvas_draw,
                  function() { statsMain.update() },
                  function() { statsWorker.update()) };
        });
    });
}
</script>
```

We used the Three.js library for 3d rendering, but another one can certainly be used. This part of the code is managed by the **main_worker.js** file as you can see in the example. You can consult the code of [main_threejs_worker.html](https://github.com/artoolkitx/jsartoolkit5/blob/master/examples/nft_improved_worker/main_threejs_worker.html) in the repository, if instead you want to test all the examples go to this mine [page](https://kalwalt.github.io/jsartoolkit5/examples/), for other examples I also have this collection [kalwalt-interactivity-AR](https://github.com/kalwalt/kalwalt-interactivity-AR).

### Further developments

We plan to make improvements to the code, in terms of performances, with perhaps a more efficient tracking algorithm, pushing more on the  **[WASM](https://webassembly.org/)** . Surely then we need to find a specific compression method for the feature sets, improved for mobile devices; this would make the loading of the 3 files (`.fset .iset .fset3`) faster. We are also working to integrate the new version of Jsartoolkit5 with NFT within **Ar.js** , we hope as soon as possible to be able to release version no. 3 of Ar.js. An even more ambitious project is [arStudio](https://github.com/augmentmy-world/arStudio) an web editor based on [WebglStudio](https://webglstudio.org/) with which it will be possible to create an application based on jsartoolkit5 and litescene.js with a few mouse clicks. As you can see, there is no shortage of ideas!

### Thanks

All this would not have been possible if I had not met two people on my journey who helped and supported me. First of all [Thorsten Bux](http://augmentmy.world/) a professional developer from New Zealand and one of the current developers in the [ArtoolkitX](http://www.artoolkitx.org/) project which gave me a direct help, many tips and participated in several projects, and furthermore,  [Nicolò Carpignoli](https://nicolocarpignoli.github.io/me) current maintainer of the project **[Ar.js](https://github.com/jeromeetienne/AR.js),** professional developer from Italy, also he lavishes help and suggestions. There are also other people that I have to thank who have contributed in a remarkable way: [Zixin Zheng](https://github.com/misdake) and [Martin Wecke](https://github.com/hatsumatsu) for the contribution regarding the WebWorker and its optimization. And still many other people who have tested and contributed indirectly, thank you all!
