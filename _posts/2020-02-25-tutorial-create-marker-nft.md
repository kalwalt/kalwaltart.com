---
layout: post
idx: 27
slug: 'tutorial create marker NFT'
title: 'Tutorial: how to create a NFT marker.'
description: >-
   In this tutorial article we will explain how to make an NFT marker for augmented reality with the NFT-Marker-Creator to use with the opensource project jsartoolkit5.
author: Walter Perdan
date: '2020-02-25 13:02:53'
lang: it
seo:
  author: Walter Perdan
  datePublished: '2020-02-25'
  type: BlogPosting
image: >-
  https://ucarecdn.com/3aa158e5-f175-4d74-a3fc-ed54deaea815/Tutorial_NFT_Marker_Creator_AR.jpg
intro_paragraph: >-
   Tutorial for creating markers **NFT** for Augmented Reality to use with the open source project **jsartoolkit5**.
tags: 2020 Augmented-Reality NFT markerless tutorial
---
{% include figure.html width="1299" caption="Home screen of the NFT-Marker-Creator webapp" height="741" alt="NFT-Marker-Creator for create NFT markers for Augmented Reality" name="Tutorial_NFT_Marker_Creator_AR" target="_blank" title="Making a NFT Marker with NFT-Marker-Creator" rel="author" jpg_id="3aa158e5-f175-4d74-a3fc-ed54deaea815" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="8af1c1d3-7bd4-4bad-8814-ee466692cd06" %}

### Introduction

In this tutorial I will explain the step by step creation of **NFT** markers to use with the **jsartoolkit5** augmented reality project. This article is intended for all creators who want to create their augmented reality web applications. A minimum knowledge of some concepts is however necessary to face the topic.

