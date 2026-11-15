---
layout: home
permalink: /
title: "Shuyu Gan"
seo_title: "Shuyu Gan | PhD Student at the University of Minnesota"
excerpt: "Shuyu Gan is a Computer Science PhD student at the University of Minnesota working on autoresearch, test-time reasoning, and GUI agents."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div id="top" class="home-anchor"></div>

<section class="hero" id="about" aria-labelledby="hero-title">
  <div class="home-container">
    <div class="hero__grid">
      <div class="hero__copy is-visible" data-reveal>
        <p class="hero__position">PhD Student in Computer Science</p>
        <h1 id="hero-title">
          Shuyu Gan
          <span class="hero__chinese">甘书宇</span>
        </h1>
        <p class="hero__pronunciation">Pronounced: SHOO-yoo GAHN</p>
        <p class="hero__affiliation">University of Minnesota, Twin Cities</p>

        <div class="hero__bio">
          <p>
            I am a Computer Science PhD student at the University of Minnesota, where I work with
            <a href="https://minnesotanlp.github.io/" target="_blank" rel="noopener noreferrer">Minnesota NLP</a>
            and the
            <a href="https://people.ece.umn.edu/~mhong/index.html" target="_blank" rel="noopener noreferrer">Optimization for AI Lab</a>.
            I am co-advised by
            <a href="https://dykang.github.io/" target="_blank" rel="noopener noreferrer">Prof. Dongyeop Kang</a>
            and
            <a href="https://people.ece.umn.edu/~mhong/mingyi.html" target="_blank" rel="noopener noreferrer">Prof. Mingyi Hong</a>.
          </p>
          <p>
            My research interests include autoresearch, test-time reasoning, and GUI agents.
            My long-term goal is to develop general-purpose agents that can reliably complete complex computer tasks.
          </p>
          <p>
            I received my bachelor's degree in Computer Science and Technology from the
            <a href="http://www.cs.zju.edu.cn/turingclass_en" target="_blank" rel="noopener noreferrer">Turing Class</a>
            at Zhejiang University in 2024.
          </p>
        </div>
      </div>

      <aside class="profile-card is-visible" data-reveal aria-label="Profile">
        <div class="portrait-flip">
          <button
            id="portrait-flip"
            class="portrait-flip__button"
            type="button"
            aria-label="Show pixel-art portrait"
            aria-pressed="false"
            aria-describedby="portrait-flip-status"
          >
            <span class="portrait-flip__inner">
              <span id="portrait-photo" class="portrait-flip__face portrait-flip__face--front" aria-hidden="false">
                <img src="{{ '/images/me.jpg' | relative_url }}" alt="Portrait of Shuyu Gan at sunset">
              </span>
              <span id="portrait-pixel" class="portrait-flip__face portrait-flip__face--back" aria-hidden="true">
                <img src="{{ '/images/me-pixel.png' | relative_url }}" alt="Pixel-art portrait of Shuyu Gan at sunset">
              </span>
            </span>
            <span class="portrait-flip__hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M20 7v5h-5M4 17v-5h5M6.1 9a7 7 0 0 1 11.5-2.6L20 9M4 15l2.4 2.6A7 7 0 0 0 17.9 15"/>
              </svg>
              <span data-flip-label>Pixel mode</span>
            </span>
          </button>
          <span id="portrait-flip-status" class="sr-only" aria-live="polite">Original portrait shown.</span>
        </div>
        <div class="profile-card__links" aria-label="Academic and social profiles">
          <a href="https://scholar.google.com/citations?user=nfRYJJsAAAAJ" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
          <a href="https://github.com/shuyugan" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/shuyu-gan-18286b286" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
          <a href="https://x.com/ShuyuGan" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
          <a href="https://orcid.org/0009-0006-2030-3393" target="_blank" rel="noopener noreferrer"><i class="ai ai-orcid" aria-hidden="true"></i> ORCID</a>
        </div>
        <dl class="profile-card__details">
          <div>
            <dt><i class="fas fa-map-marker-alt" aria-hidden="true"></i><span class="sr-only">Location</span></dt>
            <dd>Minneapolis, Minnesota</dd>
          </div>
          <div>
            <dt><i class="fas fa-envelope" aria-hidden="true"></i><span class="sr-only">Email</span></dt>
            <dd><a href="mailto:gan00067@umn.edu">gan00067@umn.edu</a></dd>
          </div>
        </dl>
      </aside>

      <div class="focus-panel is-visible" data-reveal>
        <div class="focus-panel__header">
          <span>Current Research</span>
          <span id="focus-counter">01 / 03</span>
        </div>
        <div class="focus-panel__body">
          <h2 id="rotating-focus" data-items="Autoresearch|Test-time reasoning|GUI agents">Autoresearch</h2>
          <p id="rotating-focus-description" data-items="Can agents train and audit models on their own?|Better reasoning from inference-time compute.|Agents that use computers the way people do.">Can agents train and audit models on their own?</p>
        </div>
        <div class="focus-panel__progress" aria-hidden="true">
          <span id="focus-progress"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-section" id="research" aria-labelledby="research-title">
  <div class="home-container">
    <header class="section-heading" data-reveal>
      <h2 id="research-title">Research Interests</h2>
    </header>

    <ul class="interest-grid">
      <li class="interest-card" data-reveal>
        <span class="interest-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false"><path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3M7.4 14.5h9.2"/></svg>
        </span>
        <h3>Autoresearch</h3>
        <p>Agents that train models and audit training runs on their own.</p>
      </li>
      <li class="interest-card" data-reveal>
        <span class="interest-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false"><path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.7 10.7c.7.6 1.2 1.4 1.2 2.3h5c0-.9.5-1.7 1.2-2.3A6 6 0 0 0 12 3z"/></svg>
        </span>
        <h3>Test-Time Reasoning</h3>
        <p>Spending inference-time compute to help models reason better.</p>
      </li>
      <li class="interest-card" data-reveal>
        <span class="interest-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M10 7.5l5 3.5-2.2.5 1.2 2.2-1.1.6-1.2-2.2-1.7 1.5z"/></svg>
        </span>
        <h3>GUI Agents</h3>
        <p>Multimodal agents that operate computers through graphical interfaces.</p>
      </li>
    </ul>
  </div>
