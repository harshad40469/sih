/**
 * Pune Varsa — High Performance Experience & Micro-Physics Engine
 * Inspired by Apple, Linear, Stripe, Vercel & Framer
 * 60 FPS GPU-accelerated interaction layers (requestAnimationFrame + IntersectionObserver)
 */

(function () {
  'use strict';

  // Global mouse position tracking with linear interpolation (Lerp)
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const cursorDot = { x: mouse.x, y: mouse.y };
  const cursorGlow = { x: mouse.x, y: mouse.y };

  // Setup ambient background canvas & cursor light spotlight
  function initAmbientEngine() {
    // 1. Ambient Cursor Spotlight & Custom Pointer
    const spotlightEl = document.createElement('div');
    spotlightEl.id = 'ambient-spotlight';
    spotlightEl.className = 'ambient-spotlight-layer';
    document.body.appendChild(spotlightEl);

    const cursorDotEl = document.createElement('div');
    cursorDotEl.id = 'custom-cursor-dot';
    cursorDotEl.className = 'custom-cursor-dot-layer';
    document.body.appendChild(cursorDotEl);

    // 2. Ambient Particles Floating Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'ambient-particle-canvas';
    canvas.className = 'ambient-particle-canvas-layer';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handler with debouncing
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Floating particles array (very light count: 28 particles for 60 FPS performance)
    const particleCount = Math.min(Math.floor(window.innerWidth / 50), 30);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.1,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25 - 0.1, // Slight upward drift
        color: Math.random() > 0.4 ? 'rgba(184, 135, 70,' : 'rgba(212, 167, 98,'
      });
    }

    // Main 60 FPS Render Loop
    function renderFrame() {
      // Smooth Cursor Lerp (0.15 dot, 0.06 glow)
      cursorDot.x += (mouse.x - cursorDot.x) * 0.22;
      cursorDot.y += (mouse.y - cursorDot.y) * 0.22;
      cursorGlow.x += (mouse.x - cursorGlow.x) * 0.08;
      cursorGlow.y += (mouse.y - cursorGlow.y) * 0.08;

      if (spotlightEl && cursorDotEl) {
        cursorDotEl.style.transform = `translate3d(${cursorDot.x}px, ${cursorDot.y}px, 0)`;
        spotlightEl.style.transform = `translate3d(${cursorGlow.x}px, ${cursorGlow.y}px, 0)`;
      }

      // Render Floating Dust Canvas
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(184, 135, 70, 0.4)';
        ctx.fill();
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }

  // Mousemove Listener for global tracking
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  // 3D Card Tilt & Dynamic Glare Engine
  function init3DTiltEngine() {
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const tiltCards = document.querySelectorAll('[data-tilt="true"]');
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          tiltCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            // Check if card is visible inside viewport
            if (
              rect.bottom < 0 ||
              rect.top > window.innerHeight ||
              rect.right < 0 ||
              rect.left > window.innerWidth
            ) {
              return;
            }

            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;

            const deltaX = mouseX - cardCenterX;
            const deltaY = mouseY - cardCenterY;

            const distanceSq = deltaX * deltaX + deltaY * deltaY;
            const maxDistance = 450; // Proximity threshold radius

            if (distanceSq < maxDistance * maxDistance) {
              // Tilt calculations (Max 8 degrees for clean elegance)
              const rotateY = (deltaX / (rect.width / 2)) * 6;
              const rotateX = -(deltaY / (rect.height / 2)) * 6;

              const relX = ((mouseX - rect.left) / rect.width) * 100;
              const relY = ((mouseY - rect.top) / rect.height) * 100;

              card.style.setProperty('--mouse-x', `${relX}%`);
              card.style.setProperty('--mouse-y', `${relY}%`);
              card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
            } else {
              card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
            }
          });

          // Magnetic Buttons Proximity Attraction Engine
          const magBtns = document.querySelectorAll('.btn-magnetic');
          magBtns.forEach((btn) => {
            const rect = btn.getBoundingClientRect();
            const btnCenterX = rect.left + rect.width / 2;
            const btnCenterY = rect.top + rect.height / 2;

            const distX = mouseX - btnCenterX;
            const distY = mouseY - btnCenterY;
            const dist = Math.hypot(distX, distY);

            if (dist < 70) {
              const pullFactor = 0.22;
              const pullX = distX * pullFactor;
              const pullY = distY * pullFactor;
              btn.style.transform = `translate3d(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px, 0) scale(1.03)`;
            } else {
              btn.style.transform = `translate3d(0, 0, 0) scale(1)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Scroll Reveal & Parallax Engine
  function initScrollParallaxEngine() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const targets = document.querySelectorAll('.reveal-init, [data-scroll-reveal="true"]');
      targets.forEach((el) => revealObserver.observe(el));
    };

    observeElements();
    // Re-observe periodically for dynamically rendered React components
    setInterval(observeElements, 1200);
  }

  // Initialize Experience Engine on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAmbientEngine();
      init3DTiltEngine();
      initScrollParallaxEngine();
    });
  } else {
    initAmbientEngine();
    init3DTiltEngine();
    initScrollParallaxEngine();
  }
})();
