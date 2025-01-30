const inputElements = document.querySelectorAll('input');
const submitBtn = document.querySelector('.quick-catering-request__submit');
const form = document.querySelector('#hire-us-form')
const result = document.querySelector('#result');
const hint = document.querySelector('.quick-catering-request__hint');
const inputPhone = document.querySelector('input[type="tel"]');

function inputFocusHandler() {
  this.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.3)';
  this.style.outline = 'none';
}

function inputBlurHandler() {
  this.style.boxShadow = 'none';
}

function phoneNumberHint(e) {
  hint.style.visibility = 'visible';
  hint.style.left = `${e.clientX}px`;
  hint.style.top = `${e.clientY}px`;
}

function hidePhoneNumberHint() {
  hint.style.visibility = 'hidden';
}

async function sendData(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."
  const response = await fetch(
    'https://api.web3forms.com/submit',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    }
  )
  const responseData = await response.json();
  if (response.status === 200) {
    result.innerHTML = "Form submitted successfully"
  } else {
    result.innerHTML = "Something went wrong"
  }
  this.reset();
  setTimeout(() => {result.style.display = 'none';}, 5000);
}


for (const inputElem of inputElements) {
  inputElem.addEventListener('focus', inputFocusHandler);
  inputElem.addEventListener('blur', inputBlurHandler);
}

inputPhone.addEventListener('mouseover', phoneNumberHint);
inputPhone.addEventListener('mouseout', hidePhoneNumberHint);

form.addEventListener('submit', sendData)