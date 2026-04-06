(function () {
  var loader = document.getElementById("page-loader");
  var yearEl = document.getElementById("year");
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("mobile-drawer");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function hideLoader() {
    if (!loader) return;
    loader.classList.add("is-done");
    loader.setAttribute("aria-busy", "false");
  }

  if (loader) {
    window.setTimeout(hideLoader, 1200);
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      drawer.hidden = open;
    });
  }
})();
