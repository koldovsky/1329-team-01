const inputElements = document.querySelectorAll('input');
const submitBtn = document.querySelector('.quick-catering-request__submit');
// const container = document.querySelector('.quick-catering-request__form_container');

function inputFocusHandler() {
  this.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.3)';
  this.style.outline = 'none';
}

function inputBlurHandler() {
  this.style.boxShadow = 'none';
}

// function submitMouseOverHandler() {
//   this.style.position = 'absolute';
//   this.style.zIndex = '10';
//   const containerRect = container.getBoundingClientRect();
//   const maxX = containerRect.width - this.offsetWidth;
//   const maxY = containerRect.height - this.offsetHeight;

//   const randomX = Math.random() * maxX;
//   const randomY = Math.random() * maxY;

//   this.style.left = `${randomX}px`;
//   this.style.top = `${randomY}px`;
// }

for (const inputElem of inputElements) {
  inputElem.addEventListener('focus', inputFocusHandler);
  inputElem.addEventListener('blur', inputBlurHandler);
}
// submitBtn.addEventListener('mouseover', submitMouseOverHandler);
