export interface routeTypes {
  name: string;
  path: string;
  id: number;
  isPrivate?: boolean;
  Component: React.FC<any>;
  pageProp?: { page: string };
}

export interface CustomKeys {
  label: string;
  value: string;
}

export type country = {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
  _id: string;
};

export type Department = {
  _id: string;
  deptName: string;
};

/// State Types Start

interface BranchFilter {
  fromDate: string;
  toDate: string;
  status: string;
}

export interface BranchState {
  loading: boolean;
  branches: null | any;
  error: boolean | string;
  page: number;
  selectedIds: string[];
  searchKeywords: string;
  filter: null | BranchFilter;
  branchData: null | any;
  existedZone: any[];
  holidayList: any[];
}

export interface CabState {
  searchKeywords: string;
  vehicleSearchKeywords: string;
  driverSearchKeywords: string;
  assignModalData: null | any;
  bookingSuccessModal: boolean;
}

export interface CoVendorState {
  permissionTable: any;
  moduleTable: any;
  backendModuleTable: null | any[];
  vendors: null | any;
  filter: null | BranchFilter;
  searchKeywords: string;
  coVendorDetails: null | any;
  vendorToBeDelete: null | string;
  deleteVendorModal: boolean;
  branchWisePermission: [];
  BEPermissionTable: any;
}

export interface CommonState {
  countryList: country[];
  departmentList: Department[];
  categories: any[];
  loading: boolean;
  blockNavigation: boolean;
  menu: boolean;
  mobileChat: boolean;
  activeMenu: string;
  page: number;
  searchedLocations: any[];
  presignedUrl: string | null;
  baseUrl: string | null;
  selectedBranch: { _id: string; branchName: string }[] | [];
  branchChangeSignal: boolean | null;
  OrderPagescroll: boolean;
}
export interface StaticContentState {
  data: any;
  loading: boolean;
}

export interface UserData {
  accessToken: string;
  userId: string;
  email: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  isEmailVerified: boolean;
  userType: "VENDOR" | string; // Add other possible values if known
  role: "VENDOR" | string; // Add other possible values if known
  status: "ACTIVE" | string; // Add other possible values if known
  profilePicture: string;
  formNextStep: "BILLING_DETAILS" | string; // Add other possible values if known
  businessInfo: {
    department: string[];
    _id: string;
    businessAddress: string;
    businessCity: string;
    businessCoordinates: {
      type: "Point";
      coordinates: [number, number]; // Longitude, Latitude
    };
    businessLocation: string;
    businessName: string;
    businessState: string;
    businessType: "Publicly-Listed Business" | string; // Add other types if known
    businessZipCode: string;
    businessDescription: string;
    businessEmail: string;
    website: string;
    establishedYear: string;
  };
  documentInfo: {
    _id: string;
    documentType: "Business Incorporation Paper" | string; // Add other types if known
    documentUrl: string;
    documentNumber: string;
    countryOfIssue: string;
    dateOfExp: string; // ISO date string
  };
  isProfileCompleted: boolean;
  branchId: string;
  residentialAddress: {
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
  };
  isReelVendor: boolean;
  branchPermissions?: any;
}
export interface AuthState {
  status: boolean;
  userData: null | UserData;
  token: null | string;
  disclamerPopUpVisibile: boolean;
  permissionToAdd: boolean;
  tokenFCM?: string;
  rejectBanner?: any;
  rejectReason?: any;
}
export interface CompanyState {
  companyDetails: null | any;
}

export interface BranchDetails {
  branchDetails: null | any;
  selectedBranchIdBranchDetails: null | any;
}

export interface ClientState {
  clientList: any;
  clientInfo: any;
  clientContacts: any;
  episodeDetails: any;
  clientDepartmentsCrews: any;
  userType: any;
  clientDepartmentsCrewMembers: any;
  setDetails: any;
  setOrders: any;
  departmentSignUplist: any;
  sets: any;
  showMultipleOrdersStatus: boolean;
  selectedSetOrders: any;
  rateAndDiscount: any;
  documents: any;
  associationsList: any;
  episodeListClients: any;
  setLocationsdetails: any;
  page: number;
  searchKeywords: string;
  type: string;
  status: string;
  loading: boolean;
  isType: boolean;
  documentlistdept: any;
  documentlist: any;
  filter: any;
  editStatus: boolean;
  setOrderLoading: false;
  specificDiscountList: any;
  searchKeywordsSpecificDiscount: string;
  defaultReminders: any;
  billingInfo: any;
  allStudiolist: any;
  productionFormData: any;
  productionTableList: any;
  contacts: any;
  deptList: any;
  getrole: any;
  emailunique: any;
  getrolebyid: any;
  departmentAddContact: any;
  episodeList: any;
  settinglist: any;
  productionList: any;
  studioDetail: any;
  studioProductions: any;
  productiondetails: any;
  studioDocuments: any;
  clientsetDetails: any;
  contactlistdept: any;
  crewListdept: any;
  departmentLoading: any;
  departmentlist: any;
  memberdetails: any;
  selectedClientId: any;
  episodeAssociatedSets: any;
  detailsTab: number;
}

