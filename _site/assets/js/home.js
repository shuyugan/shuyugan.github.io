(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setTheme(theme, persist) {
    var nextTheme = theme === "dark" ? "dark" : "light";
    var toggle = document.getElementById("theme-toggle");
    var themeMeta = document.getElementById("theme-color-meta");

    root.setAttribute("data-theme", nextTheme);

    if (toggle) {
      toggle.setAttribute("aria-pressed", nextTheme === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }

    if (themeMeta) {
      themeMeta.setAttribute("content", nextTheme === "dark" ? "#17191c" : "#faf9f6");
    }

    if (persist) {
      try {
        localStorage.setItem("shuyu-theme-v2", nextTheme);
      } catch (error) {
        console.warn("Unable to save the color theme.", error);
      }
    }
  }

  function initTheme() {
    var toggle = document.getElementById("theme-toggle");
    setTheme(root.getAttribute("data-theme"), false);

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
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
        header.classList.toggle("is-scrolled", window.scrollY > 10);
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

    var observer = new IntersectionObserver(function (entries) {
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
      rootMargin: "-32% 0px -58% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

    if (!items.length || reduceMotion || !("IntersectionObserver" in window)) {
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
      rootMargin: "0px 0px -6% 0px",
      threshold: 0.08
    });

    items.forEach(function (item) {
      var bounds = item.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.95 && bounds.bottom > 0) {
        item.classList.add("is-visible");
      } else {
        observer.observe(item);
      }
    });
  }

  function initFocusRotation() {
    var target = document.getElementById("rotating-focus");
    var description = document.getElementById("rotating-focus-description");
    var counter = document.getElementById("focus-counter");
    var progress = document.getElementById("focus-progress");

    if (!target || reduceMotion) {
      return;
    }

    var items = (target.getAttribute("data-items") || "")
      .split("|")
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);

    var descriptions = description
      ? (description.getAttribute("data-items") || "")
        .split("|")
        .map(function (item) {
          return item.trim();
        })
      : [];

    if (items.length < 2) {
      return;
    }

    var index = 0;

    function restartProgress() {
      if (!progress) {
        return;
      }

      progress.classList.remove("is-running");
      void progress.offsetWidth;
      progress.classList.add("is-running");
    }

    restartProgress();

    window.setInterval(function () {
      target.classList.add("is-changing");
      if (description) {
        description.classList.add("is-changing");
      }

      window.setTimeout(function () {
        index = (index + 1) % items.length;
        target.textContent = items[index];
        if (description && descriptions[index]) {
          description.textContent = descriptions[index];
        }
        if (counter) {
          counter.textContent = ("0" + (index + 1)).slice(-2) + " / " + ("0" + items.length).slice(-2);
        }
        target.classList.remove("is-changing");
        if (description) {
          description.classList.remove("is-changing");
        }
        restartProgress();
      }, 240);
    }, 4000);
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

  initTheme();
  initNavigation();
  initReveal();
  initFocusRotation();
  initScrollProgress();
}());
