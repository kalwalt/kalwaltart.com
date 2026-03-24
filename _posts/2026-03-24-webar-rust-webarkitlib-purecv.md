---
layout: post
idx: 34
slug: webar-rust-webarkitlib-purecv
title: "WebAR Evolution: From WebARKitLib-rs to purecv"
description: "An update on my latest open-source activities: developing
  WebARKitLib-rs in Rust and the new purecv computer vision library."
author: Walter Perdan
date: 2026-03-24T11:40:00.000+01:00
lang: en
seo:
  type: BlogPosting
  author: Walter Perdan
  datePublished: 2026-03-24T12:09:00.000+01:00
image: https://raw.githubusercontent.com/webarkit/purecv/main/assets/purecv_banner.png
intro_paragraph: >-
  
  Following a hiatus since November 2022, I am sharing my recent work on WebARKitLib-rs and purecv, aimed at creating a new Rust-based WebAR ecosystem.
categories: webar webarkit
tags: webar webarkit webarkitlib-rs purecv
---
# Beyond C++: My WebAR Journey with Rust and SIMD

![](https://raw.githubusercontent.com/webarkit/purecv/main/assets/purecv_banner.png)

It has been quite a while since my last update here (November 2022). While the blog has been quiet, the activity behind the scenes has been intense, marked by a significant transition toward Rust and the growth of the [webarkit](https://github.com/webarkit) organization.

Over the past few years, I have focused on rewriting the foundations of my tools to ensure safety and superior performance within the browser. Two projects, in particular, represent the core of this effort:

1. [WebARKitLib-rs](https://github.com/webarkit/WebARKitLib-rs): A full Rust port of the classic ARToolkit engine. By leveraging WASM and SIMD instructions, I have optimized marker tracking to achieve significantly higher performance compared to previous versions.
2. [purecv](https://github.com/kalwalt/purecv): A Computer Vision library written entirely in Rust. Focused on *core* and *imgproc* modules, it is designed to be lightweight, modular, and performant.

The Future: An Integrated Ecosystem
My vision for the near future is to integrate `purecv` as an optional crate within `WebARKitLib-rs`. This synergy will pave the way for a powerful new WebAR tool, offering developers an "all-in-one" Rust solution optimized for the web while remaining ready for native architectures.

Although my background is rooted in visual arts, I see code as a fundamental expressive medium. There is still much to experiment with—and much to write, both in code and in my novel *L'ultimo Giardino sulla terra*—but I am glad to be back sharing this journey with you.

*Stay tuned!*
