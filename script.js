// GACEB Scholar – Basic interactions

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Category filter (Library)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    document.querySelectorAll('.subject-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Auth tabs
const authTabs = document.getElementById('authTabs');
if (authTabs) {
  authTabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      authTabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.t;
      document.getElementById('signupForm').hidden = target !== 'signup';
      document.getElementById('signinForm').hidden = target !== 'signin';
    });
  });
}

// UNEB Countdown – set your exam date here
// Example: 1 November 2026 at 08:00
const examDate = new Date('2026-11-01T08:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = examDate - now;

  if (distance < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  document.getElementById('days').textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  document.getElementById('hours').textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  document.getElementById('minutes').textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  document.getElementById('seconds').textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
