(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const contactLink = document.querySelector('[data-email]');
  if (contactLink) {
    const [reversedDomain, reversedUser] = contactLink.dataset.email.split('|');
    const email = `${[...reversedUser].reverse().join('')}@${[...reversedDomain].reverse().join('')}`;

    contactLink.href = `mailto:${email}`;
    contactLink.removeAttribute('target');
    contactLink.removeAttribute('rel');
    contactLink.setAttribute('aria-label', `Email Davide at ${email}`);
    contactLink.querySelector('.contact-email').textContent = email;
  }
})();
