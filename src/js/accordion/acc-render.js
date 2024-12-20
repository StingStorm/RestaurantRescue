import faq from './accordion-data.json';
import sprite from '../../img/sprite.svg';

const accThumb = document.querySelector('.accordion-thumb');

export function renderAccordions() {
  const murkup = faq
    .map(item => {
      return `<li class="accordion-thumb__item">
        <div class="accordion-wrapper">
          <button class="accordion" type="button">
            <p>${item.question}</p>
            <svg width="28" height="28">
              <use
                class="accordion-toggle-icon"
                href="${sprite}#icon-accordion-open"
              ></use>
            </svg>
          </button>
          <div class="panel">
            <p>${item.answer}</p>
          </div>
        </div>
      </li>`;
    })
    .join('');

  accThumb.innerHTML = murkup;
}
