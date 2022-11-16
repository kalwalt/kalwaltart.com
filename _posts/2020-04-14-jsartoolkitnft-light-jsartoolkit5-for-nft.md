---
layout: post
idx: 24
slug: jsartoolkitnft light jsartoolkit5 for nft
title: "JsartoolkitNFT: a light version of Jsartoolkit5"
description: "A short article to talk about the new jsartoolkitNFT project: a
  light version of jsartoolkit5."
author: Walter Perdan
date: 2020-04-14T16:03:27.077Z
lang: en
seo:
  datePublished: 2020-04-14T16:03:27.113Z
  type: BlogPosting
  author: Walter Perdan
image: https://ucarecdn.com/18f403aa-52ce-4035-b418-c5c57794843b/JsartoolkitNFT_kalwalt_augmented_reality.jpg
intro_paragraph: "JsartoolkitNFT: a light and improved version of Jsartoolkit5"
tags: 2020 Augmented-Reality AR NFT markerless  Artoolkit Artoolkit5 jsartookit5
---
{% include figure.html width="1299" caption="A screenshot of the arNft and jsartoolkitNFT development in the Atom editor" height="741" alt="A screenshot of the arNft development in " name="JsartoolkitNFT_kalwalt_augmented_reality" target="_blank" title="JsartoolkitNFT: simplified version of jsartoolkit5 for NFT" rel="author" jpg_id="18f403aa-52ce-4035-b418-c5c57794843b" link="https://github.com/webarkit/jsartoolkitNFT" webp_id="01f28032-74e0-423f-bb46-3fb7166e264c" %}

I have recently started the development of a lightened version of **jsartoolkit5** dedicated exclusively to **NFT** (**N**atural **F**eature **T**racking) markers with some improvements. For those who do not know what **NFT** markers are, I invite you to read this other article on my blog: [NFT - Natural Feature Tracking with jsartoolkit5](https://kalwaltart.com/blog/2020/01/21/nft-natural-feature-tracking-with-jsartoolkit5/). I have currently removed all the code that is not necessary trying to leave only what is needed to import the **KPM** library that manages the **NFT** markers. I removed most of the code because it was not used at all for NFT markers, for example the **getUserMedia** and **getUserMediaARController** functions are useless in jsartoolkit5 since the video stream is managed outside the class and inside the WebWorker (artoolkit.worker.js ). I then deleted all the code concerning the Patterns, Barcodes and Multi Markers, because obviously I don't care. What is the idea? To make the code as simple as possible, for this reason I developed an additional level to simplify and help the developer. I created a new **arNFT** library which once initialized allows you to write the code like this:



```javascript
<script src="js/third_party/three.js/three.min.js"></script>
<script src="../dist/arNFT.min.js"></script>
<script>

  var nft = new ARnft(640, 480, 'config.json');

  nft.init("../examples/DataNFT/pinball", true);

  var mat = new THREE.MeshLambertMaterial({color: 0xff0000});
  var cubeGeom = new THREE.CubeGeometry(1,1,1);
  var cube = new THREE.Mesh(cubeGeom, mat);
  cube.position.z = 90;
  cube.position.x = 90;
  cube.position.y = 90;
  cube.scale.set(180,180,180);

  nft.add(cube);

</script>
```

As you can see it is very simplified, it is based on Three.js but maybe in the future I will be able to extend it to other 3D libraries. A json file (config.json) let you store all the configuration data inside it.  In the near future I also want to implement a series of functions for the display on the marker of simple images or video objects. Furthermore, it is my intention to update the code to the most modern **ES6** standards so that it can be used in projects such as React, Vue, and others.

In summary make this series of features:

* **arNFT** layer
* **ES6** standard
* set of functions to be reused for easy development
* improve performances

I will write other articles to inform about further developments of the project. That's all for now, stay tuned!

**EDIT** (18/11/2020): Now [jsartoolkitNFT](https://github.com/webarkit/jsartoolkitNFT) and [ARnft](https://github.com/webarkit/ARnft) are two separate project owned by [WebAR Kit org.](https://www.webarkit.org)
