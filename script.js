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
      emblem: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Gryffindor_ClearBG.png'
    },
    {
      name: 'Suplitherin 🐍',
      description: 'Os estrategistas e espertos das gambiarras geniais.',
      emblem: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Slytherin_ClearBG.png'
    },
    {
      name: 'Techclaw 🦅',
      description: 'Os estudiosos do sistema e dos logs.',
      emblem: 'https://upload.wikimedia.org/wikipedia/en/1/11/Ravenclaw_ClearBG.png'
    },
    {
      name: 'Bugpuff 🦡',
      description: 'Os pacientes e calmos que salvam o dia no silêncio.',
      emblem: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Hufflepuff_ClearBG.png'
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
