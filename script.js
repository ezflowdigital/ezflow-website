const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const floatingWhatsApp = document.querySelector(".floating-whatsapp");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

function updateWhatsAppVisibility() {
  if (!floatingWhatsApp) return;

  const isMobile = window.innerWidth <= 768;
  const shouldShow = !isMobile || window.scrollY > 450;

  floatingWhatsApp.classList.toggle("is-visible", shouldShow);
}

window.addEventListener("scroll", updateWhatsAppVisibility, { passive: true });
window.addEventListener("resize", updateWhatsAppVisibility);
updateWhatsAppVisibility();

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
