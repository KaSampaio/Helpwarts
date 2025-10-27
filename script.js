// ===========================
// script.js — Chapéu Seletor
// ===========================

document.getElementById('sorting-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const role = document.getElementById('role').value.trim();
  const hatThinking = document.getElementById('hat-thinking');
  const result = document.getElementById('result');
  const welcome = document.getElementById('welcome');
  const emblem = document.getElementById('house-emblem');
  const description = document.getElementById('house-description');

  if (!name || !role) return;

  // Oculta resultado anterior e mostra chapéu pensando
  result.classList.add('hidden');
  hatThinking.classList.remove('hidden');

  // Casas personalizadas
  const houses = [
    {
      name: 'Helpindor 🦁',
      description: 'Os corajosos que pegam os chamados impossíveis.',
      emblem: 'assets/Helpindor.png'
    },
    {
      name: 'Suplitherin 🐍',
      description: 'Os estrategistas e espertos das gambiarras geniais.',
      emblem: 'assets/suplitehrin.png'
    },
    {
      name: 'Techclaw 🦅',
      description: 'Os estudiosos do sistema e dos logs.',
      emblem: 'assets/techclaw.png'
    },
    {
      name: 'Bugpuff 🦡',
      description: 'Os pacientes e calmos que salvam o dia no silêncio.',
      emblem: 'assets/Bugpuff.png'
    }
  ];

  // Simula o chapéu pensando e sorteia a casa
  setTimeout(() => {
    hatThinking.classList.add('hidden');

    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    welcome.textContent = `Parabéns, ${name}! O Chapéu Seletor decidiu... ${randomHouse.name}!`;
    emblem.src = randomHouse.emblem;
    description.textContent = randomHouse.description;

    result.classList.remove('hidden');
  }, 2500);
});
