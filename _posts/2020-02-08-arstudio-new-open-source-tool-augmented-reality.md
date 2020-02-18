---
layout: post
idx: 25
title: arStudio a new open source tool for augmented reality creatives
description: >-
  arStudio is a developing editor for building applications in javascript for
  augmented reality. It is based on https://webglstudio.org and with a few
  clicks it will allow to create interactive applications.
author: Walter Perdan
date: 2020-02-08T15:01:13.333Z
lang: en
seo:
  author: Walter Perdan
  datePublished: 2020-02-08T15:01:13.371Z
  type: BlogPosting
image: '  https://ucarecdn.com/641dbcae-4b8a-48b1-9020-8441f1c28ba2/ar-Studio-javascript-augmented-reality-editor.jpg'
intro_paragraph: >-
  ArStudio is a new tool being developed for creatives and programmers
  interested in augmented reality. Based on the https://webglstudio.org will
  allow you to easily create javascript applications.
tags: >-
  2020 arStudio webglstudio Augmented-Reality AR Artoolkit NFT jsartoolkit5  
  markerless
---
{% include figure.html width="1366" caption="ArStudio entry screen." height="768" alt="arStudio a javascript editor for Augmented Reality" name="arStudio-javascript-augmented-reality-editor" target="_blank" title="arStudio an innovative editor for Augmented Reality" rel="author" jpg_id="641dbcae-4b8a-48b1-9020-8441f1c28ba2" link="https://github.com/augmentmy-world/arStudio" webp_id="f18071fc-d83e-4a69-acf5-6949e8928698" %}

Developing an augmented reality application can be a difficult task. There are several obligatory stages to follow and the job can be very complicated. Especially if you are not an expert developer but a "creative" or a visual artist with programming experience. To help and simplify this process, we started to develop an editor to create small augmented reality web applications. The editor is called  **arStudio**  and is based on [webglstudio.org](https://webglstudio.org/): the software is written entirely in javascript, and allows the creation of interactive applications in a 3D environment. The project was started by [Thorsten Bux](https://augmentmy.world/) and I am part of the development team.

### Features of webglstudio.

**Webglstudio** is not a program for creating 3d objects like Blender, 3dSmax or Maya, it is rather an editor for transforming 3d scenes into interactive web applications. It consists of several windows and functions, it is together a scene editor, an editor for scripting code (Js and GLSL) and an editor for "graphs" as many other software are provided. But the most important thing is that when you decide that your project is finished, you can publish it directly as html and javascript code, just with a click of a mouse. The properties of this editor, however, are not limited to what I have listed but go far beyond expectations. I recommend you visit the demo page to get an idea.

{% include figure.html width="1366" caption="arStudio with an arTracker and a cube in the scene" height="768" alt="arStudio javascript editor test" name="arStudio-javascript-editor-AR-testing" target="_blank" title="arStudio " rel="author" jpg_id="84a75c2e-f972-4f89-b5fb-0f6d92e0eb82" link="https://github.com/augmentmy-world/arStudio" webp_id="0be2deec-80d9-4833-8614-8469f12fe39b" %}

### ArStudio and augmented reality.

What will **arStudio** do? It will be possible with very little effort to develop an interactive web application for augmented reality. Without even writing a line of code! At the moment it is possible to add in the scene:

* **Pattern markers**  (Hiro and Kanj)
* **Barcode markers**
* **NFT markers**  (Pinball image only)

There is still a lot to do but the future for this project is promising, it is not free from bugs and other problems at the moment, but we are very confident and convinced that we will be able to improve it more and more. If you want to test the editor, go to the github page of [arStudio](https://github.com/augmentmy-world/arStudio), you can download the zip file or clone the project with  **git**  by running this command in a terminal console:

```
git clone https://github.com/augmentmy-world/arStudio.git
```

to make the editor work it is still necessary to launch a server (python or node)

```
//Python 2.x
python -m SimpleHTTPServer

//Python 3.x
python -m http.server
```

or with node, first install the server module:

```
npm install http-server -g
```

e then:

```
http-server . -p 8000
```

This will not allow you to save and import the scenes saved on the server. To do this it is necessary to install a server that supports php like Apache and follow the procedure reported in the [site](https://github.com/augmentmy-world/arStudio#installing). See you soon with other interesting news!
