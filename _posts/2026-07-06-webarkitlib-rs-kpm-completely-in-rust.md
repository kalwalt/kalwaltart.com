---
layout: post
idx: 35
slug: WebARKitLib-rs-KPM-completely-in-Rust
title: WebARKitLib-rs KPM completely in Rust
description: "WebARKitLib-rs: KPM module successfully migrated to Rust.
  Guaranteed functional parity and high precision achieved using the Strangler
  Fig strategy."
author: Walter Perdan
date: 2026-07-06T18:20:00.000+02:00
lang: en
seo:
  type: BlogPosting
  author: Walter Perdan
  datePublished: 2026-07-06T18:20:00.000+02:00
image: https://ucarecdn.com/9ad1c018-0c32-423c-8fee-5b4c48a5f3d9/WebARKitLibrsKPMnoFFiRustfig.jpg
intro_paragraph: The WebARKitLib-rs KPM module is now in Rust. Thanks to the
  Strangler Fig strategy and AI, I have ensured functional parity with the
  native code.
categories: programming open-source webar
tags: webar, webarkit, rust, webarkitlib-rs purecv, 2026
---
## The Strategy: Strangler Fig

![Webarkitlib-rs KPM completely in Rust](https://ucarecdn.com/9ad1c018-0c32-423c-8fee-5b4c48a5f3d9/WebARKitLibrsKPMnoFFiRustfig.jpg "Webarkitlib-rs KPM completely in Rust")

The **KPM** (Key Point Matching) module of the [WebARKitLib-rs](https://github.com/webarkit/WebARKitLib-rs) project, which previously relied on FFI to interact with C/C++ code, has now been entirely converted to Rust. To achieve this, I adopted the "Strangler Fig" strategy: I broke the module down into sub-modules, isolating critical functions. For each of these, I prepared parity tests that compare the Rust implementation with the corresponding native C/C++ one, ensuring absolute precision of the porting. Here is a practical example:

```rust
/// From crates/core/src/kpm/freak/homography.rs#L3028
/// Same as above but compares the full `RobustHomography::find()` 
/// pipeline (RANSAC + IRLS polish) against the C++ baseline. 
#[test] 
fn robust_homography_find_matches_cpp() { 
    let mut rng = StdRng::seed_from_u64(0xF00DBABE); 
    let mut max_diff = 0.0_f32; 
    for trial in 0..5 { 
        let h_true = [ 
            1.0 + rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-1.0_f32..1.0), 
            rng.random_range(-0.1_f32..0.1), 
            1.0 + rng.random_range(-0.1_f32..0.1), 
            rng.random_range(-1.0_f32..1.0), 
            rng.random_range(-0.001_f32..0.001), 
            rng.random_range(-0.001_f32..0.001), 
            1.0, 
        ]; 
        let n: usize = 16; 
        let mut p = vec![0.0_f32; n * 2]; 
        let mut q = vec![0.0_f32; n * 2]; 
        for i in 0..n { 
            p[i * 2] = rng.random_range(-5.0_f32..5.0); 
            p[i * 2 + 1] = rng.random_range(-5.0_f32..5.0); 
            let mut q_pt = [0.0_f32; 2]; 
            multiply_point_homography_inhomogenous( 
                &mut q_pt, 
                &h_true, 
                &[p[i * 2], p[i * 2 + 1]], 
            ); 
            q[i * 2] = q_pt[0]; 
            q[i * 2 + 1] = q_pt[1]; 
        } 
        let estimator = RobustHomography::default(); 
        let mut h_rust = [0.0_f32; 9]; 
        let r = estimator.find(&mut h_rust, &p, &q, n); 
        let mut h_cpp = [0.0_f32; 9]; 
        let c = unsafe { 
            webarkit_cpp_robust_homography_find( 
                h_cpp.as_mut_ptr(), 
                p.as_ptr(), 
                q.as_ptr(), 
                n as i32, 
                HOMOGRAPHY_DEFAULT_CAUCHY_SCALE, 
                HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES, 
                HOMOGRAPHY_DEFAULT_MAX_TRIALS, 
                HOMOGRAPHY_DEFAULT_CHUNK_SIZE, 
            ) 
        } != 0; 
        assert_eq!(r, c, "trial {}: Rust and C++ disagreed on success", trial); 
        if r { 
            for i in 0..9 { 
                let diff = (h_rust[i] - h_cpp[i]).abs(); 
                if diff > max_diff { 
                    max_diff = diff; 
                } 
                assert!( 
                    diff < 1e-5, 
                    "trial {}: RobustHomography::find diverged at H[{}]: rust={}, cpp={}, diff={}", 
                    trial, i, h_rust[i], h_cpp[i], diff 
                ); 
            } 
        } 
    } 
    arlog_e!( 
        "RobustHomography::find: max element diff = {} over 5 random trials", 
        max_diff 
    ); 
}
```

## Methodology and AI Support

This approach provided me with near-absolute certainty of a faithful transition. By breaking the work into 9 milestones, I was able to proceed systematically. Along this path, the support of AI agents like **Gemini** and, in particular, **Claude Code**, was fundamental: the latter proved extremely effective in design, refactoring, writing tests, and identifying bugs and inconsistencies. Thanks to these tools, the porting was fluid and linear, completed in just over two months (from April 1st to June 5th), a time unimaginable without such assistance. The module now integrates [purecv](https://github.com/webarkit/purecv) — also written in Rust — which implements various computer vision algorithms derived from **OpenCV**. This choice gives WebARKitLib-rs superior modularity, paving the way for future enhancements, such as replacing DoG with Orb for detection.

## Towards the Future of WebAR

**WebARKitLib-rs** most likely represents the future of **WebARKit**: it will be the foundation for developing the new open-source engine dedicated to WebAR. This is not the only path taken; I recently released the new OpenCV-based code in [WebARKitLib](https://github.com/webarkit/WebARKitLib), which can be tested in the [webarkit-testing](https://github.com/webarkit/webarkit-testing) repository. With the complete conversion to Rust, the barrier to entry for new contributors is significantly lowered. This modularity simplifies the integration of new algorithms and lays the foundation for a more solid, transparent, and accessible WebAR ecosystem for the open-source community.
