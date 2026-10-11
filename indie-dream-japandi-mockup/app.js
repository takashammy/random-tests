(() => {
  const splash = document.getElementById("splash");
  const tabs = [...document.querySelectorAll(".tab")];
  const views = [...document.querySelectorAll(".view")];
  const fab = document.getElementById("fab");
  const scrollEl = document.querySelector(".scroll");

  function showView(name) {
    views.forEach((v) => {
      const on = v.dataset.view === name;
      v.classList.toggle("active", on);
      if (on) {
        v.style.animation = "none";
        // reflow to restart enter motion
        void v.offsetWidth;
        v.style.animation = "";
      }
    });
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
    fab.classList.toggle("visible", name === "events" || name === "board");
    if (scrollEl) scrollEl.scrollTop = 0;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => showView(tab.dataset.tab));
  });

  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => showView(el.dataset.go));
  });

  document.querySelectorAll(".filters .chip, .lang-row .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.parentElement;
      group.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  // Splash fades like the live app
  window.setTimeout(() => {
    splash?.classList.add("hide");
  }, 1600);
})();
