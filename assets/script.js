fetch('/pages/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o header:', error));

function abrirLink(url) {
    window.open(url, "_blank");
  }