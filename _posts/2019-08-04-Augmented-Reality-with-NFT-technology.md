---
layout: post
idx: 21
title: 'Augmented Reality with NFT Technology.'
description: >-
  A simple article describing the NFT markerless technology and my research on the field. See the article for more details on the PR on github.
author: Walter Perdan
date: 2019-08-04
lang: en
seo:
  author: Walter Perdan
  datePublished: 2019-08-04
  type: BlogPosting
image: 'https://ucarecdn.com/cb9f79fd-d999-4ddd-8532-4655bcc3d756/suono_di_superficie_artivive_acrylic_painting_interactive_art_Walter_Perdan.jpg'
intro_paragraph: >-
  **N**atural **F**eature **T**racking: A Markerless technology for the Augmented Reality.
categories: Interactive-art
tags: >-
  Interactive-art AR Art 2019 Painting Augmented-reality
---

{% include figure.html width="1200" caption="Suono di superficie (Sound surface), acrylic colors on canvas, An example of Markerless AR with the Artivive app, 70x50 cm, 2018." height="844" alt="Suono di superficie (Sound surface) acrylic interactive painting with Artivive by Walter Perdan" name="suono_di_superficie_artivive_acrylic_painting_interactive_art_Walter_Perdan" target="_blank" rel="author" jpg_id="cb9f79fd-d999-4ddd-8532-4655bcc3d756" link="https://www.walterperdan.com" webp_id="67b0703f-a242-496a-98c3-30e5b4243007" %}

<a href="https://www.walterperdan.com/en/artworks/painting/2018/sound-surface-artivive/">Read more about "Sound surface" an acrylic painting with Artivive Markerless technology ...</a>

Augmented reality has had an amazing development. From technology with geometric markers we are arrived at sophisticated systems, with which it seems there are no limits to creativity. One technology that is emerged decisively is Markerless technology. With it you can "augment" reality with _almost_ any image.

There are various paid projects and applications that offer different variants of this technology, regarding the open source, [ARToolKit](https://github.com/artoolkit) is perhaps the most stable and tested project. The source code is available for different operating systems and devices (Mac, Windows, Linux, Android, Ios and Arm). In addition to the main project, there has been a version converted to Javascript by some years, which is capable of running in a web browser. The project is called **[jsartoolkit5](https://github.com/artoolkit/jsartoolkit5)** and, like ARToolKit, is hosted on the github platform. **Jsartoolkit5** allows considerable flexibility and practicality. In fact, with the same application project it is possible to write valid code for different operating systems, without the need to rewrite, compile and publish a different application for each operating system. With **Jsartoolkit5** it is sufficient to publish on a server an html page with the Javascript code and connect to the web page in order to take advantage of the application. Definitely a lot simpler.

But let's get to the topic of this short article: NFT. **N** atural **F** eature **T** racking is the recognition of natural features in video images as a relatively recent technique. Through the identification of points and regions with salient features, it allows the recognition of images. Unlike Marker technology, which is much more restrictive, even if robust and effective, NFT technology allows more freedom in the choice of images to be tracked. An example of a Markerless technologist can be seen in the image i posted above: if you install the [Artivive](https://artivive.com/) app and if you point the camera of your smartphone at the image you will see an animation appear shortly afterwards.

ARToolKit v.5 has implemented NFT technology and is available for different platforms. Some time ago it was attempted to bring it in javascript via emscripten in the framework of **jsartoolkit5** but it had performances that were not very encouraging and had been abandoned. Recently I tried to restore and to update it: the original one is in this [branch](https://github.com/kalwalt/jsartoolkit5/tree/fixing-nft) and the relative PR is available here [github.com/kalwalt/jsartoolkit5/pull/1](https://github.com/kalwalt/jsartoolkit5/pull/1).

I have also developed and i am developing a multithreaded version (-pthread enabled) in this [branch](https://github.com/kalwalt/jsartoolkit5/tree/nft-with-threads) the relative PR is available here [github.com/kalwalt/jsartoolkit5/pull/2](https://github.com/kalwalt/jsartoolkit5/pull/2). We have seen a significant improvement in performance. But we still need to do several tests on smartphone devices. The other side of the coin is that you need to enable the `SharedArrayBuffer` flag in the browser, which is not exactly "_user friendly_". There is still the possibility to improve the code, as far as this aspect is concerned, if you want to intervene in the discussions, I invite you to leave a comment within the relative PR (see above).

As final considerations I can say that I also plan to develop other open source markerless alternatives: one could be to develop the new version of [ARToolKitX](https://github.com/artoolkitx/artoolkitx) in javascript and another approach based on OpenCV, I refer to the solution proposed by Ahmet Özlü in this article on [Medium](https://medium.com/@ahmetozlu93/marker-less-augmented-reality-by-opencv-and-opengl-531b2af0a130), the source code is available here [github.com/ahmetozlu/augmented_reality](https://github.com/ahmetozlu/augmented_reality).

We will see what the future holds for us, and I hope to realize some beautiful augmented reality projects thanks to these developments!
