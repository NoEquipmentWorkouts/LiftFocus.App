// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', function() {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic Spots Counter (Optional Enhancement)
  const spotsElement = document.getElementById('spots-counter');
  if (spotsElement) {
    let spotsLeft = localStorage.getItem('liftfocusSpots') || 751;
    spotsLeft = parseInt(spotsLeft);

    // Randomly decrease by 1-3 to simulate activity (70% chance)
    if (Math.random() > 0.3) {
      const decrement = Math.floor(Math.random() * 3) + 1;
      spotsLeft = Math.max(100, spotsLeft - decrement);
      localStorage.setItem('liftfocusSpots', spotsLeft);
    }

    spotsElement.textContent = spotsLeft.toLocaleString();
  }

});
