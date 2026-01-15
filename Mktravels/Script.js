// Basic interactivity for the MK Tours & Travels landing page
// sas--//

document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(year);

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.style.display = expanded ? 'none' : 'block';
    });

    // ensure nav is hidden on small screens at load
    if (window.innerWidth < 700) mainNav.style.display = 'none';
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 700) {
        mainNav.style.display = 'block';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        mainNav.style.display = 'none';
      }
    });
  }

  // Simple client-side form validation (prevent submit with empty required)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let ok = true;
      if (!name.value.trim()) { ok = false; name.focus(); }
      else if (!email.value.trim()) { ok = false; email.focus(); }
      else if (!message.value.trim()) { ok = false; message.focus(); }

      if (!ok) {
        e.preventDefault();
        alert('Please fill the required fields: name, email and message.');
      } else {
        // For now we prevent actual submission and show a success message.
        // Remove the following lines to let the form post to your backend.
        e.preventDefault();
        alert('Thanks! Your message has been received — we will contact you shortly.');
        form.reset();
      }
    });
  }

  // OPTIONAL: simple hover/click handlers for destination cards (progressive enhancement)
  const destGrid = document.getElementById('destinations-grid');
  if (destGrid) {
    destGrid.addEventListener('click', (ev) => {
      const card = ev.target.closest('.dest-card');
      if (card) {
        // placeholder behavior: show name of destination
        const name = card.querySelector('h4') ? card.querySelector('h4').textContent : 'Destination';
        alert('You clicked: ' + name + '\nContact us for packages and dates.');
      }
    });
  }

});