</section>

<section class="home-section home-section--alt" id="news" aria-labelledby="news-title">
  <div class="home-container">
    <header class="section-heading" data-reveal>
      <h2 id="news-title">News</h2>
    </header>

    <div class="news-list">
      <article class="news-item" data-reveal>
        <time datetime="2026-10">Oct 2026</time>
        <p>I received a <strong>GAGE Fellowship</strong> for Spring 2027 from the Department of Computer Science &amp; Engineering at the University of Minnesota.</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2026-10">Oct 2026</time>
        <p>We introduce SanSi, a looped typed decision model for System 1.5 thinking. Check out our <a href="https://arxiv.org/abs/2610.07730" target="_blank" rel="noopener noreferrer">paper</a>!</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2026-07">Jul 2026</time>
        <p><a href="https://arxiv.org/abs/2510.17132" target="_blank" rel="noopener noreferrer">Do LLMs Recognize Your Latent Preferences?</a> was accepted to <strong>COLM 2026</strong>.</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2026-04">Apr 2026</time>
        <p><a href="https://arxiv.org/abs/2512.22650" target="_blank" rel="noopener noreferrer">Scaling Unverifiable Rewards</a> was accepted to <strong>ACL 2026 Findings</strong>.</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2025-08">Aug 2025</time>
        <p><a href="https://arxiv.org/abs/2512.22101" target="_blank" rel="noopener noreferrer">A2P-Vis</a> received an <strong>Honorable Mention</strong> at the VISxGenAI Workshop at IEEE VIS 2025.</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2025-01">Jan 2025</time>
        <p><a href="https://arxiv.org/abs/2410.08164" target="_blank" rel="noopener noreferrer">Agent S</a> was accepted to <strong>ICLR 2025</strong>.</p>
      </article>
      <article class="news-item" data-reveal>
        <time datetime="2024-06">Jun 2024</time>
        <p>I graduated from Zhejiang University and was nominated as an <strong>Outstanding Graduate of Zhejiang University</strong>.</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section" id="journey" aria-labelledby="experience-title">
  <div class="home-container">
    <div class="experience-layout">
      <div>
        <header class="section-heading" data-reveal>
          <h2 id="experience-title">Research Experience</h2>
        </header>

        <h3 class="experience-group" data-reveal>Industry</h3>
        <div class="experience-list">
          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Jun 2026 - Sep 2026</div>
            <div>
              <h3>Research Intern</h3>
              <p class="experience-item__organization">
                Applied Sciences Group, Microsoft
              </p>
              <p>
                Mentored by
                <a href="https://www.microsoft.com/applied-sciences/people/yinheng-li" target="_blank" rel="noopener noreferrer">Yinheng Li</a>,
                studying whether AI agents can autonomously supervise model training.
              </p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Apr 2025 - Jul 2025</div>
            <div>
              <h3>Research Intern</h3>
              <p class="experience-item__organization">Zhipu AI</p>
              <p>Mentored by Xiao Liu, researching tool-based and agentic reinforcement learning for computer-use agents.</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Jun 2024 - Nov 2024</div>
            <div>
              <h3>Research Intern</h3>
              <p class="experience-item__organization">Simular</p>
              <p>Worked with Prof. Xin Eric Wang on Agent S, an MLLM-based framework for computer-use agents.</p>
            </div>
          </article>
        </div>

        <h3 class="experience-group" data-reveal>Academia</h3>
        <div class="experience-list">
          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Jun 2025 - Present</div>
            <div>
              <h3>Graduate Research Assistant</h3>
              <p class="experience-item__organization">
                <a href="https://minnesotanlp.github.io/" target="_blank" rel="noopener noreferrer">Minnesota NLP</a>
                and
                <a href="https://people.ece.umn.edu/~mhong/index.html" target="_blank" rel="noopener noreferrer">OptimAI Lab</a>,
                University of Minnesota
              </p>
              <p>Agentic AI and inference-time reasoning, advised by Prof. Dongyeop Kang and Prof. Mingyi Hong.</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Jul 2023 - Sep 2023</div>
            <div>
              <h3>Undergraduate Visiting Research Intern</h3>
              <p class="experience-item__organization"><a href="https://pages.ucsd.edu/~ztu/Group.htm" target="_blank" rel="noopener noreferrer">mlPC Lab</a>, UC San Diego</p>
              <p>Studied concept-guided diffusion training with Prof. Zhuowen Tu.</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">Feb 2023 - May 2023</div>
            <div>
              <h3>Research Intern</h3>
              <p class="experience-item__organization"><a href="https://www.idi.zju.edu.cn/space/2747.html" target="_blank" rel="noopener noreferrer">IDEA Lab</a>, Zhejiang University</p>
              <p>Worked on culture-aware multimodal co-speech gesture generation with Prof. Lingyun Sun.</p>
            </div>
          </article>
        </div>
      </div>

      <aside class="education">
        <header class="section-heading" data-reveal>
          <h2>Education</h2>
        </header>

        <article class="education-item" data-reveal>
          <time>2025 - Present</time>
          <h3>University of Minnesota</h3>
          <p>PhD in Computer Science</p>
          <span>Minneapolis, Minnesota</span>
        </article>

        <article class="education-item" data-reveal>
          <time>2020 - 2024</time>
          <h3>Zhejiang University</h3>
          <p>Bachelor's in Computer Science and Technology</p>
          <span>Turing Class, Chu Kochen Honors College</span>
        </article>

        <p class="education__advisors" data-reveal>
          I have also been advised by
          <a href="https://person.zju.edu.cn/en/lingyun" target="_blank" rel="noopener noreferrer">Prof. Lingyun Sun</a>,
          <a href="https://reler.net/" target="_blank" rel="noopener noreferrer">Prof. Yi Yang</a>,
          <a href="https://pages.ucsd.edu/~ztu/" target="_blank" rel="noopener noreferrer">Prof. Zhuowen Tu</a>,
          and
          <a href="https://eric-xw.github.io/" target="_blank" rel="noopener noreferrer">Prof. Xin Eric Wang</a>.
        </p>
      </aside>
    </div>
  </div>
