// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 600);
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 120) el.classList.add("active");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// FLOATING IMAGE
const floating = document.querySelector(".floating");
let f = 0;
if(floating) setInterval(()=>{ f+=0.03; floating.style.transform=`translateY(${Math.sin(f)*15}px)`; },16);

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e=>{
  if(cursor){ cursor.style.left=e.clientX+"px"; cursor.style.top=e.clientY+"px"; }
});

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
document.querySelectorAll(".portfolio-item").forEach(item=>{
  item.addEventListener("click",()=>{
    modal.style.display="flex";
    modalImg.src=item.querySelector("img").src;
    modalTitle.innerText=item.querySelector("h3").innerText;
  });
});
document.getElementById("closeModal").onclick = ()=>{ modal.style.display="none"; };

// HEADER SCROLL
window.addEventListener("scroll", ()=>{
  document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 50);
});

// TELEGRAM FORM
function sendForm(){
  const name=document.querySelector('input[placeholder="Adınız"]').value.trim();
  const email=document.querySelector('input[placeholder="Email"]').value.trim();
  const msg=document.querySelector('textarea').value.trim();
  if(!name||!email||!msg){ alert("Zəhmət olmasa bütün sahələri doldurun!"); return; }
  const text=`Yeni mesaj:%0AAd: ${name}%0AEmail: ${email}%0AMesaj: ${msg}`;
  const botToken="BOT_TOKEN";
  const chatId="CHAT_ID";
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`)
    .then(r=>r.ok?alert("Mesaj göndərildi 🚀"):alert("Mesaj göndərilərkən xəta baş verdi!"))
    .catch(()=>alert("Mesaj göndərilərkən xəta baş verdi!"));
}

// SMOOTH SCROLL "Layihəyə başla"
document.getElementById("startProjectBtn").addEventListener("click", ()=>{
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});

// HAMBURGER TOGGLE
const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{ navLinks.classList.toggle("active"); });

// NAV ACTIVE LINK
const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links li a");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    const top=sec.offsetTop-80;
    if(scrollY>=top) current=sec.getAttribute("id");
  });
  navItems.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href")==="#"+current) a.classList.add("active");
  });
});
