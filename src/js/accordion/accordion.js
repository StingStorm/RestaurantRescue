import './acc-render';
import { renderAccordions } from './acc-render';

// Rendering accordions from accordion-data.json
renderAccordions();

const accordions = document.querySelectorAll('.accordion');

// Instantly open first accordion
toggleAccoridon(accordions[0]);

accordions.forEach(acc => {
  acc.addEventListener('click', handleExpand);
});

function handleExpand() {
  const accToClose = document.querySelector('.accordion[data-expanded]');

  if (accToClose && accToClose !== this) {
    toggleAccoridon(accToClose);
  }

  toggleAccoridon(this);
}

function toggleAccoridon(acc) {
  acc.classList.toggle('active');

  if (acc.dataset.expanded === undefined) {
    acc.dataset.expanded = '';
  } else {
    delete acc.dataset.expanded;
  }

  const panel = acc.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}
