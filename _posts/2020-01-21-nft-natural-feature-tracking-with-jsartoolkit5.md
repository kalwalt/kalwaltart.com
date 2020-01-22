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
image: 'https://ucarecdn.com/3742492d-9880-4533-abb3-3ae266c557b8/'
intro_paragraph: ' **NFT N**atural  **F**eature  **T**racking is a markerless technology for augmented reality  which allows tracking of almost any image.'
tags: AR NFT 2020 Augmented-Reality jsartoolkit5 markerless
---
{% include figure.html width="1500" caption="Screenshot  with the pinball.jpg image." height="750" alt="NFT Natural Feature Tracking markerless jsartoolkit5" name="NFT-jsartoolkit5" target="_self" title="NFT a Markerless ttechnology with jsartoolkit5" rel="author" jpg_id="554de6fd-e32f-4901-90f8-68c31f60e8f1" link="#" webp_id="499fec07-8fbd-4cff-85ae-4dc0ff26bbaa" %}

## The new version of Jsartoolkit5 with NFT

### NFT or Natural Feature Tracking

 **NFT**  ( **N**atural  **F**eature  **T**racking) technology is a new technological option available in the open source project  **Jsartoolkit5** . It is a **Markerless**  technology that allows the tracking of any image (or almost) in spite of the technology with  **Marker**  which provides or the use of  **white / black geometric Patterns**  only (but you can also use colored as long as mono color and highly contrasted) or **Barcode**  that is an array of binary values in the form of black or white squares. Both Barcode or Pattern, in the Artoolkit5 project, must necessarily be surrounded by a dark frame (preferably black), and it is even possible to decide the thickness of this frame, but in any case the marker must necessarily be square in shape. Markerless technologies instead leave more freedom for Augmented Reality applications.

### What is markerless NFT technology

The term Markerless embraces a wide spectrum of possibilities, not only concerns the real time tracking of images, but also the positioning of 3d models on real surfaces coming from a video stream or the positioning of 3d models through the GPS coordinate system. In this short article, however, we will only talk about the Markerless **NFT** technology implemented in the heart of Jsartoolkit5. This type of technology recognizes certain images following a pre-training. We must extract what are called the **features points** and keep this data for later comparison with the image to be traced. This process is performed with a specific software application; it is possible to create a standalone application by downloading and compiling the source code but we recommend using the new web application [NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) developed by [Daniel Fernandes](https://github.com/Carnaux) or the command line utility that you can find in its [github repository](https://github.com/Carnaux/NFT-Marker-Creator). The final result is the data set consisting of 3 files with the extension `.fset .iset .fset3`, with these it will be possible to set the next image tracing.

### Image features for the NFT

Images to be used with NFT must have a reasonable  **degree of detail**  and  **sharp edges**  (a low degree of self-similarity and high spatial frequency), a  **good resolution**  and a rectangular shape (vertically or horizontally). As a reference, take into account the image we used for the tests: the [pinball.jpg](https://github.com/artoolkitx/artoolkit5/blob/master/doc/Marker%20images/pinball.jpg) (1637 x 2048 px)



{% include figure.html width="2048" caption="The pinball image used for the tests well suited for the tests" height="1637" alt="pinball jsartoolkit5 artoolkit" name="pinball" target="_self" title="The pinball image" rel="author" jpg_id="f4ab8949-a3a7-4144-924e-459e28100dae" link="#" webp_id="f4ab8949-a3a7-4144-924e-459e28100dae" %}



instead the following image is not very suitable for NFT:





{% include figure.html width="1732" caption="Un esempio di immagine n example image not suitable for NFT" height="1080" alt="minimal image" name="1732px-Wavy_Green_Field_in_Minimalist_Style" target="_blank" title="minimal landscape" rel="author" jpg_id="06bc7f87-6f84-43e3-89c8-dd8d43186aaf" wepb_id="d26874c2-383b-4b58-ba61-a385831fa337" link="https://commons.wikimedia.org/wiki/File:Wavy_Green_Field_in_Minimalist_Style.jpg#/media/File:Wavy_Green_Field_in_Minimalist_Style.jpg" webp_id="d26874c2-383b-4b58-ba61-a385831fa337" %}
