const inputElements = document.querySelectorAll('input');
const submitBtn = document.querySelector('.quick-catering-request__submit');

function inputFocusHandler() {
  this.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.3)';
  this.style.outline = 'none';
}

function inputBlurHandler() {
  this.style.boxShadow = 'none';
}

for (const inputElem of inputElements) {
  inputElem.addEventListener('focus', inputFocusHandler);
  inputElem.addEventListener('blur', inputBlurHandler);
}