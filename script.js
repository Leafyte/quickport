// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Highlight the nav link of the section in view
const links = [...nav.querySelectorAll('a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));

// Copy email
const copyBtn = document.getElementById('copy-email');
const toast = document.getElementById('toast');
copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email copied: ' + email;
  } catch {
    toast.textContent = 'Copy failed. Email me at ' + email;
  }
  setTimeout(() => (toast.textContent = ''), 3500);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
