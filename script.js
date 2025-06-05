function showSidebar() {
    const sidebar = document.querySelector('.nav__2__sidebar');
    sidebar.style.display = 'flex';
}

function hide() {
    const hidebar = document.querySelector('.nav__2__sidebar');
    hidebar.style.display = 'none';
}
var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    function toggleHeart(el) {
  el.classList.toggle("active");
  el.textContent = el.classList.contains("active") ? "♥" : "♡";
}