import FortuneSpinner from './spinner.js';
import { pulseElement, showConfetti } from './animations.js';

// Initialize the spinner when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create the images directory if it doesn't exist
  ensureImagesDirectory();
  
  // Initialize spinner component
  const spinner = new FortuneSpinner();
  
  // Get UI elements
  const spinButton = document.getElementById('spin-button');
  const spinAgainButton = document.getElementById('spin-again');
  const spinnerElement = document.getElementById('spinner');
  
  // Add event listener for spin button
  spinButton.addEventListener('click', async () => {
    // Disable button during spinning
    spinButton.disabled = true;
    spinButton.textContent = 'Spinning...';
    
    // Add pulse animation to button
    await pulseElement(spinButton);
    
    // Start spinner
    await spinner.spin();
    
    // Show confetti effect
    showConfetti(document.querySelector('.container'));
    
    // Reset button
    spinButton.disabled = false;
    spinButton.textContent = 'SPIN';
  });
  
  // Add event listener for spin again button
  spinAgainButton.addEventListener('click', () => {
    spinner.reset();
    
    // Add pulse animation to button
    pulseElement(spinAgainButton);
    
    // Scroll back to spinner if needed
    spinnerElement.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add keyboard support - press space to spin
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !spinButton.disabled) {
      event.preventDefault();
      spinButton.click();
    }
  });
});

/**
 * Ensure the images directory exists
 * This would typically create placeholder images for development
 */
function ensureImagesDirectory() {
  console.log('Setting up image placeholders for development...');
  
  // In a real application, we would create the directory and images here
  // Since we're using placeholders from data.js, we don't need to actually create files
}