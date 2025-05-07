import { getRandomProduct, createDemoProducts } from './data.js';

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
    
    this.currentCategory = "Zoho One";
    this.products = createDemoProducts(this.currentCategory);
    this.currentProductIndex = 0;
    
    // Set the initial logo to zoho.png
    this.currentLogoElement.src = 'assets/zoho.png';
    this.currentLogoElement.alt = 'Zoho';

    // Set up tab click handlers
    this.initializeTabs();
  }

  initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (this.isSpinning) return; // Prevent tab switching while spinning
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update current category and products
        this.currentCategory = tab.dataset.category;
        this.products = createDemoProducts(this.currentCategory);
        this.currentProductIndex = 0;

        // Reset the logo to zoho.png when changing tabs
        this.currentLogoElement.src = 'assets/zoho.png';
        this.currentLogoElement.alt = 'Zoho';
      });
    });

    // Method to toggle tab interactivity
    this.toggleTabs = (enabled) => {
      tabs.forEach(tab => {
        if (enabled) {
          tab.classList.remove('disabled');
        } else {
          tab.classList.add('disabled');
        }
      });
    };
  }
  
  updateDisplayedLogo(product) {
    this.currentLogoElement.src = product.image;
    this.currentLogoElement.alt = product.name;
  }
  
  spin() {
    if (this.isSpinning) return Promise.resolve();
    
    this.isSpinning = true;
    this.toggleTabs(false); // Disable tabs while spinning
    this.spinningTimeLeft = this.spinningTime;
    this.resultElement.classList.add('hidden');
    this.resultElement.classList.remove('visible');
    
    return new Promise((resolve) => {
      this.startSpinAnimation();
      
      setTimeout(() => {
        this.slowdownAndStop(resolve);
      }, this.spinningTimeLeft / 2);
    });
  }
  
  startSpinAnimation() {
    let currentSpeed = this.spinSpeed;
    this.spinInterval = setInterval(() => {
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
  
  stopSpinning(resolve) {
    clearInterval(this.spinInterval);
    this.isSpinning = false;
    this.toggleTabs(true); // Re-enable tabs after spinning
    
    const winningProduct = getRandomProduct(this.currentCategory);
    
    this.updateDisplayedLogo(winningProduct);
    this.currentLogoElement.classList.add('celebrate');
    
    setTimeout(() => {
      this.showResult(winningProduct);
      this.currentLogoElement.classList.remove('celebrate');
      resolve(winningProduct);
    }, 500);
  }
  
  showResult(product) {
    this.winnerLogoElement.src = product.image;
    this.winnerLogoElement.alt = product.name;
    this.winnerNameElement.textContent = product.name;
    
    this.resultElement.classList.remove('hidden');
    
    setTimeout(() => {
      this.resultElement.classList.add('visible');
    }, 10);
  }
  
  reset() {
    this.resultElement.classList.remove('visible');
    
    setTimeout(() => {
      this.resultElement.classList.add('hidden');
      this.currentProductIndex = 0;
      this.updateDisplayedLogo(this.products[0]);

      // Reset the logo to zoho.png when resetting the spinner
      this.currentLogoElement.src = 'assets/zoho.png';
      this.currentLogoElement.alt = 'Zoho';
    }, 300);
  }
}

export default FortuneSpinner;