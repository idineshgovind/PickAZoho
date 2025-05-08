// Remove import statements and assume dependencies are loaded globally

// Initialize the spinner when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Preload all images in the assets folder
  preloadImages();

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

const preloadedImages = {};

/**
 * Preload all images in the assets folder
 */
function preloadImages() {
  const imagePaths = [
    "assets/analytics.svg", "assets/apptics.svg", "assets/assist.svg", "assets/backstage.svg", "assets/bigin.svg", "assets/billing.svg", "assets/bookings.svg", "assets/books.svg", "assets/calendar.svg", "assets/campaigns.svg", "assets/cardscanner.svg", "assets/cliq.svg", "assets/connect.svg", "assets/contracts.svg", "assets/creator.svg", "assets/crm.svg", "assets/desk.svg", "assets/directory.svg", "assets/expense.svg", "assets/forms.svg", "assets/inventory.svg", "assets/invoice.svg", "assets/learn.svg", "assets/lens.svg", "assets/mail.svg", "assets/meeting.svg", "assets/notebook.svg", "assets/oneauth.svg", "assets/payroll.svg", "assets/people.svg", "assets/projects.svg", "assets/recruit.svg", "assets/sheet.svg", "assets/shifts.svg", "assets/show.svg", "assets/sign.svg", "assets/social.svg", "assets/sprints.svg", "assets/survey.svg", "assets/tables.svg", "assets/todo.svg", "assets/vault.svg", "assets/webinar.svg", "assets/workdrive.svg", "assets/workerly.svg", "assets/workplace.svg", "assets/writer.svg", "assets/zoho-one.svg", "assets/zoho.svg", "assets/zohoscanner.svg"
  ];

  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    preloadedImages[path] = img;
  });
}

/**
 * Ensure the images directory exists
 * This would typically create placeholder images for development
 */
function ensureImagesDirectory() {
  console.log('Setting up image placeholders for development...');
  
  // In a real application, we would create the directory and images here
  // Since we're using placeholders from data.js, we don't need to actually create files
}