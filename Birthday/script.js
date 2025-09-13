// Modal
const dlg = document.getElementById("card");
document.getElementById("openCard").addEventListener("click", () => { dlg.showModal();
spawnConfetti(120);}
)

;
document.getElementById("closeCard").addEventListener("click", () => dlg.close());

// Shake message
const msg = document.getElementById("cardMsg");
document.getElementById("shakeBtn").addEventListener("click", () => {
  msg.classList.add("shake");
  setTimeout(() => msg.classList.remove("shake"), 600);
});

// Image preview
/*const file = document.getElementById("file");
const preview = document.getElementById("preview");
file.addEventListener("change", (e) => {
  const f = e.target.files?.[0];
  if (!f) return;
  const url = URL.createObjectURL(f);
  preview.src = url;
  preview.style.display = "block"; 
});*/

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confetti = [];
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

function spawnConfetti(n = 80) {
  for (let i = 0; i < n; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: -10,
      r: 4 + Math.random() * 6,
      c: `hsl(${Math.random() * 360}, 80%, 70%)`,
      s: 2 + Math.random() * 3
    });
  }
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((p) => {
    p.y += p.s;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();
  });
  confetti = confetti.filter((p) => p.y < canvas.height);
  requestAnimationFrame(draw);
}
draw();
document.getElementById("confettiBtn").addEventListener("click", () => spawnConfetti(120));

// Hearts floating
const heartsContainer = document.getElementById("hearts");
document.getElementById("heartsBtn").addEventListener("click", () => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight - 30 + "px";
  heart.textContent = "💖";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
});
// === Slide Show ===
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if(n > slides.length) { slideIndex = 1; }
  if(n < 1) { slideIndex = slides.length; }
  for(let i=0;i<slides.length;i++) slides[i].style.display="none";
  for(let i=0;i<dots.length;i++) dots[i].className=dots[i].className.replace(" active","");
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className+=" active";
}
setInterval(()=>{ plusSlides(1); },4000);
