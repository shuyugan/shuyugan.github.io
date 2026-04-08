---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.jsondasd" %}

<span class='anchor' id='about-me'></span>

My name is Shuyu Gan(甘书宇). I am a CS PhD student at UMN [Minnesota NLP](https://minnesotanlp.github.io/) and [Optimization for AI Lab (OptimAI-Lab)](https://people.ece.umn.edu/~mhong/index.html), co-advised by Prof. [Dongyeop Kang](https://dykang.github.io/) and Prof. [Mingyi Hong](https://people.ece.umn.edu/~mhong/mingyi.html). My research interests focus on Generative AI, LLM Alignments and Agentic Framework Developments. My current goal is to develop general purpose agents that can automate computer work.

Previously, I was a member of [Turing Class](http://www.cs.zju.edu.cn/turingclass_en) in Chu Kochen Honors College, Zhejiang University and obtained my Bachelor's degree in Computer Science and Technology in 2024. During my undergraduate, I am grateful to be advised by Prof. [Lingyun Sun](https://person.zju.edu.cn/en/lingyun), Prof. [Yi Yang](https://reler.net/), Prof. [Zhuowen Tu](https://pages.ucsd.edu/~ztu/) and Prof. [Xin Eric Wang](https://eric-xw.github.io/). Check out my [CV](docs/CV.pdf) for more details.

# 📖 Educations

- _2025.09 - Future_, Graduate Student, Computer Science, University of Minnesota, Minneapolis.

- _2020.09 - 2024.06_, Undergraduate, Computer Science, Chu Kochen Honors College, Zhejiang Univeristy.

# 🔥 News

- _2026.04_: &nbsp;🎉🎉 [Scaling Unverifiable Rewards](https://arxiv.org/abs/2512.22650) was accepted to ACL 2026 Findings!
- _2025.08_: &nbsp;🏆🏆 [A2P-Vis](https://arxiv.org/abs/2512.22101) received the Honorable Mention Award at VISxGenAI Workshop@VIS 2025!
- _2025.01_: &nbsp;🎉🎉 [Agent S](https://arxiv.org/abs/2410.08164) was accepted by ICLR 2025! Thanks to all my collaborators!
- _2024.06_: &nbsp;👋👋 Graduated from Zhejiang University and nominated for Outstanding Graduates of Zhejiang University. Bye ZJU!
- _2023.07_: &nbsp;🎉🎉 One paper accepted by ACMMM 2023.

# 💻 Research Experience

- _2025.06 - Present_ **Graduate Research Assistant, [Minnesota NLP](https://minnesotanlp.github.io/) & [OptimAI-Lab](https://people.ece.umn.edu/~mhong/index.html), University of Minnesota**  
  Co-advised by Prof. [Dongyeop Kang](https://dykang.github.io/) and Prof. [Mingyi Hong](https://people.ece.umn.edu/~mhong/mingyi.html), working on Agentic AI and Inference Test-Time Scaling.

- _2024.06 - 2024.11_ **Undergradute Visiting Research Intern, [ERIC Lab](http://eric-lab.soe.ucsc.edu/home), UC Santa Cruz**  
  Advised by Prof. [Xin Eric Wang](https://eric-xw.github.io/), we introduced Agent S, an MLLM-based agent that autonomously perform complex computer tasks.

- _2023.07 - 2023.09_ **Undergradute Visiting Research Intern, [mlPC](https://pages.ucsd.edu/~ztu/Group.htm), UC San Diego**  
  Supervised by Prof. [Zhuowen Tu](https://pages.ucsd.edu/~ztu/), we injected conceptual guidance into Diffusion models’ training process to improve the quality of generatedimages and avoid making semantic mistakes.

- _2023.02 - 2023.05_ **Research Intern, [IDEA Lab](https://www.idi.zju.edu.cn/space/2747.html), ZJU**  
  Advised by Prof. [Lingyun Sun](https://person.zju.edu.cn/en/lingyun), we tackled the noticable absence of cultural modalities in the multimodal co-speech gesture generation field.

# 📝 Publications & Preprints

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
</div>
</div> -->

- [Scaling Unverifiable Rewards: A Case Study on Visual Insights](https://arxiv.org/abs/2512.22650)

  **<u>Shuyu Gan</u>**, J Mooney, P Hao, R Wang, M Hong, Q Wang, D Kang
  
  **ACL 2026 Findings**

- [A2P-Vis: an Analyzer-to-Presenter Agentic Pipeline for Visual Insights Generation and Reporting](https://arxiv.org/abs/2512.22101)

  **<u>Shuyu Gan</u>**, R Wang, J Mooney, D Kang
  
  **VISxGenAI Workshop@VIS 2025 (Honorable Mention)**

- [Do LLMs Recognize Your Latent Preferences? A Benchmark for Latent Information Discovery in Personalized Interaction](https://arxiv.org/abs/2510.17132)

  I Tsaknakis, B Song, **<u>Shuyu Gan</u>**, D Kang, A Garcia, G Liu, C Fleming, M Hong
  
  **arXiv 2025**

- [Agent S: An Open Agentic Framework that Uses Computers Like a Human](https://arxiv.org/abs/2410.08164)

  Saaket Agashe, Jiuzhou Han, **<u>Shuyu Gan</u>**, Jiachen Yang, Ang Li, Xin Eric Wang
  
  **ICLR 2025**

- [Cultural Self-Adaptive Multimodal Gesture Generation Based on Multiple Culture Gesture Dataset](https://dl.acm.org/doi/10.1145/3581783.3611705)

  Jingyu Wu, Shi Chen, **<u>Shuyu Gan</u>**, Weijun Li, Changyuan Yang, Lingyun Sun
  
  **ACMMM 2023**

<!-- # 🎖 Honors and Awards

- 2022-2023 First-Prize Scholarship of Zhejiang University & Outstanding Student
- Outstanding Undergraduate Graduate of Zhejiang University
- Second-prize Scholarship of Zhejiang University(for 2 consecutive years)
- Zhejiang University’s Top-notch Scholarship for Basic Disciplines(for 2 consecutive years) -->

# 🎮🏸🏃 Miscellaneous

- I love playing FPS games in my spare time, especially CS2 and Valorant!

- For sports, I have been a member of [Kuafu Long Distance Alliance](https://www.zju.edu.cn/2022/0707/c69364a2602122/page.htm) in ZJU for three years and I love middle and long-distance running! I have participated in 1500m race and Half Marathon at Zhejiang University.

- I also love playing badminton(Even if I am an ameteur).
