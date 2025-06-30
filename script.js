// Button click alert
document.getElementById('alertBtn').addEventListener('click', () => {
  alert('You clicked the button! Nice!');
});

// Simple contact form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageEl = document.getElementById('formMessage');

  if (name && email) {
    messageEl.textContent = `Thanks for reaching out, ${name}! We'll get back to you at ${email}.`;
    messageEl.style.color = 'green';

    // Clear form fields
    e.target.reset();
  } else {
    messageEl.textContent = 'Please fill in both your name and email.';
    messageEl.style.color = 'red';
  }
});
