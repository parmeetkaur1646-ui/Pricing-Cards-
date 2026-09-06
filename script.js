const courses = [
  {
    name: "Python Programming",
    icon: "🐍",
    desc: "Beginner-friendly course to build a strong programming foundation.",
    price: 15,
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
    price: 23,
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
    price: 20,
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
 
function render() {
  cardsEl.innerHTML = courses.map(course => {
    const featuresHtml = course.features.map(f => `
      <li class="${f.included ? "" : "muted"}">${f.text}</li>
    `).join("");
 
    return `
      <div class="card ${course.featured ? "featured" : ""}">
        ${course.badge ? `<span class="badge">${course.badge}</span>` : ""}
        <div class="icon-circle">${course.icon}</div>
        <h2 class="course-name">${course.name}</h2>
        <p class="course-desc">${course.desc}</p>
        <div class="price">$${course.price}<span class="price-suffix"> /month</span></div>
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
 
modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});
 
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
  }
});
 
render();