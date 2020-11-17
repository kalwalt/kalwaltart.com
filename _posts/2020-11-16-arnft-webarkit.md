---
layout: post
idx: 31
slug: arnft jsartoolkitnft webarkit
title: ARnft and JsartoolkitNFT owned by WebAR Kit
description: During these months i was involved in the development of ARnft and
  JsartoolkitNFT, two little libs for image tracking with NFT. They are now part
  of the WebAR Kit org. See more details on the website www.webarkit.org.
author: Walter Perdan
date: 2020-11-16T22:27:30.841Z
lang: en
seo:
  datePublished: 2020-11-16T22:27:30.887Z
  type: BlogPosting
  author: Walter Perdan
image: https://github.com/webarkit/ARnft/blob/master/examples/Data/arNFT-logo.gif
intro_paragraph: "**ARnft** and **JsartoolkitNFT** now are part of **WebAR Kit** !!"
tags: "2020 Augmented-Reality AR NFT markerless ARnft JsartoolkitNFT WEbARKitLib
  WebARKit WebAR ES6 "
---
# ARnft and JsartookitNFT are part of WebAR Kit

{% include figure.html width="1299" caption="A screenshot of the arNft  development in the Atom editor" height="741" alt="A screenshot of the ARnft development" name="ARnft_WebAR_Kit_Aframe" target="_blank" title="ARnft WebAR with NFT markerless" rel="author" jpg_id="f860e41f-7ff6-48e4-947b-8dd84a10cacb" link="https://github.com/webarkit/ARnft" webp_id="f860e41f-7ff6-48e4-947b-8dd84a10cacb" %}

I decided to transfer the ownership of my two projects **ARnft** and **JsartoolkitNFT** to the github organization **[WebAR Kit](https://github.com/webarkit)**, you can visit the website [www.webarkit.org](https://www.webarkit.org), because i believe in this project. I have written about jsartoolkitNFT in a previuos article: [JsartoolkitNFT: simplified version of jsartoolkit5 for NFT](https://www.kalwaltart.com/blog/2020/04/14/jsartoolkitnft-light-jsartoolkit5-for-nft/). Initially ARnft was developed as part of jsartoolkitNFT, but i realized that was better to separate the two. JsartoolkitNFT is the low level API with the Emscripten port of [WebARKitLib](https://github.com/webarkit/WebARKitLib) instead ARnft manage and simplify the rendering part. It is based on the awesome **Three.js** rendering project, but we have plan to add support for **Aframe.js** and the **Babylon.js** engine. JsartoolkitNFT is the low level API with the Emscripten port of [WebARKitLib](https://github.com/webarkit/WebARKitLib) instead ARnft manage and simplify the rendering part. It is based on the awesome Three.js rendering project, but we have plan to add support for Aframe.js and the Babylon.js engine.

They are not perfect and they are not for sure the best libs you can find for markerless Augmented Reality, but it is possible to improve them. A very good point is that they can be imported as a module because have **ES6** support. We are working to improve the “filtering” of pose matrix, we want also to add new features and methods.

I hope that many projects will be created with them, and the open source community will contribute to his development, as part of the **WebAR Kit** project.

If you encounter any problems with ARnft or jsartoolkitNFT, you can report in the [ARnft issue tracker](https://github.com/webarkit/ARnft/issues) or in the [jsartoolkitNFT issue tracker](https://github.com/webarkit/jsartoolkitNFT/issues). Thank you for reading and see you again!