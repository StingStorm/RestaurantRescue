(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
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

  window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
