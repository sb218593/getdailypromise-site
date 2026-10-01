// DailyPromise — interactions de la page d'accueil.
// En-tête : un filet apparaît dès qu'on fait défiler.
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Le fil du mois : 31 jours, aujourd'hui le 20, 16 promesses tenues avant.
const dots = document.getElementById('dots');
const missed = new Set([5, 11, 16]);
for (let day = 1; day <= 31; day++) {
  const dot = document.createElement('i');
  if (day < 20) dot.className = missed.has(day) ? '' : 'kept-dot';
  if (day === 20) dot.className = 'today';
  if (day > 20) dot.className = 'future';
  dot.style.transitionDelay = (day * 28) + 'ms';
  dots.appendChild(dot);
}

const month = document.getElementById('month');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        month.classList.add('is-visible');
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });
  observer.observe(month);
} else {
  month.classList.add('is-visible');
}

// Le moment « promesse tenue » se joue quand le téléphone devient visible.
const play = () => document.getElementById('screen').classList.add('play');
const phone = document.querySelector('.phone');
if ('IntersectionObserver' in window) {
  const phoneObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      play();
      phoneObserver.disconnect();
    }
  }, { threshold: 0.6 });
  phoneObserver.observe(phone);
} else {
  play();
}

// Le rejouer à la demande.
document.getElementById('replay').addEventListener('click', () => {
  const screen = document.getElementById('screen');
  const clone = screen.cloneNode(true);
  clone.classList.remove('play');
  screen.replaceWith(clone);
  requestAnimationFrame(() => requestAnimationFrame(play));
});
