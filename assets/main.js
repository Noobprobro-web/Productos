/* ==========================================================================
   ATELIER MINIMALIST THEME - GSAP ANIMATION ENGINE
   Choreographed Entrances, Micro-interactions, & ScrollTrigger Reveals
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is available
  if (typeof gsap === "undefined") {
    console.warn("GSAP script not detected. Animations skipped.");
    return;
  }

  // Register ScrollTrigger plugin if present
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // MatchMedia for Accessibility & Reduced Motion
  let mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      let { reduceMotion } = context.conditions;

      if (reduceMotion) {
        // If user prefers reduced motion, render elements cleanly without delays
        gsap.set(".gsap-hero-badge, .gsap-hero-title1, .gsap-hero-title2, .gsap-hero-text, .gsap-hero-cta, .gsap-hero-media, .gsap-reveal", {
          opacity: 1,
          y: 0,
          scale: 1
        });
        return;
      }

      // -----------------------------------------------------------------
      // 1. HERO ENTRANCE TIMELINE (Page Load Choreography)
      // -----------------------------------------------------------------
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });

      heroTl
        .fromTo(
          ".gsap-hero-badge",
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        )
        .fromTo(
          ".gsap-hero-title1",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0 },
          "-=0.3"
        )
        .fromTo(
          ".gsap-hero-title2",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          "-=0.5"
        )
        .fromTo(
          ".gsap-hero-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.5"
        )
        .fromTo(
          ".gsap-hero-cta .btn",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .fromTo(
          ".gsap-hero-media",
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power2.out" },
          "-=0.8"
        );

      // -----------------------------------------------------------------
      // 2. SCROLL TRIGGER REVEALS (Sections & Header)
      // -----------------------------------------------------------------
      if (typeof ScrollTrigger !== "undefined") {

        // Section Headers (Title 2, Title 3 & Paragraphs)
        gsap.utils.toArray(".section-header").forEach((header) => {
          gsap.fromTo(
            header.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // SECTION 3: Best Sellers Stagger Grid
        if (document.querySelector(".products-grid")) {
          gsap.fromTo(
            ".products-grid .product-card",
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".products-grid",
                start: "top 82%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // SECTION 4: Category Menu Stagger Grid
        if (document.querySelector(".categories-grid")) {
          gsap.fromTo(
            ".categories-grid .category-card",
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.18,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".categories-grid",
                start: "top 82%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // SECTION 5: Reviews Stagger Grid
        if (document.querySelector(".reviews-grid")) {
          gsap.fromTo(
            ".reviews-grid .review-card",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".reviews-grid",
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Header Shadow Elevation on Scroll
        ScrollTrigger.create({
          start: "top -50",
          end: 99999,
          toggleClass: { className: "scrolled-shadow", targets: ".site-header" }
        });
      }
    }
  );
});
