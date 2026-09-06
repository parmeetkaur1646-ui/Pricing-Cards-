const courses = [
  {
    name: "Python Programming",
    icon: "🐍",
    desc: "Beginner-friendly course to build a strong programming foundation.",
    monthly: 15,
    annual: 12,
    cta: "Choose Plan",
    featured: false,
    features: [
      { text: "Basics to intermediate concepts", included: true },
      { text: "Hands-on coding exercises", included: true },
      { text: "1 project review", included: true },
      { text: "1:1 mentor sessions", included: false },
    ]
  },
  {
    name: "C++ Programming",
    icon: "⚙️",
    desc: "Deepen your understanding of OOP, memory, and performance.",
    monthly: 23,
    annual: 18,
    cta: "Choose Plan",
    featured: true,
    badge: "BEST VALUE",
    features: [
      { text: "Everything in Python course", included: true },
      { text: "Object-oriented programming", included: true },
      { text: "2 monthly mentor sessions", included: true },
      { text: "Unlimited project reviews", included: true },
    ]
  },
  {
    name: "C Programming",
    icon: "🔧",
    desc: "Learn low-level programming and how computers really work.",
    monthly: 20,
    annual: 16,
    cta: "Choose Plan",
    featured: false,
    features: [
      { text: "Pointers and memory management", included: true },
      { text: "Data structures basics", included: true },
      { text: "1 project review", included: true },
      { text: "1:1 mentor sessions", included: false },
    ]
  }
];
 
const cardsEl = document.getElementById("cards");
const modalOverlay = document.getElementById("modalOverlay");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const billingSwitch = document.getElementById("billingSwitch");
const labelMonthly = document.getElementById("label-monthly");
const labelAnnual = document.getElementById("label-annual");
 
let annual = false;
 
function render() {
  cardsEl.innerHTML = courses.map(course => {
    const price = annual ? course.annual : course.monthly;
    const suffixText = annual ? "/month, billed yearly" : "/month";
 
    const featuresHtml = course.features.map(f => `
      <li class="${f.included ? "" : "muted"}">${f.text}</li>
    `).join("");
 
    return `
      <div class="card ${course.featured ? "featured" : ""}">
        ${course.badge ? `<span class="badge">${course.badge}</span>` : ""}
        <div class="icon-circle">${course.icon}</div>
        <h2 class="course-name">${course.name}</h2>
        <p class="course-desc">${course.desc}</p>
        <div class="price">$${price}<span class="price-suffix"> ${suffixText}</span></div>
        <ul class="features">${featuresHtml}</ul>
        <button class="cta" data-course="${course.name}">${course.cta}</button>
      </div>
    `;
  }).join("");
 
  document.querySelectorAll(".cta").forEach(btn => {
    btn.addEventListener("click", () => {
      const courseName = btn.getAttribute("data-course");
      modalText.textContent = `Your ${courseName} course has been selected successfully!`;
      modalOverlay.classList.add("open");
    });
  });
}
 
billingSwitch.addEventListener("click", () => {
  annual = !annual;
  billingSwitch.setAttribute("aria-checked", String(annual));
  labelMonthly.classList.toggle("active", !annual);
  labelAnnual.classList.toggle("active", annual);
  render();
});
 
modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});
 
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
  }
});
 
render();