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
