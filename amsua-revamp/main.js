const hubs = {
  hongkong: {
    name: "Hong Kong HQ",
    body: "AMSUA Trading Co., Ltd — Alpha House, Nathan Road, Tsim Sha Tsui. Head office for global coordination, with a 135,000 sq ft owned warehouse and transport fleet in Yuen Long.",
    meta: "amsuahk@amsua.com · +852 2721 3225",
  },
  guangzhou: {
    name: "Guangzhou",
    body: "Ready stocks, in-house packing, container loading, and consolidation / groupage services for West African ports — including pressure packing.",
    meta: "amsuagz@amsua.com · +86 20 8322 9477",
  },
  yiwu: {
    name: "Yiwu",
    body: "Specialist export desk for Yiwu-sourced general merchandise, connecting bulk buyers to one of China’s densest wholesale markets.",
    meta: "amsuayiwu@gmail.com · +86 579 8559 8264",
  },
  ajman: {
    name: "Ajman / Dubai",
    body: "UAE showroom and Ajman Free Zone warehouse with ready stocks for Middle East, East and West African buyers — premises owned by AMSUA.",
    meta: "amsua@emirates.net.ae · +971 6 740 7865",
  },
  uk: {
    name: "United Kingdom",
    body: "AMSUA (UK) Limited — office, showroom and ~40,000 sq ft warehouse for immediate deliveries to UK and European customers.",
    meta: "Serving UK & Europe wholesale buyers",
  },
  lome: {
    name: "Lomé",
    body: "West African corridor presence supporting buyers receiving consolidated containers from Guangzhou and Hong Kong.",
    meta: "West Africa destination support",
  },
};

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const hubName = document.getElementById("hub-name");
const hubBody = document.getElementById("hub-body");
const hubMeta = document.getElementById("hub-meta");
const form = document.getElementById("inquiry-form");
const formNote = document.getElementById("form-note");

function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toggle?.addEventListener("click", () => {
  const open = mobileNav.hasAttribute("hidden");
  if (open) mobileNav.removeAttribute("hidden");
  else mobileNav.setAttribute("hidden", "");
  toggle.setAttribute("aria-expanded", String(open));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".hub").forEach((node) => {
  node.addEventListener("click", () => {
    const key = node.dataset.hub;
    const data = hubs[key];
    if (!data) return;
    document.querySelectorAll(".hub").forEach((h) => h.classList.remove("is-active"));
    node.classList.add("is-active");
    hubName.textContent = data.name;
    hubBody.textContent = data.body;
    hubMeta.textContent = data.meta;
    hubName.parentElement.style.animation = "none";
    // reflow for subtle refresh
    void hubName.parentElement.offsetWidth;
    hubName.parentElement.style.animation = "";
  });
});

document.querySelector('.hub[data-hub="hongkong"]')?.classList.add("is-active");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal, .capability, .category-grid li").forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.hidden = false;
  form.reset();
});
