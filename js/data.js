/**
 * Array of Zoho product logos organized by categories
 */
export const productCategories = {
  "Zoho One": [
    { name: "CRM", image: "./images/crm.png" },
    { name: "Bigin", image: "./images/bigin.png" },
    { name: "Card Scanner", image: "./images/cardscanner.png" },
    { name: "Forms", image: "./images/forms.png" },
    { name: "Bookings", image: "./images/bookings.png" },
    { name: "Social", image: "./images/social.png" },
    { name: "Campaigns", image: "./images/campaigns.png" },
    { name: "Survey", image: "./images/survey.png" },
    { name: "Backstage", image: "./images/backstage.png" },
    { name: "Webinar", image: "./images/webinar.png" },
    { name: "Desk", image: "./images/desk.png" },
    { name: "Assist", image: "./images/assist.png" },
    { name: "Lens", image: "./images/lens.png" },
    { name: "Books", image: "./images/books.png" },
    { name: "Invoice", image: "./images/invoice.png" },
    { name: "Expense", image: "./images/expense.png" },
    { name: "Inventory", image: "./images/inventory.png" },
    { name: "Billing", image: "./images/billing.png" },
    { name: "Payroll", image: "./images/payroll.png" },
    { name: "People", image: "./images/people.png" },
    { name: "Recruit", image: "./images/recruit.png" },
    { name: "Workerly", image: "./images/workerly.png" },
    { name: "Learn", image: "./images/learn.png" },
    { name: "Shifts", image: "./images/shifts.png" },
    { name: "Contracts", image: "./images/contracts.png" },
    { name: "Oneauth", image: "./images/oneauth.png" },
    { name: "Vault", image: "./images/vault.png" },
    { name: "Directory", image: "./images/directory.png" },
    { name: "Mail", image: "./images/mail.png" },
    { name: "Workplace", image: "./images/workplace.png" },
    { name: "Writer", image: "./images/writer.png" },
    { name: "Sheet", image: "./images/sheet.png" },
    { name: "Show", image: "./images/show.png" },
    { name: "Notebook", image: "./images/notebook.png" },
    { name: "Calendar", image: "./images/calendar.png" },
    { name: "WorkDrive", image: "./images/workdrive.png" },
    { name: "Cliq", image: "./images/cliq.png" },
    { name: "Meeting", image: "./images/meeting.png" },
    { name: "Sign", image: "./images/sign.png" },
    { name: "Doc Scanner", image: "./images/zohoscanner.png" },
    { name: "ToDo", image: "./images/todo.png" },
    { name: "Tables", image: "./images/tables.png" },
    { name: "Analytics", image: "./images/analytics.png" },
    { name: "Projects", image: "./images/projects.png" },
    { name: "Sprints", image: "./images/sprints.png" },
    { name: "Creator", image: "./images/creator.png" },
    { name: "Apptics", image: "./images/apptics.png" }
  ],
  "Sales and Service": [
    { name: "CRM", image: "./images/crm.png" },
    { name: "Bigin", image: "./images/bigin.png" },
    { name: "Card Scanner", image: "./images/cardscanner.png" },
    { name: "Forms", image: "./images/forms.png" },
    { name: "Bookings", image: "./images/bookings.png" },
    { name: "Desk", image: "./images/desk.png" },
    { name: "Assist", image: "./images/assist.png" },
    { name: "Lens", image: "./images/lens.png" }
  ],
  "Marketing": [
    { name: "Social", image: "./images/social.png" },
    { name: "Campaigns", image: "./images/campaigns.png" },
    { name: "Survey", image: "./images/survey.png" },
    { name: "Backstage", image: "./images/backstage.png" },
    { name: "Webinar", image: "./images/webinar.png" }
  ],
  "Human Resources and Legal": [
    { name: "People", image: "./images/people.png" },
    { name: "Recruit", image: "./images/recruit.png" },
    { name: "Workerly", image: "./images/workerly.png" },
    { name: "Learn", image: "./images/learn.png" },
    { name: "Shifts", image: "./images/shifts.png" },
    { name: "Contracts", image: "./images/contracts.png" },
    { name: "Payroll", image: "./images/payroll.png" }
  ],
  "Finance": [
    { name: "Books", image: "./images/books.png" },
    { name: "Invoice", image: "./images/invoice.png" },
    { name: "Expense", image: "./images/expense.png" },
    { name: "Inventory", image: "./images/inventory.png" },
    { name: "Billing", image: "./images/billing.png" }
  ],
  "Security and IT Management": [
    { name: "Oneauth", image: "./images/oneauth.png" },
    { name: "Vault", image: "./images/vault.png" },
    { name: "Directory", image: "./images/directory.png" }
  ],
  "Email and Collaboration": [
    { name: "Mail", image: "./images/mail.png" },
    { name: "Workplace", image: "./images/workplace.png" },
    { name: "Writer", image: "./images/writer.png" },
    { name: "Sheet", image: "./images/sheet.png" },
    { name: "Show", image: "./images/show.png" },
    { name: "Notebook", image: "./images/notebook.png" },
    { name: "Calendar", image: "./images/calendar.png" },
    { name: "WorkDrive", image: "./images/workdrive.png" },
    { name: "Cliq", image: "./images/cliq.png" },
    { name: "Meeting", image: "./images/meeting.png" },
    { name: "Sign", image: "./images/sign.png" },
    { name: "Doc Scanner", image: "./images/zohoscanner.png" },
    { name: "ToDo", image: "./images/todo.png" }
  ],
  "Project Management and Analytics": [
    { name: "Projects", image: "./images/projects.png" },
    { name: "Sprints", image: "./images/sprints.png" },
    { name: "Analytics", image: "./images/analytics.png" },
    { name: "Tables", image: "./images/tables.png" }
  ],
  "Developer Platforms": [
    { name: "Creator", image: "./images/creator.png" },
    { name: "Apptics", image: "./images/apptics.png" }
  ]
};

export const placeholderImages = [];

/**
 * Shuffle an array randomly
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Get product info by name
 * @param {string} name - Product name
 * @returns {object|null} Product info or null if not found
 */
export function getProductByName(name) {
  for (const category of Object.values(productCategories)) {
    const product = category.find(p => p.name === name);
    if (product) return product;
  }
  return null;
}

/**
 * Get a random product from the current category
 * @param {string} category - Category name
 * @returns {object} Randomly selected product
 */
export function getRandomProduct(category) {
  const products = shuffleArray([...productCategories[category]]);
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

/**
 * Create a demo data structure with placeholder images
 * @param {string} category - Category name
 * @returns {Array} Array of products with placeholder images
 */
export function createDemoProducts(category) {
  const shuffledProducts = shuffleArray([...productCategories[category]]);
  return shuffledProducts.map((product, index) => {
    return {
      ...product,
      image: placeholderImages[index % placeholderImages.length] || product.image
    };
  });
}