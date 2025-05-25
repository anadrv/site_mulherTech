fetch('/pages/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;


    destacarLinkAtivo();
  })
  .catch(error => console.error('Erro ao carregar o header:', error));

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("mostrar");
});

fetch('/pages/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o footer:', error));

  fetch('/pages/mobile-nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('mobile-nav-placeholder').innerHTML = data;


    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }
  })
  .catch(error => console.error('Erro ao carregar o menu mobile:', error));

function abrirLink(url) {
  window.open(url, "_blank");
}


function destacarLinkAtivo() {
  const path = window.location.pathname;
  const links = document.querySelectorAll("nav a");

  if (path === "/" || path === "/index.html") return;

  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}
