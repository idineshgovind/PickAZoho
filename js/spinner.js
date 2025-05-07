// Inline product data and utility functions from data.js
const productCategories = {
  "Zoho One": [
    { name: "CRM", image: "assets/crm.png" },
    { name: "Bigin", image: "assets/bigin.png" },
    { name: "Card Scanner", image: "assets/cardscanner.png" },
    { name: "Forms", image: "assets/forms.png" },
    { name: "Bookings", image: "assets/bookings.png" },
    { name: "Social", image: "assets/social.png" },
    { name: "Campaigns", image: "assets/campaigns.png" },
    { name: "Survey", image: "assets/survey.png" },
    { name: "Backstage", image: "assets/backstage.png" },
    { name: "Webinar", image: "assets/webinar.png" },
    { name: "Desk", image: "assets/desk.png" },
    { name: "Assist", image: "assets/assist.png" },
    { name: "Lens", image: "assets/lens.png" },
    { name: "Books", image: "assets/books.png" },
    { name: "Invoice", image: "assets/invoice.png" },
    { name: "Expense", image: "assets/expense.png" },
    { name: "Inventory", image: "assets/inventory.png" },
    { name: "Billing", image: "assets/billing.png" },
    { name: "Payroll", image: "assets/payroll.png" },
    { name: "People", image: "assets/people.png" },
    { name: "Recruit", image: "assets/recruit.png" },
    { name: "Workerly", image: "assets/workerly.png" },
    { name: "Learn", image: "assets/learn.png" },
    { name: "Shifts", image: "assets/shifts.png" },
    { name: "Contracts", image: "assets/contracts.png" },
    { name: "Oneauth", image: "assets/oneauth.png" },
    { name: "Vault", image: "assets/vault.png" },
    { name: "Directory", image: "assets/directory.png" },
    { name: "Mail", image: "assets/mail.png" },
    { name: "Workplace", image: "assets/workplace.png" },
    { name: "Writer", image: "assets/writer.png" },
    { name: "Sheet", image: "assets/sheet.png" },
    { name: "Show", image: "assets/show.png" },
    { name: "Notebook", image: "assets/notebook.png" },
    { name: "Calendar", image: "assets/calendar.png" },
    { name: "WorkDrive", image: "assets/workdrive.png" },
    { name: "Cliq", image: "assets/cliq.png" },
    { name: "Meeting", image: "assets/meeting.png" },
    { name: "Sign", image: "assets/sign.png" },
    { name: "Doc Scanner", image: "assets/zohoscanner.png" },
    { name: "ToDo", image: "assets/todo.png" },
    { name: "Tables", image: "assets/tables.png" },
    { name: "Analytics", image: "assets/analytics.png" },
    { name: "Projects", image: "assets/projects.png" },
    { name: "Sprints", image: "assets/sprints.png" },
    { name: "Creator", image: "assets/creator.png" },
    { name: "Apptics", image: "assets/apptics.png" }
  ],
  "Sales and Service": [
    { name: "CRM", image: "assets/crm.png" },
    { name: "Bigin", image: "assets/bigin.png" },
    { name: "Card Scanner", image: "assets/cardscanner.png" },
    { name: "Forms", image: "assets/forms.png" },
    { name: "Bookings", image: "assets/bookings.png" },
    { name: "Desk", image: "assets/desk.png" },
    { name: "Assist", image: "assets/assist.png" },
    { name: "Lens", image: "assets/lens.png" }
  ],
  "Marketing": [
    { name: "Social", image: "assets/social.png" },
    { name: "Campaigns", image: "assets/campaigns.png" },
    { name: "Survey", image: "assets/survey.png" },
    { name: "Backstage", image: "assets/backstage.png" },
    { name: "Webinar", image: "assets/webinar.png" }
  ],
  "Human Resources and Legal": [
    { name: "People", image: "assets/people.png" },
    { name: "Recruit", image: "assets/recruit.png" },
    { name: "Workerly", image: "assets/workerly.png" },
    { name: "Learn", image: "assets/learn.png" },
    { name: "Shifts", image: "assets/shifts.png" },
    { name: "Contracts", image: "assets/contracts.png" },
    { name: "Payroll", image: "assets/payroll.png" }
  ],
  "Finance": [
    { name: "Books", image: "assets/books.png" },
    { name: "Invoice", image: "assets/invoice.png" },
    { name: "Expense", image: "assets/expense.png" },
    { name: "Inventory", image: "assets/inventory.png" },
    { name: "Billing", image: "assets/billing.png" }
  ],
  "Security and IT Management": [
    { name: "Oneauth", image: "assets/oneauth.png" },
    { name: "Vault", image: "assets/vault.png" },
    { name: "Directory", image: "assets/directory.png" }
  ],
  "Email and Collaboration": [
    { name: "Mail", image: "assets/mail.png" },
    { name: "Workplace", image: "assets/workplace.png" },
    { name: "Writer", image: "assets/writer.png" },
    { name: "Sheet", image: "assets/sheet.png" },
    { name: "Show", image: "assets/show.png" },
    { name: "Notebook", image: "assets/notebook.png" },
    { name: "Calendar", image: "assets/calendar.png" },
    { name: "WorkDrive", image: "assets/workdrive.png" },
    { name: "Cliq", image: "assets/cliq.png" },
    { name: "Meeting", image: "assets/meeting.png" },
    { name: "Sign", image: "assets/sign.png" },
    { name: "Doc Scanner", image: "assets/zohoscanner.png" },
    { name: "ToDo", image: "assets/todo.png" }
  ],
  "Project Management and Analytics": [
    { name: "Projects", image: "assets/projects.png" },
    { name: "Sprints", image: "assets/sprints.png" },
    { name: "Analytics", image: "assets/analytics.png" },
    { name: "Tables", image: "assets/tables.png" }
  ],
  "Developer Platforms": [
    { name: "Creator", image: "assets/creator.png" },
    { name: "Apptics", image: "assets/apptics.png" }
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

// Remove export statement and make FortuneSpinner globally accessible
window.FortuneSpinner = FortuneSpinner;