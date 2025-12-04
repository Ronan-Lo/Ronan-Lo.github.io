---
title:          "Generative Adversarial Networks for High-Dimensional Item Factor Analysis: A Deep Adversarial Learning Algorithm"
date:           2025-03-05 16:11:42 +0000
show:           true
selected:       true
pub:            "Psychometrika"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  Advances in deep learning and representation learning have transformed item factor analysis (IFA) in the item response theory (IRT) literature by enabling more efficient and accurate parameter estimation. Variational autoencoders (VAEs) are widely used to model high-dimensional latent variables in this context, but the limited expressiveness of their inference networks can still hinder performance. We introduce adversarial variational Bayes (AVB) and an importance-weighted extension (IWAVB) as more flexible inference algorithms for IFA. By combining VAEs with generative adversarial networks (GANs), AVB uses an auxiliary discriminator network to frame estimation as a two-player game and removes the restrictive standard normal assumption on the latent variables. Theoretically, AVB and IWAVB can achieve likelihoods that match or exceed those of VAEs and importance-weighted autoencoders (IWAEs). In exploratory analyses of empirical data, IWAVB attained higher likelihoods than IWAE, indicating greater expressiveness. In confirmatory simulations, IWAVB achieved comparable mean-square error in parameter recovery while consistently yielding higher likelihoods, and it clearly outperformed IWAE when the latent distribution was multimodal. These findings suggest that IWAVB can scale IFA to complex, large-scale, and potentially multimodal settings, supporting closer integration of psychometrics with modern multimodal data analysis.
cover:          /assets/images/pub/2025/GAN.png
cover_description: ""
authors:
  - Nanyu Luo
  - Feng Ji#

links:
  Paper: https://doi.org/10.1017/psy.2025.10059
---
