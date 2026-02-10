// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('#menu ul');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Scroll reveal
const sections = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // ativa ao carregar

//carregar conteúdo do JSON

fetch('data/conteudo.json')
  .then(res => res.json())
  .then(data => {
    // Histórias
    const historias = data.historias;

    document.getElementById('historias-texto').innerHTML = `
      <h2>${historias.titulo}</h2>
      ${historias.texto.map(p => `<p>${p}</p>`).join('')}
    `;

    document.getElementById('historias-img').src = historias.imagem;

    //LÍNGUAS
    const linguas = data.linguas;
    
    document.getElementById('linguas-texto').innerHTML = `
    <h2>${linguas.titulo}</h2>
    ${linguas.texto.map(p => `<p>${p}</p>`).join('')}
    `;

    document.getElementById('linguas-img').src = linguas.imagem;

    //cultura
    const cultura = data.cultura;

    document.getElementById('cultura-texto').innerHTML = `
      <h2>${cultura.titulo}</h2>
      ${cultura.texto.map(p => `<p>${p}</p>`).join('')}
    `;

    document.getElementById('cultura-img').src = cultura.imagem;

    //folclore
    const folclore = data.folclore;

    document.getElementById('folclore-texto').innerHTML = `
      <h2>${folclore.titulo}</h2>
      ${folclore.texto.map(p => `<p>${p}</p>`).join('')}
    `;

    document.getElementById('folclore-img').src = folclore.imagem;
  });
