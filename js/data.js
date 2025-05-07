/**
 * Array of Zoho product logos
 * 
 * These represent the products that will be shown in the spinner.
 * Each object contains the image filename and product name.
 */
export const zohoProducts = [
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
  { name: "Connect", image: "./images/connect.png" },
  { name: "Workerly", image: "./images/workerly.png" },
  { name: "Learn", image: "./images/learn.png" },
  { name: "Shifts", image: "./images/shifts.png" },
  { name: "Contracts", image: "./images/contracts.png" },
  { name: "Oneauth", image: "./images/oneauth.png" },
  { name: "Zoho One", image: "./images/zoho-one.png" },
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
];


/**
 * Placeholder images to use until actual images are available
 * This ensures the spinner works even without the actual product logos
 */
export const placeholderImages = [
];

/**
 * Get product info by name
 * @param {string} name - Product name
 * @returns {object|null} Product info or null if not found
 */
export function getProductByName(name) {
  return zohoProducts.find(product => product.name === name) || null;
}

/**
 * Get a random product from the products array
 * @returns {object} Randomly selected product
 */
export function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * zohoProducts.length);
  return zohoProducts[randomIndex];
}

/**
 * Create a demo data structure with placeholder images
 * This is used when actual images aren't available
 * @returns {Array} Array of products with placeholder images
 */
export function createDemoProducts() {
  return zohoProducts.map((product, index) => {
    return {
      ...product,
      image: placeholderImages[index % placeholderImages.length]
    };
  });
}