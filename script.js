const btn = document.getElementById('animateBtn');
const message = document.getElementById('message');

// Load preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedPref = localStorage.getItem('buttonClicked');
  if (storedPref === 'true') {
    message.textContent = 'You clicked the button before!';
  }
});

// Function to store preference and animate button
btn.addEventListener('click', () => {
  localStorage.setItem('buttonClicked', 'true');
  message.textContent = 'Thanks for clicking! Preference saved.';

  // Trigger CSS animation
  btn.classList.remove('bounce'); // Reset if already applied
  void btn.offsetWidth;            // Force reflow
  btn.classList.add('bounce');
});
