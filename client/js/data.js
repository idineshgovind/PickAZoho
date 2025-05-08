/**
 * Array of Zoho product logos organized by categories
 */
// Image imports
import CRMImg from "../assets/crm.svg";
import BiginImg from "../assets/bigin.svg";
import CardScannerImg from "../assets/cardscanner.svg";
import FormsImg from "../assets/forms.svg";
import BookingsImg from "../assets/bookings.svg";
import SocialImg from "../assets/social.svg";
import CampaignsImg from "../assets/campaigns.svg";
import SurveyImg from "../assets/survey.svg";
import BackstageImg from "../assets/backstage.svg";
import WebinarImg from "../assets/webinar.svg";
import DeskImg from "../assets/desk.svg";
import AssistImg from "../assets/assist.svg";
import LensImg from "../assets/lens.svg";
import BooksImg from "../assets/books.svg";
import InvoiceImg from "../assets/invoice.svg";
import ExpenseImg from "../assets/expense.svg";
import InventoryImg from "../assets/inventory.svg";
import BillingImg from "../assets/billing.svg";
import PayrollImg from "../assets/payroll.svg";
import PeopleImg from "../assets/people.svg";
import RecruitImg from "../assets/recruit.svg";
import WorkerlyImg from "../assets/workerly.svg";
import LearnImg from "../assets/learn.svg";
import ShiftsImg from "../assets/shifts.svg";
import ContractsImg from "../assets/contracts.svg";
import OneauthImg from "../assets/oneauth.svg";
import VaultImg from "../assets/vault.svg";
import DirectoryImg from "../assets/directory.svg";
import MailImg from "../assets/mail.svg";
import WorkplaceImg from "../assets/workplace.svg";
import WriterImg from "../assets/writer.svg";
import SheetImg from "../assets/sheet.svg";
import ShowImg from "../assets/show.svg";
import NotebookImg from "../assets/notebook.svg";
import CalendarImg from "../assets/calendar.svg";
import WorkDriveImg from "../assets/workdrive.svg";
import CliqImg from "../assets/cliq.svg";
import MeetingImg from "../assets/meeting.svg";
import SignImg from "../assets/sign.svg";
import DocScannerImg from "../assets/zohoscanner.svg";
import ToDoImg from "../assets/todo.svg";
import TablesImg from "../assets/tables.svg";
import AnalyticsImg from "../assets/analytics.svg";
import ProjectsImg from "../assets/projects.svg";
import SprintsImg from "../assets/sprints.svg";
import CreatorImg from "../assets/creator.svg";
import AppticsImg from "../assets/apptics.svg";

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