// Hamburger Menu Toggle
const menuIcon = document.querySelector('.navbar .menu-icon');
const navLinks = document.querySelector('.navbar .nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send this data to a server
  // For now, we'll just show an alert
  alert(`Thank you, ${name}! Your message about "${subject}" has been received. We'll contact you at ${email} soon.`);
  
  // Reset form
  contactForm.reset();
});

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

// Load cart count when page loads
window.addEventListener('DOMContentLoaded', updateCartCount);