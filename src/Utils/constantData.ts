import type { CSSObject, ThemeOptions } from "@mui/material";
import { tranlate } from "../LocalizationJson/i18";
import { ROUTES } from "../helpers/contants";
import Images from "./images";

const t = (k: string) => tranlate(k);

export const THEME_OPTIONS: ThemeOptions = {
  palette: {
    primary: {
      light: "#223a48",
      main: "#5089AC",
      dark: "#39617A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#111927",
      main: "#EEF3F7",
      dark: "#e6f4ff",
      contrastText: "#5089AC",
    },
    error: {
      light: "#FEE4E2",
      main: "#F04438",
      dark: "#F04438",
      contrastText: "#F04438",
    },
    info: {
      light: "#FEE4E2",
      main: "#F04438",
      dark: "#e6f4ff",
      contrastText: "#F04438",
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D2D6DB",
      400: "#9DA4AE",
      500: "#6C737F",
      600: "#4D5761",
      700: "#384250",
      800: "#1F2A37",
      900: "#111927",
      A100: "red",
      A200: "blue",
      A400: "green",
      A700: "yellow",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightRegular: 400,
  },
};

export const mobileNumberRegex = /^\+([1-9]{1}[0-9]{1,3})-([0-9]{7,15})$/;
export const PriceRegex =
  /^(?=[0-9]*(\.[0-9]{0,2})?$)(?!-)[0-9]{0,9}(\.[0-9]{0,2})?$/;
export const CHATS = "Chats";
export const ZeroRegex = /^0$/;
export interface Navigation {
  name: string;
  path: Array<string>;
  icon: any;
  icon_active: any;
  variantPath?: any;
}

export const navigation: Navigation[] = [
  // {
  //   name: 'Dashboard',
  //   path: [ROUTES.DASHBOARD],
  //   icon: Images.DASHBOARD,
  //   icon_active: Images.DASHBOARD_ACTIVE,
  // },
  {
    name: "Order Management",
    path: [
      ROUTES.ORDERS,
      ROUTES.ORDERS_DETAILS,
      ROUTES.ORDERS_WORKSHEET,
      ROUTES.ORDERS_PRODUCTS,
      ROUTES.ADD_PRODUCTS_ORDERS,
      ROUTES.DRAFT_DETAILS,
      ROUTES.GENERATE_INVOICE,
      ROUTES.NEW_ORDER,
      ROUTES.ORDERS_DETAILS_ADDITEMS,
    ],
    icon: Images.ORDERS,
    icon_active: Images.ORDERS_ACTIVE,
  },
  {
    name: "Product Management",
    path: [
      ROUTES.PRODUCTS,
      ROUTES.ADD_PRODUCTS,
      ROUTES.ADD_SERVICES,
      ROUTES.EDIT_SERVICE,
      ROUTES.EDIT_PRODUCTS,
      ROUTES.ADD_PACKAGE,
      ROUTES.EDIT_PACKAGE,
      ROUTES.ADD_VARIANT,
      ROUTES.EDIT_VARIANT,
      ROUTES.ADD_SERVICE_VARIANT,
      ROUTES.EDIT_SERVICE_VARIANT,
      ROUTES.GROUPS,
      ROUTES.ADD_GROUP,
      ROUTES.EDIT_GROUP,
    ],
    variantPath: [
      ROUTES.ADD_SERVICE_VARIANT,
      ROUTES.EDIT_SERVICE_VARIANT,
      ROUTES.ADD_VARIANT,
      ROUTES.EDIT_VARIANT,
    ],
    icon: Images.PRODUCTS,
    icon_active: Images.PRODUCTS_ACTIVE,
  },
  {
    name: "Branch Management",
    path: [
      ROUTES.BRANCHES,
      ROUTES.ADD_BRANCH,
      ROUTES.EDIT_BRANCH,
      ROUTES.VIEW_BRANCH,
    ],
    icon: Images.BRANCH,
    icon_active: Images.BRANCH_ACTIVE,
  },
  // {
  //   name: 'Financials',
  //   path: [ROUTES.FINANCIALS],
  //   icon: Images.FINANCIALS,
  //   icon_active: Images.FINANCIALS_ACTIVE,
  // },
  {
    name: "Chats",
    path: [ROUTES.CHATS, ROUTES.ORDER_SERVICES],
    icon: Images.CHATS,
    icon_active: Images.CHATS_ACTIVE,
  },
  {
    name: "Company Management",
    path: [ROUTES.COMPANY],
    icon: Images.COMPANY,
    icon_active: Images.COMPANY_ACTIVE,
  },
  {
    name: "Client Management",
    path: [
      ROUTES.CLIENTS,
      ROUTES.CLIENTDETAILS,
      ROUTES.CLIENTSETDETAILS,
      ROUTES.ADD_CLIENT,
      ROUTES.ADD_EPISODE,
      ROUTES.ADD_SET,
      ROUTES.ADD_LOCATION,
      ROUTES.CREATE_STUDIO,
      ROUTES.CLIENT_STUDIO_DETAIL,
      ROUTES.EDIT_CLIENT,
      ROUTES.CLIENT_EDIT_STUDIO,
      ROUTES.EDIT_EPISODE,
      ROUTES.EDIT_SET,
      ROUTES.EDIT_STUDIO,
      ROUTES.LOCATION_DETAIL,
      ROUTES.CLIENT_EPISODE_DETAIL_ID,
      ROUTES.ADD_CONTACT,
      ROUTES.CLIENT_ALL_DEPARTMENTS,
      ROUTES.CONTACT_CREW,
    ],
    icon: Images.CLIENTS,
    icon_active: Images.CLIENTS_ACTIVE,
  },
  {
    name: t("Employ_Management.pageName"),
    path: [
      ROUTES.EMPLOY,
      ROUTES.ADD_EMPLOY,
      ROUTES.EDIT_EMPLOY,
      ROUTES.VIEW_EMPLOY,
    ],
    icon: Images.CO_VENDOR,
    icon_active: Images.CO_VENDOR_ACTIVE,
  },
  // {
  //   name: 'Driver Management',
  //   path: [
  //     ROUTES.DRIVERS,
  //     ROUTES.DRIVER_ADD,
  //     ROUTES.DRIVER_VIEW,
  //     ROUTES.VEHICLE_ADD,
  //     ROUTES.VEHICLE_VIEW,
  //   ],
  //   icon: Images.DRIVER,
  //   icon_active: Images.DRIVER_ACTIVE,
  // },
  {
    name: "Risk Management",
    path: [
      ROUTES.RISK_MANAGEMENT,
      ROUTES.ADD_RISK_USER,
      ROUTES.VIEW_RISK_USER,
      ROUTES.EDIT_RISK_USER,
    ],
    icon: Images.RISK_MNG,
    icon_active: Images.RISK_MNG_ACTIVE,
  },
  {
    name: "Black Car Services",
    path: [ROUTES.BOOK_CAB],
    icon: Images.BOOK_CAB,
    icon_active: Images.BOOK_CAB_ACTIVE,
  },
  {
    name: "Branch Details",
    path: [ROUTES.BRANCH_DETAILS],
    icon: Images.COMPANY,
    icon_active: Images.COMPANY_ACTIVE,
  },
  {
    name: "Invoice Management",
    path: [
      ROUTES.INVOICE_MANAGEMENT,
      ROUTES.INVOICE_DETAILS,
      ROUTES.INVOICE_OUTSTANDING_DETAILS,
      ROUTES.INVOICE_PAID_DETAILS,
      ROUTES.INVOICE_PAST_DUE_DETAILS,
    ],
    icon: Images.INVOICE_MENU_IC,
    icon_active: Images.INVOICE_MENU_ACTIVE_IC,
  },
  // {
  //   name: 'Group Management',
  //   path: [
  //     ROUTES.GROUPS,
  //     ROUTES.ADD_GROUP
  //   ],
  //   icon: Images.RISK_MNG,
  //   icon_active: Images.RISK_MNG_ACTIVE,
  // },

  {
    name: "Payment Transaction",
    path: [ROUTES.PAYMENT_TRANSACTION],
    icon: Images.FINANCIALS,
    icon_active: Images.FINANCIALS_ACTIVE,
  },
];

export const ManagerNav = [
  "Dashboard",
  "Order Management",
  "Product Management",
  "Financials",
  "Chats",
  "Products",
  "Services",
  "Orders",
  "Chats",
  "Profile",
  "Groups Management",
  "Black Car Services",
  "Risk Management",
  t("Employ_Management.pageName"),
  "Branch Details",
];

export const ManagerRisk = [
  "Risk Management",
  // 'Product Management'
];

export const businessType = [
  "State-Owned Business",
  "Publicly-Listed Business",
  "Privately-Owned Business",
  "Charity",
  "Other",
];

export const ITEM_TYPE = {
  SERVICE: "SERVICE",
  PRODUCT: "PRODUCT",
  PACKAGE: "PACKAGE",
};

export const typeOptions = [
  { value: "SAFETY", label: "Safety Advisor" },
  { value: "SECURITY", label: "Security Advisor" },
  { value: "EXECUTIVE", label: "Executive Protection" },
];

export const tierOptions = [
  { value: "TIER1", label: "Tier 1 - Entry Level" },
  { value: "TIER2", label: "Tier 2 - Mid Level" },
  { value: "TIER3", label: "Tier 3 - Senior Level" },
];

export const SHOPPING_MODE = {
  RENT: "RENT",
  SERVICE: "SERVICE",
};

export const PACKAGE_TYPES = [
  {
    label: t("Product_Management.productName"),
    value: "PRODUCTS",
  },
  { label: t("Product_Management.serviceName"), value: "SERVICES" },
  {
    label: t("Product_Management.productAndService"),
    value: "PRODUCTS_AND_SERVICES",
  },
];

export const PACKAGE_TYPES_KEYS: any = {
  PRODUCTS: t("Product_Management.productName"),
  SERVICES: t("Product_Management.serviceName"),
  PRODUCTS_AND_SERVICES: t("Product_Management.productAndService"),
};

export const RATE_MODEL_OPTIONS = ["Hourly", "Daily", "Weekly"];

export const RATE_MODELS = [
  {
    label: "Hourly",
    value: "HOURLY",
  },
  {
    label: "Day",
    value: "DAILY",
  },
  {
    label: "Week",
    value: "WEEKLY",
  },
  {
    label: "Month",
    value: "MONTHLY",
  },
];

export const RATE_MODELS_BACKEND: any = {
  HOURLY: "Hourly",
  DAILY: { s: "Day", p: "Days" },
  WEEKLY: { s: "Week", p: "Weeks" },
  MONTHLY: { s: "Month", p: "Months" },
};
export const scheduleTypes = [
  { label: "Development", value: "Development" },
  { label: "Pre-Production", value: "Pre-Production" },
  { label: "Production", value: "Production" },
  { label: "Post-Production", value: "Post-Production" },
  { label: "Reshoot", value: "Reshoot" },
];
export const BILLABLE_MINIMUMS = ["4", "8", "12", "Others"];

export const DOC_TYPE = [
  "Business Incorporation Paper",
  "Business License ID",
  "Driving License",
  "Passport",
];

export const StaticRoutes = [
  ROUTES.POLICIES,
  ROUTES.FAQ,
  ROUTES.TERMS,
  ROUTES.SUPPORT,
];

export const BranchSelectorRoutes = [
  ROUTES.ORDERS,
  ROUTES.CLIENTS,
  ROUTES.PRODUCTS,
  ROUTES.GROUPS,
  ROUTES.EMPLOY,
  ROUTES.CLIENTS,
  // ROUTES.INVOICE_MANAGEMENT,
];

export const DEFAULT_MANAGER_OPTION: any = [
  {
    firstName: "",
    lastName: "",
    email: "",
  },
];

export const DISCOUNT_TYPES: { [key: string]: string } = {
  "%": "PERCENTAGE",
  Flat: "FLAT",
};

export const DISCOUNT_TYPES_BACKEND: { [key: string]: string } = {
  PERCENTAGE: "%",
  FLAT: "Flat",
};

export const DELIVERY_TYPES_BACKEND: { [key: string]: string } = {
  DROP_OFFS: "Drop-offs",
  SELF_PICKUP: "Self pickup",
};

export const DELIVERY_TYPES: { [key: string]: string } = {
  "Drop-offs": "DROP_OFFS",
  "Self pickup": "SELF_PICKUP",
};

export const MINIMUM_RATE_MODEL = [
  {
    label: t("Constant_Data.rateModel.day"),
    value: "DAILY",
  },
  { label: t("Constant_Data.rateModel.week"), value: "WEEKLY" },
  { label: t("Constant_Data.rateModel.month"), value: "MONTHLY" },
];
export const SERVICECANCELLATIONTYPE = [
  {
    label: "FLAT",
    value: "FLAT",
  },
  { label: "PERCENTAGE", value: "PERCENTAGE" },
];
export const EXTEND_PRICE_MODELS = {
  BASE_RATE: "BASE_RATE",
  MINIMUM_RATE: "MINIMUM_RATE",
};

export const PRICE_MODE_TYPES = {
  PER_HOUR: "PER_HOUR",
  PER_DAY_WEEK_MONTH: "PER_DAY_WEEK_MONTH",
};
export const PRICE_MODES = [
  { value: PRICE_MODE_TYPES.PER_HOUR, lable: "Per Hour" },
  { value: PRICE_MODE_TYPES.PER_DAY_WEEK_MONTH, lable: "Per Day/Week/Month" },
];

export const DEFAULT_MODEL_OPTION: any = [
  {
    priceMode: PRICE_MODE_TYPES.PER_HOUR,
    rentPrice: null,
    minRateModel: MINIMUM_RATE_MODEL[0].value,
    DTStartTime: null,
    OTStartTime: null,
    minDuration: null,
  },
];

export const DefaultProductPackage = {
  product: null,
  qty: 1,
};

export const ORDER_STATUS = [
  {
    label: t("orders.status.completed"),
    value: "COMPLETED",
  },
  { label: t("orders.status.pending"), value: "PENDING" },
  { label: t("orders.status.cancelled"), value: "CANCELLED" },
];

export const OrderStatusLabel = {
  CANCELLED: t("orders.status.cancelled"),
  PENDING: t("orders.status.pending"),
  COMPLETED: t("orders.status.completed"),
  INITIATED: "Initiated",
};

export const ORDER_PRODUCT_STATUS: any = {
  PLACED: "Order Placed",
  PENDING: "PENDING",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  DELIVERED: "Delivered",
  INPROGRESS: "In Processing",
  RETURNED: "RETURNED",
  SHIPPED: "Shipped",
  INTRANSIT: "In Transit",
  ENDED: "Service Ended",
  STARTED: "Service Started",
  PROCESSING: "In Processing",
};

export const ADDRESS_TYPES = {
  BUSINESS: "BUSINESS",
  PERSONAL: "PERSONAL",
};
export const DELIVERY_MODES: any = {
  "Hand it to me": "inHand",
  "Leave it at Location": "leftAtDoor",
  // 'Leave it at Lcation': 'leaveItAtLocation',
};
export const PRODUCTION_TYPE = {
  FEATURE_FILM: "Feature Film",
  TV_SERIES: "TV Series",
  COMMERCIAL: "Commercial",
  DOCUMENTARY: "Documentary",
  MUSIC_VIDEO: "Music Video",
  EVENT: "Event",
  OTHER: "Other",
};

export const SHIFT_COVERAGE = {
  Day: "DAY",
  Night: "NIGHT",
  "24 Hrs": "24H",
  "Specific Duration": "SWING_SHIFT",
};

// 100 MB
export const MAX_FILE_SIZE_CHAT = 100 * 1024 * 1024;
// 10 files
export const MAX_FILES = 10;

export const numberInputRestrictKeys = [
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "e",
  "+",
  "-",
];

export const discountTypeOptions = [
  { label: "Purchase", value: "PURCHASE" },
  { label: "Rental", value: "RENTAL" },
  { label: "Service", value: "SERVICE" },
  // { label: 'Package', value: 'PACKAGE' },
];
export const onlyApphabetsRejex = /^[A-Za-z ]*$/;

export const nameRegex = /^[A-Za-z‘' ]*$/;
export const userNameRegex = /^[A-Za-z‘' ]*$/;

export const countryRegex = /^(1000|[1-9][0-9]{3})$/;

export const URL_REGEX =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)+)(\/[a-zA-Z0-9\-\._~:\/?#[\]@!$&'()*+,;=]*)?$/;

export const NOTES_FOR_LABEL = {
  INTERNAL: t("orders.internal"),
  PUBLIC: t("orders.client"),
  "PUBLIC - Invoice": "Public Invoice",
  "INTERNAL - Invoice": "Internal Invoice",
};

export const BOOKING_STATUS = {
  DRIVER_YET_TO_BE_ASSIGNED: "Driver Yet to be Assigned", //Assign
  PICKUP_IN_PROGRESS: "Pick up in Progress", //Re-Assign
  DROPOFF_IN_PROGRESS: "Drop off in Progress",
  DROPOFF_COMPLETE: "Drop off Complete", //Mark-as-completed
  COMPLETED: "Completed", //No - action
};

// export const baseStyle: CSSObject = {
//   backgroundColor: '#ffffff',
//   zIndex: 1,
//   color: '#fff',
//   width: 30,
//   height: 30,
//   display: 'flex',
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   border: '2px solid #9DA4AE',
// };

// export const activeStyle: CSSObject = {
//   backgroundColor: '#EEF3F7',
//   border: '2px solid #5089AC',
// };

// export const completedStyle: CSSObject = {
//   backgroundColor: '#5089AC',
//   border: '2px solid #5089AC',
// };

// Define the base style
export const baseStyle: CSSObject = {
  backgroundColor: "#ffffff",
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #9DA4AE",
};

// Define the style when active
export const activeStyle: CSSObject = {
  backgroundColor: "#EEF3F7",
  border: "2px solid #5089AC",
};

// Define the style when completed
export const completedStyle: CSSObject = {
  backgroundColor: "#5089AC",
  border: "2px solid #5089AC",
};
export const noBorderStyle = {
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove default border
    "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove hover border
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove focus border
  },
};

export const BOOKING_ALERT = "BLACK_CAR_BOOKING_ALERT";

//For invoice details filters
export const FREQUENCY_LIST = [
  {
    label: "Weekly",
    value: "WEEKLY",
  },
  {
    label: "Bi-Weekly",
    value: "BI_WEEKLY",
  },
  {
    label: "Monthly",
    value: "MONTHLY",
  },
  {
    label: "Quarterly",
    value: "QUARTERLY",
  },
  {
    label: "Yearly",
    value: "YEARLY",
  },
  {
    label: "Upon Completion",
    value: "UPON_COMPLETION",
  },
];

export const FreqPreviewTxtInvoice = {
  WEEKLY: "Week",
  BI_WEEKLY: "Bi-Week",
  MONTHLY: "",
  QUARTERLY: "Q",
  YEARLY: "Year",
};

//For invoice details filters

export const ITEMS_STATUS_LIST = [
  { label: "Not Started", value: "NOT_STARTED" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Complete", value: "COMPLETED" },
  { label: "Needs Review", value: "NEEDS_REVIEW" },
  { label: "Resolved", value: "RESOLVED" },
  { label: "Billable", value: "BILLABLE" },
  { label: "Un-billable", value: "UNBILLABLE" },
  { label: "Comped", value: "COMPED" },
  { label: "Minimum Billable", value: "MINIMUM_BILLABLE" },
];

export const getStatusLabelByValue = (value: string): string | undefined => {
  const item = ITEMS_STATUS_LIST.find((item) => item.value === value);
  return item ? item.label : undefined;
};

export const BILLING_GROUP_BY = [
  {
    label: "No Type (default)",
    value: "NO_TYPE",
  },
  {
    label: "Set",
    value: "SET",
  },
  {
    label: "Production",
    value: "PRODUCTION",
  },
  {
    label: "Episode",
    value: "EPISODE",
  },
  {
    label: "Location",
    value: "LOCATION",
  },
  {
    label: "Studio/Property",
    value: "STUDIO/PROPERTY",
  },
];

export const SET_PER_INVOICE_OPTIONS = [
  {
    label: "All (default)",
    value: "ALL",
  },
  {
    label: "1",
    value: "ONE",
  },
];

export const REMINDER_VALUES_PREVIEW: any = {
  AFTER_DUE_DATE: "After Due Date",
  BEFORE_DUE_DATE: "Before Due Date",
  ON_DUE_DATE: "On Due Date",
};

export const dummyViewShift = {
  statusCode: 200,
  type: "DEFAULT",
  data: {
    sets: [
      {
        setId: "663b038faf122693c80c2d76",
        setName: "Test set chetan",
        locations: [
          {
            locationId: "674d79cbb9778895384bfb9c",
            locationName: "Chetan test prod",
            deliveryAddress: {
              addressType: "BUSINESS",
              address: "Chetan test prod",
              apartment: null,
              buildingName: null,
              productionType: "Feature Film",
              productionId: "6638f30a303f26ee36a085e9",
              productionName: "Chetan test production",
              setId: "663b038faf122693c80c2d76",
              setName: "Test set chetan",
              locationId: "674d79cbb9778895384bfb9c",
              locationName: "Chetan test prod",
              productionScheduleType: "Development",
              setScheduleType: "Prep",
            },
            address: "Chetan test prod",
            startDate: "2025-06-17T13:30:00.000Z",
            locationPurpose: [
              "Shooting Location",
              "Crew Parking",
              "Basecamp",
              "Equipment Lot",
            ],
            endDate: "2025-06-18T12:30:00.000Z",
            dates: [
              {
                date: "2025-06-17",
                items: [
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851592e97b7884ede10e3fd",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T13:30:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516ab297b7880893110354",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "68516b9e97b78855161103e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T18:00:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851653297b788237910f50f",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T17:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685167bd97b788497a1101e2",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T14:00:00.000Z",
                    actualEndTime: "2025-06-17T16:55:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6851a26b97b78873921162b9",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-17T17:25:00.000Z",
                    actualEndTime: "2025-06-17T18:25:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                ],
              },
              {
                date: "2025-06-18",
                items: [
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "6852471997b78877c1127341",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T12:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                  {
                    _id: "685246af97b7883b9912728c",
                    productId: "67cadb5742c6083db4ef16e7",
                    productImage: "",
                    actualStartTime: "2025-06-18T05:30:00.000Z",
                    actualEndTime: "2025-06-18T11:30:00.000Z",
                    unit: 1,
                    locationDetails: {
                      address: {
                        _id: "674d79cbb97788868b4bfb9d",
                        addressLine1: "Appinventiv",
                        cityTown: "Noida",
                        locationName: "Chetan test prod",
                        addressLine2:
                          "B-25 Nr Thomson Reuters, Sector 58, Noida, Uttar Pradesh 201301, India",
                        stateProvince: "Uttar Pradesh",
                        nickname: "Appinventiv chetan test prod",
                      },
                    },
                    rentPricing: {
                      _id: "66069a6a6bbb98903e17ee35",
                      minDuration: 1,
                      minRateModel: "DAILY",
                      rentPrice: 11,
                      extendedPriceMode: "MINIMUM_RATE",
                      priceMode: "PER_HOUR",
                      minShiftLength: 1,
                      shiftLength: 12,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  message: "Success",
};
