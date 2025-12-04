---
title:          "Federated Item Response Models: A Gradient-driven Privacy-preserving Framework for Distributed Psychometric Estimation"
date:           2025-11-30 00:01:00 +0000
show:           true
selected:       true
pub:            "Psychometrika"
pub_pre:        "Submitted to "
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
    Item Response Theory (IRT) models are widely used to estimate respondents' latent abilities and calibrate item difficulty. Traditional IRT estimation typically requires centralizing all raw responses, raising privacy and governance concerns. We introduce Federated Item Response Theory (FedIRT), a framework that enables distributed calibration of standard IRT models without transferring individual-level data, thereby preserving confidentiality while retaining statistical efficiency.

    To provide formal protection, we further develop FedIRT-DP, a user-level differentially private extension. Each site computes per-student gradients, clips them to a fixed norm, and shares only masked sums; the server adds calibrated Gaussian noise and performs MAP updates. This yields an auditable (ε, δ) guarantee at the student level and a single, tunable privacy-utility trade-off via the clipping bound and noise scale. The same mechanism improves robustness to extreme response rows (e.g., all-zeros/ones).

    Across simulations, FedIRT matches the accuracy of centralized estimators from popular `R` packages while avoiding data pooling; FedIRT-DP achieves comparable accuracy under stronger privacy and exhibits superior robustness to contamination. An empirical study on a real exam dataset demonstrates practical viability and consistent item and site-effect estimates. To facilitate adoption, we release an open-source `R` package, `FedIRT`, implementing the two-parameter logistic (2PL) and partial credit models (PCM) with federated and differentially private training.

cover:          /assets/images/pub/2025/fedirt.png
cover_description: "Gemini generated"
authors:
  - Biying Zhou
  - Nanyu Luo
  - Feng Ji#
links:
  Paper: https://arxiv.org/abs/2506.21744
---
