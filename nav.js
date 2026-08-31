// =========================
// FILE: nav.js
// Mobile menu + dropdown toggles
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");
    const dropdowns = Array.from(document.querySelectorAll(".dropdown"));
    const dropdownToggles = Array.from(document.querySelectorAll(".dropdownToggle"));
  
    if (!navToggle || !primaryNav) return; // safety
  
    function closeAllDropdowns() {
      dropdowns.forEach((dd) => {
        dd.classList.remove("open");
        const btn = dd.querySelector(".dropdownToggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  
    function closeNav() {
      primaryNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      closeAllDropdowns();
    }
  
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      if (!isOpen) closeAllDropdowns();
    });
  
    dropdownToggles.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
  
        const dropdown = btn.closest(".dropdown");
        const isOpen = dropdown.classList.contains("open");
  
        // close others, then toggle this
        closeAllDropdowns();
        dropdown.classList.toggle("open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  
    // Close nav when clicking outside
    document.addEventListener("click", (e) => {
      const clickedInsideNav = e.target.closest(".navDiv");
      if (!clickedInsideNav) closeNav();
    });
  
    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  
    // Reset state on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900) {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        closeAllDropdowns();
      }
    });
  });
  