/**
 * Array of Zoho product logos organized by categories
 */
// Image imports
import CRMImg from "../assets/crm.png";
import BiginImg from "../assets/bigin.png";
import CardScannerImg from "../assets/cardscanner.png";
import FormsImg from "../assets/forms.png";
import BookingsImg from "../assets/bookings.png";
import SocialImg from "../assets/social.png";
import CampaignsImg from "../assets/campaigns.png";
import SurveyImg from "../assets/survey.png";
import BackstageImg from "../assets/backstage.png";
import WebinarImg from "../assets/webinar.png";
import DeskImg from "../assets/desk.png";
import AssistImg from "../assets/assist.png";
import LensImg from "../assets/lens.png";
import BooksImg from "../assets/books.png";
import InvoiceImg from "../assets/invoice.png";
import ExpenseImg from "../assets/expense.png";
import InventoryImg from "../assets/inventory.png";
import BillingImg from "../assets/billing.png";
import PayrollImg from "../assets/payroll.png";
import PeopleImg from "../assets/people.png";
import RecruitImg from "../assets/recruit.png";
import WorkerlyImg from "../assets/workerly.png";
import LearnImg from "../assets/learn.png";
import ShiftsImg from "../assets/shifts.png";
import ContractsImg from "../assets/contracts.png";
import OneauthImg from "../assets/oneauth.png";
import VaultImg from "../assets/vault.png";
import DirectoryImg from "../assets/directory.png";
import MailImg from "../assets/mail.png";
import WorkplaceImg from "../assets/workplace.png";
import WriterImg from "../assets/writer.png";
import SheetImg from "../assets/sheet.png";
import ShowImg from "../assets/show.png";
import NotebookImg from "../assets/notebook.png";
import CalendarImg from "../assets/calendar.png";
import WorkDriveImg from "../assets/workdrive.png";
import CliqImg from "../assets/cliq.png";
import MeetingImg from "../assets/meeting.png";
import SignImg from "../assets/sign.png";
import DocScannerImg from "../assets/zohoscanner.png";
import ToDoImg from "../assets/todo.png";
import TablesImg from "../assets/tables.png";
import AnalyticsImg from "../assets/analytics.png";
import ProjectsImg from "../assets/projects.png";
import SprintsImg from "../assets/sprints.png";
import CreatorImg from "../assets/creator.png";
import AppticsImg from "../assets/apptics.png";

// Product categories
export const productCategories = {
  "Zoho One": [
    { name: "CRM", image: CRMImg },
    { name: "Bigin", image: BiginImg },
    { name: "Card Scanner", image: CardScannerImg },
    { name: "Forms", image: FormsImg },
    { name: "Bookings", image: BookingsImg },
    { name: "Social", image: SocialImg },
    { name: "Campaigns", image: CampaignsImg },
    { name: "Survey", image: SurveyImg },
    { name: "Backstage", image: BackstageImg },
    { name: "Webinar", image: WebinarImg },
    { name: "Desk", image: DeskImg },
    { name: "Assist", image: AssistImg },
    { name: "Lens", image: LensImg },
    { name: "Books", image: BooksImg },
    { name: "Invoice", image: InvoiceImg },
    { name: "Expense", image: ExpenseImg },
    { name: "Inventory", image: InventoryImg },
    { name: "Billing", image: BillingImg },
    { name: "Payroll", image: PayrollImg },
    { name: "People", image: PeopleImg },
    { name: "Recruit", image: RecruitImg },
    { name: "Workerly", image: WorkerlyImg },
    { name: "Learn", image: LearnImg },
    { name: "Shifts", image: ShiftsImg },
    { name: "Contracts", image: ContractsImg },
    { name: "Oneauth", image: OneauthImg },
    { name: "Vault", image: VaultImg },
    { name: "Directory", image: DirectoryImg },
    { name: "Mail", image: MailImg },
    { name: "Workplace", image: WorkplaceImg },
    { name: "Writer", image: WriterImg },
    { name: "Sheet", image: SheetImg },
    { name: "Show", image: ShowImg },
    { name: "Notebook", image: NotebookImg },
    { name: "Calendar", image: CalendarImg },
    { name: "WorkDrive", image: WorkDriveImg },
    { name: "Cliq", image: CliqImg },
    { name: "Meeting", image: MeetingImg },
    { name: "Sign", image: SignImg },
    { name: "Doc Scanner", image: DocScannerImg },
    { name: "ToDo", image: ToDoImg },
    { name: "Tables", image: TablesImg },
    { name: "Analytics", image: AnalyticsImg },
    { name: "Projects", image: ProjectsImg },
    { name: "Sprints", image: SprintsImg },
    { name: "Creator", image: CreatorImg },
    { name: "Apptics", image: AppticsImg }
  ],
  "Sales and Service": [
    { name: "CRM", image: CRMImg },
    { name: "Bigin", image: BiginImg },
    { name: "Card Scanner", image: CardScannerImg },
    { name: "Forms", image: FormsImg },
    { name: "Bookings", image: BookingsImg },
    { name: "Desk", image: DeskImg },
    { name: "Assist", image: AssistImg },
    { name: "Lens", image: LensImg }
  ],
  "Marketing": [
    { name: "Social", image: SocialImg },
    { name: "Campaigns", image: CampaignsImg },
    { name: "Survey", image: SurveyImg },
    { name: "Backstage", image: BackstageImg },
    { name: "Webinar", image: WebinarImg }
  ],
  "Human Resources and Legal": [
    { name: "People", image: PeopleImg },
    { name: "Recruit", image: RecruitImg },
    { name: "Workerly", image: WorkerlyImg },
    { name: "Learn", image: LearnImg },
    { name: "Shifts", image: ShiftsImg },
    { name: "Contracts", image: ContractsImg },
    { name: "Payroll", image: PayrollImg }
  ],
  "Finance": [
    { name: "Books", image: BooksImg },
    { name: "Invoice", image: InvoiceImg },
    { name: "Expense", image: ExpenseImg },
    { name: "Inventory", image: InventoryImg },
    { name: "Billing", image: BillingImg }
  ],
  "Security and IT Management": [
    { name: "Oneauth", image: OneauthImg },
    { name: "Vault", image: VaultImg },
    { name: "Directory", image: DirectoryImg }
  ],
  "Email and Collaboration": [
    { name: "Mail", image: MailImg },
    { name: "Workplace", image: WorkplaceImg },
    { name: "Writer", image: WriterImg },
    { name: "Sheet", image: SheetImg },
    { name: "Show", image: ShowImg },
    { name: "Notebook", image: NotebookImg },
    { name: "Calendar", image: CalendarImg },
    { name: "WorkDrive", image: WorkDriveImg },
    { name: "Cliq", image: CliqImg },
    { name: "Meeting", image: MeetingImg },
    { name: "Sign", image: SignImg },
    { name: "Doc Scanner", image: DocScannerImg },
    { name: "ToDo", image: ToDoImg }
  ],
  "Project Management and Analytics": [
    { name: "Projects", image: ProjectsImg },
    { name: "Sprints", image: SprintsImg },
    { name: "Analytics", image: AnalyticsImg },
    { name: "Tables", image: TablesImg }
  ],
  "Developer Platforms": [
    { name: "Creator", image: CreatorImg },
    { name: "Apptics", image: AppticsImg }
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