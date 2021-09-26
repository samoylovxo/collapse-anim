/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

export class Collapse {
  constructor(element) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    }

    // Elements
    this.button = document.querySelector('.collapse__button');
    this.textWrapper = document.querySelector('.collapse__text-wrapper');

    // Binds
    this.show = this.show.bind(this);

    // Listeners
    this.button.addEventListener('click', this.show);
  }

  show() {
    this.collapse(this.textWrapper);
  }

  collapse(element) {
    element.style.height = '';
    element.style.transition = 'none';

    const startHeight = element.offsetHeight;

    element.classList.toggle('collapsed');

    const endHeight = element.offsetHeight;

    element.style.height = `${startHeight}px`;

    requestAnimationFrame(() => {
      element.style.transition = '';
      element.style.height = `${endHeight}px`;
    });
  }
}