</section>

<section class="home-section home-section--alt" id="publications" aria-labelledby="publications-title">
  <div class="home-container">
    <header class="section-heading section-heading--with-link" data-reveal>
      <h2 id="publications-title">Selected Publications</h2>
      <a href="https://scholar.google.com/citations?user=nfRYJJsAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    </header>

    <div class="publication-list">
      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">arXiv 2026</div>
        <div>
          <h3><a href="https://arxiv.org/abs/2610.07730" target="_blank" rel="noopener noreferrer">SanSi: A Looped Typed Decision Model for System 1.5 Thinking</a></h3>
          <p><strong>Shuyu Gan</strong>, Y.-J. Lee, D. Kang</p>
          <p class="publication-item__note">Featured by <a href="https://www.turingpost.com/p/exploring-system-one-ai-models-beyond-jev-15-outstanding-models" target="_blank" rel="noopener noreferrer">Turing Post</a></p>
          <a class="publication-item__paper" href="https://arxiv.org/abs/2610.07730" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>

      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">ACL Findings 2026</div>
        <div>
          <h3><a href="https://arxiv.org/abs/2512.22650" target="_blank" rel="noopener noreferrer">Scaling Unverifiable Rewards: A Case Study on Visual Insights</a></h3>
          <p><strong>Shuyu Gan</strong>, J. Mooney, P. Hao, R. Wang, M. Hong, Q. Wang, D. Kang</p>
          <a class="publication-item__paper" href="https://arxiv.org/abs/2512.22650" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>

      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">COLM 2026</div>
        <div>
          <h3><a href="https://arxiv.org/abs/2510.17132" target="_blank" rel="noopener noreferrer">Do LLMs Recognize Your Latent Preferences? A Benchmark for Latent Information Discovery in Personalized Interaction</a></h3>
          <p>I. Tsaknakis, B. Song, <strong>Shuyu Gan</strong>, D. Kang, A. Garcia, G. Liu, C. Fleming, M. Hong</p>
          <a class="publication-item__paper" href="https://arxiv.org/abs/2510.17132" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>

      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">VISxGenAI 2025</div>
        <div>
          <h3><a href="https://arxiv.org/abs/2512.22101" target="_blank" rel="noopener noreferrer">A2P-Vis: An Analyzer-to-Presenter Agentic Pipeline for Visual Insights Generation and Reporting</a></h3>
          <p><strong>Shuyu Gan</strong>, R. Wang, J. Mooney, D. Kang</p>
          <p class="publication-item__note">Honorable Mention</p>
          <a class="publication-item__paper" href="https://arxiv.org/abs/2512.22101" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>

      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">ICLR 2025</div>
        <div>
          <h3><a href="https://arxiv.org/abs/2410.08164" target="_blank" rel="noopener noreferrer">Agent S: An Open Agentic Framework that Uses Computers Like a Human</a></h3>
          <p>S. Agashe, J. Han, <strong>Shuyu Gan</strong>, J. Yang, A. Li, X. E. Wang</p>
          <a class="publication-item__paper" href="https://arxiv.org/abs/2410.08164" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>

      <article class="publication-item" data-reveal>
        <div class="publication-item__venue">ACM MM 2023</div>
        <div>
          <h3><a href="https://dl.acm.org/doi/10.1145/3581783.3611705" target="_blank" rel="noopener noreferrer">Cultural Self-Adaptive Multimodal Gesture Generation Based on Multiple Culture Gesture Dataset</a></h3>
          <p>J. Wu, S. Chen, <strong>Shuyu Gan</strong>, W. Li, C. Yang, L. Sun</p>
          <a class="publication-item__paper" href="https://dl.acm.org/doi/10.1145/3581783.3611705" target="_blank" rel="noopener noreferrer">Paper</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="home-section" id="service" aria-labelledby="service-title">
  <div class="home-container">
    <div class="experience-layout">
      <div>
        <header class="section-heading" data-reveal>
          <h2 id="service-title">Academic Service</h2>
        </header>

        <div class="experience-list">
          <article class="experience-item" data-reveal>
            <div class="experience-item__date">2026</div>
            <div>
              <h3>Reviewer</h3>
              <p class="experience-item__organization"><a href="https://aclrollingreview.org/" target="_blank" rel="noopener noreferrer">ACL Rolling Review (ARR)</a>, October 2026</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">2026</div>
            <div>
              <h3>Reviewer</h3>
              <p class="experience-item__organization">NeurIPS 2026, ED Track</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">2026</div>
            <div>
              <h3>Reviewer</h3>
              <p class="experience-item__organization">ICML 2026</p>
            </div>
          </article>

          <article class="experience-item" data-reveal>
            <div class="experience-item__date">2026</div>
            <div>
              <h3>Reviewer</h3>
              <p class="experience-item__organization">ACL 2026 Workshop</p>
            </div>
          </article>
        </div>
      </div>

      <aside class="education teaching">
        <header class="section-heading" data-reveal>
          <h2>Teaching</h2>
        </header>

        <article class="education-item" data-reveal>
          <time>Fall 2025</time>
          <h3>Teaching Assistant</h3>
          <p>CSCI 5541: Natural Language Processing</p>
          <span>University of Minnesota</span>
        </article>
      </aside>
    </div>
  </div>
</section>

<section class="home-section" id="beyond" aria-labelledby="personal-title">
  <div class="home-container">
    <header class="section-heading" data-reveal>
      <h2 id="personal-title">Personal</h2>
    </header>

    <div class="personal-content" data-reveal>
      <p>
        Outside research, I enjoy playing CS2 and Valorant, distance running, and badminton.
        I was a member of Zhejiang University's
        <a href="https://www.zju.edu.cn/2022/0707/c69364a2602122/page.htm" target="_blank" rel="noopener noreferrer">Kuafu Long Distance Alliance</a>
        for three years and have participated in the 1500m race and half marathon.
      </p>
      <p>For research discussions or collaboration, please contact me at <a href="mailto:gan00067@umn.edu">gan00067@umn.edu</a>.</p>
    </div>
  </div>
</section>
