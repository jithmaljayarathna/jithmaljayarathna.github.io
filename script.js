const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelectorAll('.nav-links a');
if (toggle) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
