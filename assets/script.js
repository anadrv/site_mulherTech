const basePath = '/site_mulherTech/';

fetch('pages/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // **Ajusta os hrefs dos links dentro do header**
    document.querySelectorAll('#header-placeholder nav a').forEach(link => {
      const href = link.getAttribute('href');
      // Se o href não for absoluto, nem âncora (#)
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/')) {
        link.setAttribute('href', basePath + href);
      }
    });

    destacarLinkAtivo();
  })
  .catch(error => console.error('Erro ao carregar o header:', error));

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("mostrar");
});

fetch('pages/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o footer:', error));

  fetch('pages/mobile-nav.html')
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

  // Seleciona só os links dentro do header
  const links = document.querySelectorAll('#header-placeholder nav a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });
}

const events = [
  {
    date: "06",
    month: "nov",
    title: "Café Colaborativo",
    desc: "Encontro para conversa e acolhimento das novas integrantes na área de TI da faculdade.",
    img: "assets/images/event-image.png"
  },
  {
    date: "15",
    month: "maio",
    title: "Workshop Front-end",
    desc: "Oficina prática de HTML, CSS e JS voltada para iniciantes.",
    img: "assets/images/podcast.jpg"
  },
  {
    date: "30",
    month: "junho",
    title: "Papo Tech",
    desc: "Bate-papo com profissionais da área sobre carreira e tecnologia.",
    img: "assets/images/podcast.jpg"
  }
];


let current = 0;

const dateEl = document.querySelector(".date h3");
const monthEl = document.querySelector(".date p");
const descEl = document.querySelector(".description");
const imageEl = document.querySelector(".event-img");

document.querySelector(".seta").addEventListener("click", () => {
  current = (current + 1) % events.length;

  dateEl.textContent = events[current].date;
  monthEl.textContent = events[current].month;
  descEl.innerHTML = `<strong>${events[current].title}</strong> - ${events[current].desc}`;
  imageEl.src = events[current].img;
});
