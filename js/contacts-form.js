const form = document.getElementById("contact-form");
const submitButton = form.querySelector("button[type='submit']");
const message = document.getElementById("form-message");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      
      submitButton.disabled = true;
      submitButton.textContent = "Please wait....";
      
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(object),
        });
  
        if (response.ok) {
          message.textContent = "Form submitted successfully!";
          message.style.color = "green";
          form.reset();
        } else {
          message.textContent = "Error submitting the form.";
          message.style.color = "red";
        }
      } catch (error) {
        message.textContent = "Network error. Try again later.";
        message.style.color = "red";
      }
  
      submitButton.disabled = false;
      submitButton.textContent = "Send";
  
      setTimeout(() => (message.textContent = ""), 3000);
    });
  