export interface GroupState {
  products: any;
  groups: any;
  page: number;
  searchKeywords: string;
  type: string;
  loading: boolean;
  filter: any;
  departmentAndCategory: {
    department: string;
    category: string;
  };
  selectedIds: any;
  selectedAllProducts: any;
  groupDetails?: any;
  tableProduts: any;
  filterStatus?: boolean;
}

export interface ProductionItem {
  productionId: string;
  productionName: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Branch {
  zone?: {
    coordinates: Coordinate[] | any;
  };
  branchName: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  profilePicture: string;
  _id: string;
}
export interface ChatPage {
  nextPage: number;
  hasMore: boolean;
  limit: number;
  loading: boolean;
}

export interface ContactDetails {
  _id?: string;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  status?: string;
}

export interface UserDetails {
  isOnline: Boolean;
  lastSeen: number;
  contactId: string;
}
export interface Quotation {
  _id?: string;
  documents?: {
    mediaUrl: string;
    mediaExtension: string;
    mediaName: string;
    mediaSize: string;
  }[];
  quoteAddressType?: string;
  locationDetail?: LocationDetails;
  userAddressId?: string;
  notes?: string;
  startTime?: Date;
  endTime?: Date;
  createdBy?: string;
  created?: number;
  createdAt?: Date;
  updatedAt?: Date;
  setName?: string;
  quotationId: string;
  isCartCreated?: boolean;
  productionName?: string;
  productionType: string;
  productionScheduleType: string;
  episodeName?: string;
  setScheduleType?: string;
  deptName?: string;
}
export interface LocationDetails {
  _id?: string;
  userId?: string;
  addressLabel?: string;
  address?: {
    stateProvince: string;
    cityTown: string;
    locationName: string;
    nickname: string;
    addressLine2: string;
    addressLine1: string;
  };
  buildingName?: string;
  apartment?: string;
  deliveryStatus?: string;
  location?: Location;
  created?: number;
  createdAt?: Date;
  updatedAt?: Date;
  isPrimary?: boolean;
}

export interface Location {
  type?: string;
  coordinates?: number[];
}

export interface MediaDetails {
  mediaUrl: string;
  mediaExtension: string;
  mediaName: string;
  mediaSize: string;
  mediaLocalUrl?: string;
  failed?: boolean;
}
export interface CartDetails {
  isCartActive?: boolean;
  quotationId?: string;
  productName?: string;
  qty?: number;
  noOfItems?: number;
  location?: Location;
  grandTotal?: string;
}

export interface Location {
  buildingName?: string;
  address?: string;
}

export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  subregion: string;
  population: number;
}

// Type for individual address component in the API response
export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

// Type for geographical location (latitude and longitude)
export interface GeoLocation {
  lat: number;
  lng: number;
}

// Type for geometry field in the location response
export interface Geometry {
  location: GeoLocation;
}

// Type for each result in the location API response
export interface Result {
  address_components: AddressComponent[];
  geometry: Geometry;
}

// Main API response type for fetchLocation function
export interface FetchLocationResponse {
  results: Result[];
  status: string;
}

// Define the shape of the function that fetches location data
export type FetchLocationFunction = (
  code: string
) => Promise<FetchLocationResponse>;

// types.ts

export interface UploadedImage {
  url: string;
}

export interface VariantProduct {
  propertyTitle: string;
  propertyValue: string;
  isCurrent?: boolean;
  productId?: { _id: string };
}

export interface FormData {
  thumbnailImg?: string;
  type: string;
  images?: string[];
  video?: string;
  variantProducts?: VariantProduct[];
  rentDiscount?: number;
  rentDiscountType?: string;
  [key: string]: any;
}

export interface ApprovalTrack {
  _id: string;
  title: string;
  body: string;
  updatedAt?: number;
}

export interface StatusTrack {
  _id?: string;
  status: string;
  statusUpdatedAt: number;
}
