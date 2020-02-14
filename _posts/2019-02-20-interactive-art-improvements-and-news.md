---
layout: post
idx: 16
title: Interactive art improvements and news
description: >-
  Some news on interactive art, web design and programming related to my websites and my works, article by kalwalt alias Walter Perdan.
author: Walter Perdan
date: '2019-02-20 14:02:55'
lang: en
seo:
  author: Walter Perdan
  datePublished: '2019-02-20'
  type: BlogPosting
image: 'https://ucarecdn.com/5e541b7f-4561-45b6-9a10-dc432fb350e4/Art_is_a_joke_abstract_painting_augmented_reality_interactive_kalwalt.jpg'
intro_paragraph: >-
  Some news related to interactive art, web design and programming world. Using the jekyll-responsive-image plugin...
categories: Interactive-art
tags: Interactive-art AR Artoolikt ArtooliktX NFT Gatsbyjs React Uploadcare 2019
---
## Improvements: migrating to uploadcare and other news.

{% include figure.html width="1200" caption="Art is a joke, acrylic color on canvas, 70x50 cm, 2018." height="895" alt="Art is a joke - abstract painting with augmented reality by Kalwalt" attrlink="https://www.walterperdan.com" name="Art_is_a_joke_abstract_painting_augmented_reality_interactive_kalwalt" target="_blank" attr="Walter Perdan" title="Art is a joke" rel="author" jpg_id="5e541b7f-4561-45b6-9a10-dc432fb350e4" link="https://www.walterperdan.com" webp_id="f1715675-7cbf-4dc9-972d-bea39c527b84" %}

In this last month i was focused in the development of my two websites and the javascript library [jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5). I will explain better. I am a visual artist but i am interested in the development of applications with augmented reality: you can found some informations for the interactive part of my works in the kalwaltart.it [website](www.kalawaltart.it) and all my artworks ( not related only to interactive art) are presented in my official website [www.walterperdan.com](https://www.walterperdan.com). As i said i worked on adding image responsive feature to my kalwaltart.it website; at the beginning i implemented the [jekyll-responsive-image](https://github.com/wildlyinaccurate/jekyll-responsive-image) plugin ( my site is a static site based on [Jekyll](https://jekyllrb.com/)), not bad but as i started to add .webp format i had some issue with the server because it hasn't the required imagemagick library supporting the .webp format. And also my github repository was getting bigger and bigger. For this reason i start to migrating to [**uploadcare**](https://uploadcare.com) services: It is a service company that provide a **CDN** where to store your images. You upload your images to the uploadcare server and you past a link in your < img > tag:

```
<img src="https://ucarecdn.com/5e541b7f-4561-45b6-9a10-dc432fb350e4/">
```

The benefit of this approach is:

* less stress for the hosting server (at least with jekyll and imagemagick)
* the github repository will be lighter, because you will not store anymore any images.

I will use this service also for my other website, but, for this, i slowly migrating to a "Gatsbyjs" system. [**Gatsby.js**](https://www.gatsbyjs.org) is an plugin ecosystem based primarly on React. I am learning both, but it seems very promising. The main characteristic of [**React**](https://reactjs.org) is the use of Virtual DOM and the Component architecture. I will inform you of my progress...

In these days i spent also my time to improve the [Jsartoolkit5](https://github.com/artoolkitx/jsartoolkit5) library. I would add the **NFT** ( Natural Feature Tracking ) , that is a markerless approach for the augmented reality applications. To be honest there is already a [NFT branch](https://github.com/artoolkitx/jsartoolkit5/tree/nft) but the problem is the slow performances in fps terms and the fact that it is very old:  it require an update.

For now i solved some problems while compiling the lib; the next step will be to find the bottlenecks of the code ( i think it will be not so easy), I hope to solve this, it will be very interesting developing some apps with a markerless approach.

From this point of view i am working on some collage art with markers and augmented reality thanks to AR.js library. It is the same approach that i used to make ["Art is a joke"](https://www.walterperdan.com/en/artworks/painting/2018-painting/artisajoke-abstract-painting) the acrylic painting showed in this page.

I also start to build some Markerless app and artworks based on the [**ArtoolkitX**](https://github.com/artoolkitx/artoolkitx) library for Android., until NFT will not available in jsartoolkit5 and AR.js.
