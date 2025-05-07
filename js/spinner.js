import { getRandomProduct, zohoProducts } from './data.js';

class FortuneSpinner {
  constructor() {
    this.spinnerDisplay = document.getElementById('spinner-display');
    this.currentLogoElement = document.getElementById('current-logo');
    this.resultElement = document.getElementById('result');
    this.winnerLogoElement = document.getElementById('winner-logo');
    this.winnerNameElement = document.getElementById('winner-name');
    
    this.isSpinning = false;
    this.spinInterval = null;
    this.spinSpeed = 200; // ms between logo changes
    this.spinningTime = 7000; // total spin time in ms
    this.spinningTimeLeft = 0;
    this.slowdownFactor = 1.05; // factor to slow down spinning
    
    // Use actual Zoho product logos for spinning
    this.products = zohoProducts;
    // Use -1 so initial display remains the Zoho logo in HTML
    this.currentProductIndex = -1;
  }

  /**
   * Shuffle products array in place using Fisher–Yates algorithm
   */
  shuffleProducts() {
    for (let i = this.products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
    }
  }
  
  /**
   * Update the displayed logo in the spinner
   * @param {Object} product - The product to display
   */
  updateDisplayedLogo(product) {
    this.currentLogoElement.src = product.image;
    this.currentLogoElement.alt = product.name;
  }
  
  /**
   * Start the spinner animation
   * @returns {Promise} Resolves when spinning is complete
   */
  spin() {
    if (this.isSpinning) return Promise.resolve();
    // Randomize order for fair spin
    this.shuffleProducts();

    this.isSpinning = true;
    this.spinningTimeLeft = this.spinningTime;
    this.resultElement.classList.add('hidden');
    this.resultElement.classList.remove('visible');
    
    return new Promise((resolve) => {
      this.startSpinAnimation();
      
      // Set timeout to stop spinning after spinningTime
      setTimeout(() => {
        this.slowdownAndStop(resolve);
      }, this.spinningTimeLeft / 2); // Start slowing down halfway through
    });
  }
  
  /**
   * Start the rapid logo cycling animation
   */
  startSpinAnimation() {
    let currentSpeed = this.spinSpeed;
    this.spinInterval = setInterval(() => {
      // Update to next product in rotation
      this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
      this.updateDisplayedLogo(this.products[this.currentProductIndex]);
    }, currentSpeed);
  }
  
  /**
   * Gradually slow down the spinning animation and stop on a random product
   * @param {Function} resolve - Promise resolve function
   */
  slowdownAndStop(resolve) {
    let currentSpeed = this.spinSpeed;
    let steps = 0;
    const maxStepsBeforeStop = 5; // Number of slow-down steps before stopping
  
    const slowdownInterval = setInterval(() => {
      currentSpeed *= this.slowdownFactor;
      steps++;
  
      // Clear current interval and set a new one with slower speed
      clearInterval(this.spinInterval);
  
      // Stop after a few slow steps, not when fully slow
      if (steps >= maxStepsBeforeStop || currentSpeed > 400) {
        clearInterval(slowdownInterval);
        this.stopSpinning(resolve);
      } else {
        this.spinInterval = setInterval(() => {
          this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
          this.updateDisplayedLogo(this.products[this.currentProductIndex]);
        }, currentSpeed);
      }
    }, 300);
  }
  
  
  /**
   * Stop the spinning animation and show the result
   * @param {Function} resolve - Promise resolve function
   */
  stopSpinning(resolve) {
    clearInterval(this.spinInterval);
    this.isSpinning = false;
    
    // Select a random winner
    const winningProduct = getRandomProduct();
    
    // Update display with winning product
    this.updateDisplayedLogo(winningProduct);
    this.currentLogoElement.classList.add('celebrate');
    
    // Show result after a short delay
    setTimeout(() => {
      this.showResult(winningProduct);
      this.currentLogoElement.classList.remove('celebrate');
      resolve(winningProduct);
    }, 500);
  }
  
  /**
   * Display the result screen with winner information
   * @param {Object} product - The winning product
   */
  showResult(product) {
    this.winnerLogoElement.src = product.image;
    this.winnerLogoElement.alt = product.name;
    this.winnerNameElement.textContent = product.name;
    
    this.resultElement.classList.remove('hidden');
    
    // Use setTimeout to ensure the transition applies
    setTimeout(() => {
      this.resultElement.classList.add('visible');
    }, 10);
  }
  
  /**
   * Reset the spinner to its initial state
   */
  reset() {
    this.resultElement.classList.remove('visible');
    
    setTimeout(() => {
      this.resultElement.classList.add('hidden');
      // Reset to Zoho logo without selecting a product
      this.currentProductIndex = -1;
      this.currentLogoElement.src = './images/zoho.png';
      this.currentLogoElement.alt = 'Zoho';
    }, 300);
  }
}

export default FortuneSpinner;