**NFT** (**N**atural **F**eature **T**racking) markers are markers that are used to trace predetermined images. In essence it is a markerless technology, that is, without the use of markers. For a distinction on the types of markers I refer you to this [article](https://www.kalwaltart.it/blog/2020/01/19/nft-natural-feature-tracking-con-jsartoolkit5/) and at the bottom you will find other useful resources.

### Materials needed

For the creation of the NFT markers it is essential to have a **image** in jpg or png color format and the necessary software: **NFT-Marker-Creator.**

Although it is possible to create NFT markers with different resolutions and pixel dimensions, it is strongly recommended to generate the NFT markers with an optimal resolution and size: a total size in pixels (base x height) between 3,300,000 - 3,500,000 pixels and dpi of at least 200 optimal 300.

You can use the online version of the application or the command line version. Below I will explain the two ways.

### Generate the NFT marker

#### Via Webapp

You can use the Web App by going to this site: [carnaux.github.io/NFT-Marker-Creator](https://carnaux.github.io/NFT-Marker-Creator/) the page will look like this:

{% include figure.html width="1299" caption="Web app for creating NFT markers" height="741" alt="Home page NFT-Marker-Creator webapp" name="NFT_Marker_Creator_node_webapp_start" target="_blank" title="Home page NFT-Marker-Creator webapp" rel="author" jpg_id="f799693d-a7a8-4611-bc9c-e0c2b71dd1e8" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="186b4e8f-7671-43c1-9080-ce2fa89e0fdd" %}

click on **Upload Image** a window will open where you can access the folder containing the image file. For example in this case we are going to use the reference image pinball.jpg in the jsartoolkit5 project:

{% include figure.html width="1203" caption="Window for choosing the image." height="741" alt="NFT-Marker-Creator upload image" name="NFT_Marker_Creator_node_webapp_upload_image" target="_blank" title="Choose an image for NFT-Marker-Creator" rel="author" jpg_id="00c87ff0-04ea-4f75-83e9-15f05aa1f59c" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="6613dad6-cc67-440d-bfbb-0633fa9fa65b" %}

at this point your window will look like this:

{% include figure.html width="1299" caption="Screenshot with image uploaded to the NFT-Marker-Creator webapp" height="741" alt="Create NFT markers with NFT-Marker-Creator" name="Tutorial_NFT_Marker_Creator_AR" target="_blank" title="Uploaded image into the NFT-Marker-Creator webapp" rel="author" jpg_id="f574b279-d6d8-4392-8dfa-8d56fa10ac50" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="5386020e-47cd-46b1-b877-44fda675a77d" %}

the page also shows the `confidence level`, that is, an evaluation of the image on the basis of which the image is more or less suitable: the more stars there are, the better. Let's say it is better that I have at least 3 to have enough descriptors.

You just have to click on the button **Generate**, the program will start immediately and in a short time three files will be created in this case: **pinball.fset pinball.iset and pinball.fset3**.

#### Via command line

You can also generate your own NFT markers with the command line application (i.e. via the console). In this case, however, it is necessary to install [nodejs](https://nodejs.org/it/) follow the instructions for installation on the site. You also need to download **NFT-Marker-Creator**: you can download the entire project as a `.zip` file or via `git`.

#### Download NFT-Marker-Creator as a .zip

Navigate to the main page of [github.com/Carnaux/NFT-Marker-Creator](https://github.com/Carnaux/NFT-Marker-Creator), at the top right click on the green button `Clone or download` should appears a window like this:

{% include figure.html width="1200" caption="Window to download the zip file." height="845" alt="NFT-Marker-Creator download zip" name="NFT_Marker_Creator_download_zip" target="_blank" title="Download the zip file of the NFT-Marker-Creator project" rel="author" jpg_id="eb42bbb0-b757-471d-9733-65c875f88d70" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="cc26324c-5487-4ded-97b2-ea149bd6869f" %}

click on `Download ZIP`, the package will be downloaded shortly. Extract the files in a folder of your choice and in a command window (console) type:

```
cd NFT-Marker-Creator-master
```

then go to **Launch the node app**.

#### Download the project with git (advanced level)

[Git](https://en.wikipedia.org/wiki/Git_(software)) is a distributed version control program used by developers. In this way, updates can also be periodically downloaded. First of all [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Once installed in the folder where you want to download NFT-Marker-Creator, type in a command line terminal:

```
git clone https://github.com/Carnaux/NFT-Marker-Creator.git
```

in this way the entire project will be downloaded, enter the folder:

```
cd NFT-Marker-Creator
```

#### Launch the node app

Launch the node app (with **- i** you can indicate the path of the image), in this case the pinball.jpg resides in the same folder as app.js:

```
node app.js -i pinball.jpg
```

see also in the example image:

{% include figure.html width="1200" caption="Launching the program with an image" height="711" alt="NFT-Marker-Creator with the node app" name="NFT_Marker_Creator_node_app_start" target="_blank" title="Launching the program with an image" rel="author" jpg_id="8eecea84-cce8-46eb-8568-fb63ac6b44b2" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="075545fd-8cf8-4635-8ea9-bfedcc45e2eb" %}

send and the program will ask you for the exif data type Yes (Y):

{% include figure.html width="1200" caption="Enter the exif data" height="711" alt="NFT-Marker-Creator with the node app and exif" name="NFT_Marker_Creator_node_app_exif" target="_blank" title="Dati exif" rel="author" jpg_id="68274b7d-401c-4280-ae7b-2abe95d746c7" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="72c95d00-165b-43f3-b011-0820d50ee9c7" %}

then the program will ask you to enter the image's width (W) and height (H) data:

{% include figure.html width="1200" caption="Width and height of the image for the NFT marker" height="711" alt="NFT-Marker-Creator with the node app amd exif" name="NFT_Marker_Creator_node_app_width_height" target="_blank" title="Width and height of the image for the NFT marker" rel="author" jpg_id="40f7323d-a1bd-42a7-b485-a7c44a867fa2" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="7c73a4cd-722c-498d-a225-6e5e72596851" %}

In this case W=1637 and H=2048, the window should look like this:

{% include figure.html width="1200" caption="Width and height of the image for the NFT marker" height="711" alt="NFT-Marker-Creator with the node app and image width height" name="NFT_Marker_Creator_node_app_width_height_ok" target="_blank" title="Width and height of the image" rel="author" jpg_id="1456af7b-a1a7-4abc-b9ad-6789f2100dc3" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="83313613-8225-450b-8198-0fe82d975d84" %}

in the next step you will be asked to enter the dpi:

{% include figure.html width="1200" caption="Image Dpi" height="711" alt="NFT-Marker-Creator with the node app and dpi" name="NFT_Marker_Creator_node_app_dpi" target="_blank" title="Image Dpi" rel="author" jpg_id="e7089dd6-4b1d-4b2a-b4a5-f2e2d1ee723d" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="8587a967-9e5c-4718-93af-a589b4b88daf" %}

Once these final data have been entered, the program will start processing the image to create the files:

{% include figure.html width="1200" caption="The NFT marker begins to be generated ..." height="711" alt="NFT-Marker-Creator with the node app and start of procedure" name="NFT_Marker_Creator_node_app_init_marker" target="_blank" title="NFT-Marker-Creator with the node app and start of procedure" rel="author" jpg_id="6e809a5d-004b-437f-9843-cd55cd82d86a" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="da39384a-eedd-4068-a130-e163c591b7c8" %}

In a short time the software will generate the files and ask you to save them:

{% include figure.html width="1200" caption="The NFT marker has been generated!" height="711" alt="NFT-Marker-Creator with the node app - procedure completed" name="NFT_Marker_Creator_node_app_end" target="_blank" title="End of NFT marker creation procedure" rel="author" jpg_id="0a30be76-de1b-496c-8758-7eaad59ce51e" link="https://carnaux.github.io/NFT-Marker-Creator/" webp_id="72d8b29b-dcf0-4ddf-b6e8-2771c863d882" %}

In the end the `confidence level` is also shown as for the web app.

### Final conclusions

The easiest way to create your own NFT markers is to use the [Webapp](https://carnaux.github.io/NFT-Marker-Creator/). Or you can take the one present in the [repository](https://github.com/Carnaux/NFT-Marker-Creator/tree/master/docs).
It is possible also to generate a NFT marker with the **PWA** app by WebARKit.org go to the [tools page.](https://www.webarkit.org/tools/)

It is strongly recommended to generate your own NFT markers with the best possible image in terms of pixels numbers (width and height and therefore total pixels) and dpi:

* pixels > 3.000.000 (optimal 3.500.000)
* dpi > 200 (optimal 300)

Low values of these variables do not ensure that the image will always be traced ...

Another very important factor is the `confidence level`: I recommend reading this [article](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers) in the wiki of the project.

### Useful resources
NFT-Marker-Creator wiki: [github.com/Carnaux/NFT-Marker-Creator/wiki](https://github.com/Carnaux/NFT-Marker-Creator/wiki)

**Artoolkit-docs**:

* *web version* [kalwalt.github.io/artoolkit-docs](https://kalwalt.github.io/artoolkit-docs/3_Marker_Training/marker_nft_training.html)
* *github repository* [github.com/kalwalt/artoolkit-docs](https://github.com/kalwalt/artoolkit-docs)

marker-nft-utilities: [github.com/kalwalt/artoolkit-docs/blob/master/3_Marker_Training/marker_nft_utilities.md](https://github.com/kalwalt/artoolkit-docs/blob/master/3_Marker_Training/marker_nft_utilities.md)
