(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setTheme(theme, persist) {
    var nextTheme = theme === "light" ? "light" : "dark";
    var toggle = document.getElementById("theme-toggle");
    var themeMeta = document.getElementById("theme-color-meta");

    root.setAttribute("data-theme", nextTheme);

    if (toggle) {
      toggle.setAttribute("aria-pressed", nextTheme === "light" ? "true" : "false");
      toggle.setAttribute("aria-label", nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }

    if (themeMeta) {
      themeMeta.setAttribute("content", nextTheme === "light" ? "#f5f7fb" : "#070b14");
    }

    if (persist) {
      try {
        localStorage.setItem("shuyu-theme", nextTheme);
      } catch (error) {
        console.warn("Unable to save the color theme.", error);
      }
    }

    window.dispatchEvent(new CustomEvent("shuyu-theme-change", { detail: nextTheme }));
  }

  function initTheme() {
    var toggle = document.getElementById("theme-toggle");
    setTheme(root.getAttribute("data-theme"), false);

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
    });
  }

  function initNavigation() {
    var header = document.getElementById("site-header");
    var nav = document.getElementById("site-nav");
    var toggle = document.getElementById("site-nav-toggle");
    var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav__link"));

    function setMenu(open) {
      if (!nav || !toggle) {
        return;
      }

      nav.classList.toggle("is-open", open);
      body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        setMenu(toggle.getAttribute("aria-expanded") !== "true");
      });

      links.forEach(function (link) {
        link.addEventListener("click", function () {
          setMenu(false);
        });
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          setMenu(false);
        }
      });

      document.addEventListener("click", function (event) {
        if (body.classList.contains("nav-open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
          setMenu(false);
        }
      });
    }

    function updateHeader() {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 18);
      }
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href");
        return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) {
      return;
    }

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
          if (active) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, {
      rootMargin: "-34% 0px -58% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

    if (!items.length) {
      return;
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    root.classList.add("reveal-ready");

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -9% 0px",
      threshold: 0.12
    });

    items.forEach(function (item) {
      var bounds = item.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        item.classList.add("is-visible");
      } else {
        observer.observe(item);
      }
    });
  }

  function initRotatingText() {
    var target = document.getElementById("rotating-focus");

    if (!target || reduceMotion) {
      return;
    }

    var words = (target.getAttribute("data-words") || "")
      .split("|")
      .map(function (word) {
        return word.trim();
      })
      .filter(Boolean);

    if (words.length < 2) {
      return;
    }

    var wordIndex = 0;
    var characterIndex = words[0].length;
    var deleting = true;

    function tick() {
      var word = words[wordIndex];

      if (deleting) {
        characterIndex -= 1;
        target.textContent = word.slice(0, Math.max(characterIndex, 0));

        if (characterIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          window.setTimeout(tick, 280);
          return;
        }

        window.setTimeout(tick, 34);
        return;
      }

      word = words[wordIndex];
      characterIndex += 1;
      target.textContent = word.slice(0, characterIndex);

      if (characterIndex >= word.length) {
        deleting = true;
        window.setTimeout(tick, 1650);
        return;
      }

      window.setTimeout(tick, 68);
    }

    window.setTimeout(tick, 1750);
  }

  function initCardSpotlights() {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.querySelectorAll(".interactive-card").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var bounds = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", event.clientX - bounds.left + "px");
        card.style.setProperty("--spot-y", event.clientY - bounds.top + "px");
      });
    });
  }

  function initPortraitTilt() {
    var card = document.getElementById("portrait-card");

    if (!card || reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    var frame = null;

    card.addEventListener("pointermove", function (event) {
      var bounds = card.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      var y = (event.clientY - bounds.top) / bounds.height - 0.5;

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(function () {
        card.style.setProperty("--tilt-x", (-y * 7).toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", (x * 7).toFixed(2) + "deg");
      });
    });

    card.addEventListener("pointerleave", function () {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  }

  function initScrollProgress() {
    var bar = document.getElementById("scroll-progress-bar");
    var scheduled = false;

    if (!bar) {
      return;
    }

    function update() {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      bar.style.width = progress * 100 + "%";
      scheduled = false;
    }

    function requestUpdate() {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  }

  function initAmbientCanvas() {
    var canvas = document.getElementById("ambient-canvas");

    if (!canvas || reduceMotion) {
      return;
    }

    var context = canvas.getContext("2d");
    if (!context) {
      console.warn("Ambient canvas rendering is unavailable in this browser.");
      return;
    }

    var particles = [];
    var width = 0;
    var height = 0;
    var pixelRatio = 1;
    var animationFrame = null;
    var isVisible = true;
    var palette = {};

    function updatePalette() {
      var light = root.getAttribute("data-theme") === "light";
      palette.dot = light ? "rgba(0, 127, 155, 0.38)" : "rgba(103, 232, 249, 0.42)";
      palette.line = light ? "rgba(104, 68, 199, 0.09)" : "rgba(167, 139, 250, 0.09)";
    }

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.2 + 0.45
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      var targetCount = Math.max(22, Math.min(48, Math.round(width * height / 31000)));
      particles = [];
      for (var i = 0; i < targetCount; i += 1) {
        particles.push(makeParticle());
      }
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      particles.forEach(function (particle, index) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) {
          particle.x = width + 10;
        } else if (particle.x > width + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = height + 10;
        } else if (particle.y > height + 10) {
          particle.y = -10;
        }

        context.beginPath();
        context.fillStyle = palette.dot;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (var otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          var other = particles[otherIndex];
          var dx = particle.x - other.x;
          var dy = particle.y - other.y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 135) {
            context.beginPath();
            context.strokeStyle = palette.line;
            context.globalAlpha = 1 - distance / 135;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      });

      if (isVisible) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    function restart() {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      animationFrame = window.requestAnimationFrame(draw);
    }

    updatePalette();
    resize();
    restart();

    window.addEventListener("resize", function () {
      resize();
    });

    window.addEventListener("shuyu-theme-change", updatePalette);

    document.addEventListener("visibilitychange", function () {
      isVisible = !document.hidden;
      if (isVisible) {
        restart();
      } else if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    });
  }

  initTheme();
  initNavigation();
  initReveal();
  initRotatingText();
  initCardSpotlights();
  initPortraitTilt();
  initScrollProgress();
  initAmbientCanvas();
}());
