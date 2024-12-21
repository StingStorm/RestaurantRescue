(() => {
  const overlay = document.querySelector('.js-menu-container');
  const mobileMenu = document.querySelector('.js-mobile-menu');
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const anchors = overlay.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    overlay.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    if (anchors.length === 0) return;

    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMenu);
      });
      return;
    }

    anchors.forEach(anchor => {
      anchor.removeEventListener('click', toggleMenu);
    });
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target)) {
      toggleMenu();
    }
  });

  window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    overlay.classList.remove('is-open');
    openMenuBtn.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
