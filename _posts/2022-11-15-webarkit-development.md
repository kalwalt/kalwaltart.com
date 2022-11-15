---
layout: post
idx: 31
slug: webarkit-development
title: WebARKit development and beyond
description: Talking about Webarkit and his development in this last period.
  Make the point on the situation and prospectives and future plans.
author: Walter Perdan
date: 2022-11-15T17:44:34.091Z
lang: en
seo:
  datePublished: 2022-11-15T17:44:34.110Z
  type: BlogPosting
  author: Walter Perdan
image: https://ucarecdn.com/157bb7d7-795d-4bd9-8cb0-931b0eae9517/webarkit_logo_social.jpg
tags: webar webarkit 2022
---
In the course of these months/years since the last article on this blog, many things have happened, first of all the advent of Covid with all the consequences it has brought about restrictions and worries and secondly job changes but I won't stay here to dwell on these facts. I just want to say that there have been some difficulties which however have left room and time for the development of software projects.
I have continued to maintain and develop ARnft and jsartoolkitNFT related to our open source organization WebARKit, and in parallel carry out other research. 

In fact, both projects mentioned, ARnft and jsartoolkitNFT, are only steps towards what WebARKit will really be. They are still partly based on ARToolKit5 C++ code compiled in WASM/javascript thanks to Emscripten. I've made some improvements over time, but we intend to create a separate project or at least revitalize the code. The part of the code for NFT tracking - note: here NFT stands for Natural Feature Tracking ! - it is written in C++ but it is already more than 5 years old. Emscripten can now compile code to the C++17 standard with many features and optimizations that didn't exist at the time. What could be done now? I recently rewrote the jsfeat project in the typescript version: jsfeatNext. although written in typescript it demonstrates how you can write code suitable for the web and the Backend environment with algorithms for image processing and computer vision.
I have not been able to convert all the code yet and there are still no comprehensive and effective examples but I think this will be possible in the near future. JsfeatNext has served me as a stimulus to develop a prototype of a C++ library to compile in Wasm thanks to Emscripten. The project in question is called webarkit-jsfeat-cpp and includes in its heart the basic structures of the jsfeat project, for example the matrix_t class, imgproc, orb and yape06 to name a few, obviously javascript and C++ are two languages ​​with very different characteristics and a 1: 1 conversion of the code was not possible. I'm not sure I've made the optimal choice for raw data management, but I've tried as much as possible to use the C++ STL; the data_t class from which matrix_t derives, implements std :: vector to interpret the underlying data. Also in this case not all the classes have been implemented nor all the functions. Furthermore, exhaustive examples and documentation are still missing. Time permitting, I hope to fill this gap and also present satisfactory tests.

At the same time since in the case of webarkit-jsfeat-cpp it meant rewriting a project from scratch, I looked at other libraries that could meet the needs of the project as a base or element to be integrated. Among many that I probed, including OpenCV it seemed convenient dlib you can find the documentation here dlib.net. Dlib offers over and over algorithms useful for image processing and computer vision also algorithms for Machine learning. but this will not be the reason to choose it. From a first taste I could see that it is very simple to apply transformations to images. You can see it in my repository dlib_em.js the difference I thought I saw is that the final library in wasm is much smaller if it was compiled with OpenCV. An interesting feature is that dlib contains several optimizations for matrix computation that are difficult to develop from scratch. So I think he's a very attractive candidate.I think I will start a prototype based on dlib and then compare it to webarkit-jsfeat-cpp. This will be my goal for the next few months, tim permitting of course. We will certainly see some good ones. See you soon and happy coding!