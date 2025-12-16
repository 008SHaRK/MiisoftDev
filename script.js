// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 600);
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120)
      el.classList.add("active");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// FLOATING IMAGE
const floating = document.querySelector(".floating");
let f = 0;
if (floating)
  setInterval(() => {
    f += 0.03;
    floating.style.transform = `translateY(${Math.sin(f) * 15}px)`;
  }, 16);

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// HEADER SCROLL
window.addEventListener("scroll", () => {
  document
    .querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// FORM MODAL ELEMENTS
const formModal = document.getElementById("formModal");
const formModalText = document.getElementById("formModalText");
const closeFormModal = document.querySelector(".close-form-modal");

function showFormModal(message) {
  formModalText.textContent = message;
  formModal.classList.add("active");

  setTimeout(() => {
    formModal.classList.remove("active");
  }, 2000);
}

closeFormModal.onclick = () => formModal.classList.remove("active");
formModal.onclick = (e) => {
  if (e.target === formModal) formModal.classList.remove("active");
};

// TELEGRAM FORM
function sendForm() {
  const name = document.querySelector('input[placeholder="Adınız"]').value.trim();
  const email = document.querySelector('input[placeholder="Email"]').value.trim();
  const msg = document.querySelector('textarea').value.trim();

  if (!name || !email || !msg) {
    showFormModal("Zəhmət olmasa bütün sahələri doldurun!");
    return;
  }

  const text = `Yeni mesaj:%0AAd: ${name}%0AEmail: ${email}%0AMesaj: ${msg}`;
  const botToken = "8512122111:AAFpvpdc7Y30yuURNzgDUgfceQ2Ye5K0uqc"; // string olmalıdır
  const chatId = "1144830113"; // string olmalıdır

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`)
    .then((r) => {
      if (r.ok) {
        showFormModal("Mesaj göndərildi 🚀");
        document.querySelector('input[placeholder="Adınız"]').value = "";
        document.querySelector('input[placeholder="Email"]').value = "";
        document.querySelector('textarea').value = "";
      } else {
        showFormModal("Mesaj göndərilərkən xəta baş verdi!");
      }
    })
    .catch(() => showFormModal("Mesaj göndərilərkən xəta baş verdi!"));
}

// SMOOTH SCROLL "Layihəyə başla"
document.getElementById("startProjectBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// HAMBURGER TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// NAV ACTIVE LINK
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 80;
    if (scrollY >= top) current = sec.getAttribute("id");
  });
  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// CASE STUDY MODAL
const modal = document.getElementById("caseModal");
const modalImg = document.getElementById("caseImg");
const modalTitle = document.getElementById("caseTitle");
const modalDesc = document.getElementById("caseDesc");
const modalLink = document.getElementById("caseLink");

document.querySelectorAll(".case-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalImg.src = btn.dataset.img;
    modalTitle.textContent = btn.dataset.title;
    modalDesc.textContent = btn.dataset.desc;
    modalLink.href = btn.dataset.link;
    modal.classList.add("active");
  });
});

document.querySelector(".close-modal").onclick = () => {
  modal.classList.remove("active");
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
};

// SAYTA İLK GİRİŞDƏ NEWS POPUP
window.addEventListener("load", () => {
  const newsModal = document.getElementById("newsModal");
  const closeNews = document.querySelector(".close-news-modal");

  newsModal.classList.add("active");

  closeNews.onclick = () => newsModal.classList.remove("active");

  newsModal.onclick = (e) => {
    if (e.target === newsModal) newsModal.classList.remove("active");
  };
});

document.querySelectorAll('.view-indicator').forEach(indicator=>{
  indicator.addEventListener('click', ()=>{
    const modal = document.getElementById("caseModal");
    document.getElementById("caseImg").src = indicator.dataset.img;
    document.getElementById("caseTitle").textContent = indicator.dataset.title;
    document.getElementById("caseDesc").textContent = indicator.dataset.desc;
    document.getElementById("caseLink").href = indicator.dataset.link;
    modal.classList.add('active');
  });
});
