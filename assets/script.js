window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("mostrar");

  // Carregar header
  fetch('/site_mulherTech/pages/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      destacarLinkAtivo('#header-placeholder nav a');
    })
    .catch(error => console.error('Erro ao carregar o header:', error));

  // Carregar menu mobile
  fetch('/site_mulherTech/pages/mobile-nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('mobile-nav-placeholder').innerHTML = data;

      // Toggle do menu mobile
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.mobile-menu');

      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('show');
        });
      }

      // Destacar link ativo no menu mobile
      destacarLinkAtivo('.mobile-menu a');
    })
    .catch(error => console.error('Erro ao carregar o menu mobile:', error));

  // Carregar footer
  fetch('/site_mulherTech/pages/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o footer:', error));

  // Carrossel de eventos
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
  const seta = document.querySelector(".seta");

  if (dateEl && monthEl && descEl && imageEl && seta) {
    seta.addEventListener("click", () => {
      current = (current + 1) % events.length;

      dateEl.textContent = events[current].date;
      monthEl.textContent = events[current].month;
      descEl.innerHTML = `<strong>${events[current].title}</strong> - ${events[current].desc}`;
      imageEl.src = events[current].img;
    });
  }
});

function abrirLink(url) {
  window.open(url, "_blank");
}

