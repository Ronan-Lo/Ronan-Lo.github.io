---
title:          "Identifying and Characterizing Eating Disorder Discourse on Chinese Social Media: A Machine Learning Approach"
date:           2025-10-13 00:01:00 +0000
show:           true
selected:       true
pub:            "Journal of Eating Disorders "
pub_pre:        "Submitted to "
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
    Background
    Eating disorders (EDs) are severe psychiatric conditions with high mortality and substantial medical complications. In China, underdiagnosis and low treatment engagement hinder timely intervention. Social media platforms provide a naturalistic lens into ED-related experiences, yet research on Chinese-language data remains scarce. Advances in machine learning (ML) and deep learning (DL) offer new opportunities to identify and characterize such ED discourse, informing the development of scalable detection methods and culturally tailored prevention and intervention strategies in the Chinese context.

    Methods
    We collected ED-related posts from Weibo via keyword-based API searches and manually annotated them into three groups: irrelevant, promotional/educational content, and layperson posts. Five ML/DL methods, including Convolutional Neural Networks (CNNs), Random Forests, XGBoost, Support Vector Machines (SVMs), and Logistic Regression, were trained to identify ED-related posts in a two-stage framework: (1) filtering out irrelevant posts and (2) distinguishing promotional/educational posts from layperson posts. Classifier performance was evaluated on additional posts from the same users. Latent Dirichlet Allocation (LDA) was applied to the layperson subset to extract underlying ED-related themes.

    Results
    CNN consistently outperformed other models, achieving high F1-scores in both classification stages (0.87 and 0.98, respectively). Topic modelling revealed five themes: restrictive symptomatology and physical distress, binge eating and body-health concerns, relapse and coping narratives, emotional venting, and chronic ED patterns with identity impact.

    Conclusions
    This study demonstrates that CNN-based classification combined with topic modeling provides a scalable framework for detecting ED-related discourse on Chinese social media. Beyond methodological advances in non-English NLP, the findings highlight culturally specific symptom expressions and psychosocial concerns, offering novel insights for public health surveillance. These insights can inform the development of early detection tools and culturally sensitive interventions to address the unmet needs of individuals with EDs in China.

cover:          /assets/images/pub/2025/topic_model.png
cover_description: ""
authors:
  - Yuchen Zhang*
  - Nanyu Luo*
  - Xiaoya Zhang
  - Feng Ji#
  - Jinbo He
links:
  Paper: https://www.researchsquare.com/article/rs-7852043/v1
---