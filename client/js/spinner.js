// Inline product data and utility functions from data.js
const productCategories = {
  "Zoho One": [
    { name: "CRM", image: "assets/crm.svg" },
    { name: "Bigin", image: "assets/bigin.svg" },
    { name: "Card Scanner", image: "assets/cardscanner.svg" },
    { name: "Forms", image: "assets/forms.svg" },
    { name: "Bookings", image: "assets/bookings.svg" },
    { name: "Social", image: "assets/social.svg" },
    { name: "Campaigns", image: "assets/campaigns.svg" },
    { name: "Survey", image: "assets/survey.svg" },
    { name: "Backstage", image: "assets/backstage.svg" },
    { name: "Webinar", image: "assets/webinar.svg" },
    { name: "Desk", image: "assets/desk.svg" },
    { name: "Assist", image: "assets/assist.svg" },
    { name: "Lens", image: "assets/lens.svg" },
    { name: "Books", image: "assets/books.svg" },
    { name: "Invoice", image: "assets/invoice.svg" },
    { name: "Expense", image: "assets/expense.svg" },
    { name: "Inventory", image: "assets/inventory.svg" },
    { name: "Billing", image: "assets/billing.svg" },
    { name: "Payroll", image: "assets/payroll.svg" },
    { name: "People", image: "assets/people.svg" },
    { name: "Recruit", image: "assets/recruit.svg" },
    { name: "Workerly", image: "assets/workerly.svg" },
    { name: "Learn", image: "assets/learn.svg" },
    { name: "Shifts", image: "assets/shifts.svg" },
    { name: "Contracts", image: "assets/contracts.svg" },
    { name: "Oneauth", image: "assets/oneauth.svg" },
    { name: "Vault", image: "assets/vault.svg" },
    { name: "Directory", image: "assets/directory.svg" },
    { name: "Mail", image: "assets/mail.svg" },
    { name: "Workplace", image: "assets/workplace.svg" },
    { name: "Writer", image: "assets/writer.svg" },
    { name: "Sheet", image: "assets/sheet.svg" },
    { name: "Show", image: "assets/show.svg" },
    { name: "Notebook", image: "assets/notebook.svg" },
    { name: "Calendar", image: "assets/calendar.svg" },
    { name: "WorkDrive", image: "assets/workdrive.svg" },
    { name: "Cliq", image: "assets/cliq.svg" },
    { name: "Meeting", image: "assets/meeting.svg" },
    { name: "Sign", image: "assets/sign.svg" },
    { name: "Doc Scanner", image: "assets/zohoscanner.svg" },
    { name: "ToDo", image: "assets/todo.svg" },
    { name: "Tables", image: "assets/tables.svg" },
    { name: "Analytics", image: "assets/analytics.svg" },
    { name: "Projects", image: "assets/projects.svg" },
    { name: "Sprints", image: "assets/sprints.svg" },
    { name: "Creator", image: "assets/creator.svg" },
    { name: "Apptics", image: "assets/apptics.svg" }
  ],
  "Sales and Service": [
    { name: "CRM", image: "assets/crm.svg" },
    { name: "Bigin", image: "assets/bigin.svg" },
    { name: "Card Scanner", image: "assets/cardscanner.svg" },
    { name: "Forms", image: "assets/forms.svg" },
    { name: "Bookings", image: "assets/bookings.svg" },
    { name: "Desk", image: "assets/desk.svg" },
    { name: "Assist", image: "assets/assist.svg" },
    { name: "Lens", image: "assets/lens.svg" }
  ],
  "Marketing": [
    { name: "Social", image: "assets/social.svg" },
    { name: "Campaigns", image: "assets/campaigns.svg" },
    { name: "Survey", image: "assets/survey.svg" },
    { name: "Backstage", image: "assets/backstage.svg" },
    { name: "Webinar", image: "assets/webinar.svg" }
  ],
  "Human Resources and Legal": [
    { name: "People", image: "assets/people.svg" },
    { name: "Recruit", image: "assets/recruit.svg" },
    { name: "Workerly", image: "assets/workerly.svg" },
    { name: "Learn", image: "assets/learn.svg" },
    { name: "Shifts", image: "assets/shifts.svg" },
    { name: "Contracts", image: "assets/contracts.svg" },
    { name: "Payroll", image: "assets/payroll.svg" }
  ],
  "Finance": [
    { name: "Books", image: "assets/books.svg" },
    { name: "Invoice", image: "assets/invoice.svg" },
    { name: "Expense", image: "assets/expense.svg" },
    { name: "Inventory", image: "assets/inventory.svg" },
    { name: "Billing", image: "assets/billing.svg" }
  ],
  "Security and IT Management": [
    { name: "Oneauth", image: "assets/oneauth.svg" },
    { name: "Vault", image: "assets/vault.svg" },
    { name: "Directory", image: "assets/directory.svg" }
  ],
  "Email and Collaboration": [
    { name: "Mail", image: "assets/mail.svg" },
    { name: "Workplace", image: "assets/workplace.svg" },
    { name: "Writer", image: "assets/writer.svg" },
    { name: "Sheet", image: "assets/sheet.svg" },
    { name: "Show", image: "assets/show.svg" },
    { name: "Notebook", image: "assets/notebook.svg" },
    { name: "Calendar", image: "assets/calendar.svg" },
    { name: "WorkDrive", image: "assets/workdrive.svg" },
    { name: "Cliq", image: "assets/cliq.svg" },
    { name: "Meeting", image: "assets/meeting.svg" },
    { name: "Sign", image: "assets/sign.svg" },
    { name: "Doc Scanner", image: "assets/zohoscanner.svg" },
    { name: "ToDo", image: "assets/todo.svg" }
  ],
  "Project Management and Analytics": [
    { name: "Projects", image: "assets/projects.svg" },
    { name: "Sprints", image: "assets/sprints.svg" },
    { name: "Analytics", image: "assets/analytics.svg" },
    { name: "Tables", image: "assets/tables.svg" }
  ],
  "Developer Platforms": [
    { name: "Creator", image: "assets/creator.svg" },
    { name: "Apptics", image: "assets/apptics.svg" }
  ]
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomProduct(category) {
  const products = shuffleArray([...productCategories[category]]);
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

function createDemoProducts(category) {
  return shuffleArray([...productCategories[category]]);
}

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
    
    // Set the initial logo to zoho.svg
    this.currentLogoElement.src = 'assets/zoho.svg';
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

        // Reset the logo to zoho.svg when changing tabs
        this.currentLogoElement.src = 'assets/zoho.svg';
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
    // Use preloaded image from memory
    const preloadedImage = preloadedImages[product.image];
    if (preloadedImage && this.currentLogoElement.src === preloadedImage.src) {
      return;
    }
    this.currentLogoElement.src = preloadedImage ? preloadedImage.src : product.image;
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

      // Reset the logo to zoho.svg when resetting the spinner
      this.currentLogoElement.src = 'assets/zoho.svg';
      this.currentLogoElement.alt = 'Zoho';
    }, 300);
  }
}

// Remove export statement and make FortuneSpinner globally accessible
window.FortuneSpinner = FortuneSpinner;