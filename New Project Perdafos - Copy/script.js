class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // Script untuk mengatur perilaku navbar saat di-scroll
window.addEventListener("", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 0) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px"; // Sesuaikan dengan tinggi navbar Anda
  }
});


  // animasi fade in

// Fungsi yang akan dipanggil ketika elemen masuk ke dalam viewport
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade"); // Menambahkan kelas untuk memicu animasi
      observer.unobserve(entry.target); // Berhenti memantau setelah animasi diaktifkan
    }
  });
}

// Membuat instance Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Memantau elemen dengan kelas "element-yang-dianimasikan"
const animatedElements = document.querySelectorAll(".animation");
animatedElements.forEach((element) => {
  observer.observe(element);
});

