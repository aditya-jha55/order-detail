import { tranlate } from '../LocalizationJson/i18';

const t = (k: string, params: any = {}) =>
  tranlate(`validation_msgs.${k}`, params);
export const standardErrorMsg = 'Something went wrong!';
export const ROUTES = {
  LOGIN: '/login',
  VERIFY: '/verify',
  FORGOT_PASSWORD: '/forgot-password',
  ADD_CONTACT: '/add-contact-products',
  RESET_PASSWORD: '/resetPassword',
  SIGNUP: '/signup',
  DASHBOARD: '/', /// Default route set to product page as currently don't have dashboard design
  WELCOME: '/welcome',
  BUSINESSINFO: '/business-info',
  CREATE_STUDIO: '/create-studio',
  PRODUCTS: '/products',
  ADD_PRODUCTS: '/add-product',
  EDIT_PRODUCTS: '/edit-product/:id',
  CONTACT_CREW: '/add-contact-crew',
  ADD_VARIANT: '/edit-product/add-variant/:id',
  EDIT_VARIANT: '/edit-product/edit-variant/:parentId/:id',
  ADD_SERVICES: '/add-services',
  EDIT_SERVICE: '/edit-service/:id',
  ADD_PACKAGE: '/add-package',
  EDIT_PACKAGE: '/edit-package/:id',
  ADD_SERVICE_VARIANT: '/edit-service/add-variant/:id',
  EDIT_SERVICE_VARIANT: '/edit-service/edit-variant/:parentId/:id',
  ORDERS: '/orders',
  ORDERS_DETAILS: '/order-details/:id',
  ORDERS_DETAILS_ADDITEMS: '/order-details/:id/add-items',
  DRAFT_DETAILS: '/draft-details/:id',
  ORDERS_WORKSHEET: '/order-worksheet',
  ORDERS_PRODUCTS: '/order-products',
  ADD_PRODUCTS_ORDERS: '/add-products-order',
  BRANCHES: '/branches',
  ADD_BRANCH: '/add-branch',
  EDIT_BRANCH: '/edit-branch/:id',
  VIEW_BRANCH: '/view-branch/:id',
  FINANCIALS: '/finance',
  FINANCIAL_DETAIL: '/finance/detail',
  CHATS: '/chats',
  ORDER_SERVICES: '/chats/orders',
  CREATE_ORDER: '/chats/create-order',
  EDIT_ORDER: '/chats/edit-order/:id',
  COMPANY: '/company',
  CLIENTS: '/clients',
  ADD_CLIENT: '/add-client',
  ADD_EPISODE: '/add-episode',
  ADD_LOCATION: '/add-location',
  ADD_SET: '/add-set',
  EDIT_CLIENT: '/add-client/:id',
  EDIT_EPISODE: '/add-episode/:id',
  EDIT_SET: '/add-set/:id',
  EDIT_STUDIO: '/create-studio/:id',
  CLIENTSETDETAILS: '/clients/set-detail/:id',
  CLIENTDETAILS: '/clients/client-detail/:id',
  UNDERDEVELOPMENT: '/underdevelopment',
  PROFILE: '/profile',
  POLICIES: '/policies',
  TERMS: '/terms-conditions',
  FAQ: '/faq',
  SUPPORT: '/support',
  EMPLOY: '/employ',
  ADD_EMPLOY: '/add-employ',
  EDIT_EMPLOY: '/edit-employ/:id',
  VIEW_EMPLOY: '/view-employ/:id',
  DRIVERS: '/drivers',
  DRIVER_ADD: '/driver/add',
  DRIVER_VIEW: '/driver/detail',
  VEHICLE_ADD: '/vehicle/add',
  VEHICLE_VIEW: '/vehicle/detail',
  RISK_MANAGEMENT: '/risk-management',
  ADD_RISK_USER: '/add-user',
  VIEW_RISK_USER: '/view-user/:id',
  EDIT_RISK_USER: '/edit-user/:id',
  GROUPS: '/groups',
  ADD_GROUP: '/add-group',
  EDIT_GROUP: '/edit-group/:id',
  GENERATE_INVOICE: '/generate-invoice/:id',
  BOOK_CAB: '/book-cab',
  INVOICE_MANAGEMENT: '/invoice',
  INVOICE_DETAILS: '/invoice-details/:id',
  INVOICE_OUTSTANDING_DETAILS: '/invoice-outstanding-details/:id',
  INVOICE_PAST_DUE_DETAILS: '/invoice-past-due-details/:id',
  INVOICE_PAID_DETAILS: '/invoice-paid-details/:id',
  BRANCH_DETAILS: '/branch-details',
  NEW_ORDER: '/orders/create',
  DRAFT: '/draft',
  REQUEST: '/request',
  REQUEST_DETAILS_ID: '/request/:id',
  DRAFT_DETAILS_ID: '/draft/:id',
  CLIENT_STUDIO_DETAIL: '/clients/studio-detail/:id',
  CLIENT_EDIT_STUDIO: '/clients/edit-studio',
  CLIENT_ALL_DEPARTMENTS: '/clients/departments',
  CLIENT_CREATE_EPISODE: '/clients/episode/create',
  CLIENT_EPISODE_DETAIL: '/clients/episode/detail',
  CLIENT_EPISODE_DETAIL_ID: '/clients/episode/detail/:id',
  CLIENT_EPISODE_EDIT: '/clients/episode/edit',
  CREW_MEMBERS_PAGE: '/clients/crew-members',
  LOCATION_DETAIL: '/clients/location-detail',
  EDIT_LOCATION: '/clients/edit-location',
  ORDER_DETAIL_PROTOTYPE: '/orders/new-detail',
  PAYMENT_TRANSACTION: '/payment-transaction',
  PAYMENT_TRANSACTION_DETAIL: '/payment-transaction/detail',
};

export const ErrorMsg = (
  value: number | string = '',
  limit: string | number = ''
) => {
  return {
    min: t(`min`, { amount: value }),
    max: t(`max`, { amount: value }),
    required: t(`required`, { name: value }),
    onlyLetter: t(`onlyLetter`, { amount: value }),
    valid: t(`valid`, { name: value }),
    typeError: t('typeErrorNumber'),
    positive: t('positive'),
    integer: t('integer'),
    percentage: t('percentage'),
    invalid: t('invalid'),
    fileSizeError: t(`fileSizeError`, { amount: value }),
    minCharLimit: t(`minCharLimit`, { name: value, limit }),
    maxCharLimit: t(`maxCharLimit`, { name: value, limit }),
    passwordError: t('passwordError'),
    terms: t('terms'),
    twoDecimalPoints: t('twoDecimalPoints'),
    specialCharNotAlld: t('specialCharNotAlld'),
    futureDate: t('futureDate'),
  };
};
export const allowedImageMimeType = [
  'image/jpeg', //.jpg | .jpeg
  'image/png', // .png
  'image/gif', // .gif
  'image/HEIC', // .gif
  'image/svg+xml', // .svg,
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.svg',
  '.heic',
  '.heif',
];
export const allowedAudioMimeType = [
  'audio/aac', // .aac
  'audio/mp4', // .m4a
  'audio/x-wav', // .wav .wave
  'audio/x-aiff', //.aff .aif .aiff
  'application/ogg', // .ogg
  'audio/mpeg', // .ogg,
  '.ogg',
  '.aff',
  '.aif',
  '.aiff',
  '.wav',
  '.wave',
  '.m4a',
  '.aac',
];
export const allowedVideoMimeType = [
  'video/x-ms-wmv', // .wmv
  'video/avi', // .avi
  'video/quicktime', // .mov
  'video/mp4', // .mp4
  'video/x-flv', // .flv
  '.flv',
  '.mp4',
  '.mov',
  '.avi',
  '.wmv',
  '.heic',
];
export const allowedDocsMimeType = [
  'application/pdf', //.pdf
  'application/vnd.ms-excel', // MS Excel File (.xlsx,. xls)
  '.pdf',
  '.xls',
];
export const allMediaMimeType = [
  ...allowedDocsMimeType,
  ...allowedAudioMimeType,
  ...allowedImageMimeType,
  ...allowedVideoMimeType,
];
export const CHAT_ACTIVE = 'ACTIVE';
export const CHAT_DELETED = 'DELETED';
export const CHAT_UPLOADING = 'UPLOADING';
export const CHAT_FAILED = 'FAILED';
export const CHAT_ORDER_COMPLETED = 'ORDER_COMPLETED';
export const MEDIA_TYPES = ['IMAGE', 'MEDIA', 'DOCS', 'VIDEO'];
export const USER_VENDOR_CHAT = 'user_vendor_chat';
export const VENDOR_VENDOR_CHAT = 'vendor_vendor_chat';
export const VENDOR_ADMIN_CHAT = 'vendor_admin_chat';
export const MaxFileSizeLimit = 10485760;
export const DEFAULT_URL = [
  'https://app-development.s3.amazonaws.com/ReelProject/1701757389017user%20%281%29.png',
  'https://app-development.s3.amazonaws.com/ReelProject/1709702563475_User_Placeholder.png',
];
export const DEFAULT_ADMIN_ID = '66705d5d0b99f01dd013ab7c';
export const ADMIN_FIRSTNAME = 'Reeltrack Support';
export const ADMIN_PROFILE_PIC =
  'https://pre-images.reeltrak.com/ReelProject/imgpsh_fullsize_anim.png';
export const USER_TYPE_MAP = {
  [VENDOR_ADMIN_CHAT]: 'ADMIN',
  [VENDOR_VENDOR_CHAT]: 'VENDOR',
  [USER_VENDOR_CHAT]: 'USER',
};
const GOOGLE_MAPS_API_KEY = 'AIzaSyCu3pQ2rxalRAWIONNcxoYST8Cy7NJrveA';
export const GOOGLE_MAP_API = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;

export enum APPROVAL_TYPE {
  USER = 'USER',
  VENDOR = 'VENDOR',
}

export const PRODUCTION_TYPES = [
  'Feature Film',
  'TV Series',
  'Commercial',
  'Documentary',
  'Music Video',
  'Event',
  'Other',
];

export const setScheduleTypes = [
  { label: 'Development', value: 'Development' },
  { label: 'Prep', value: 'Prep' },
  { label: 'Shoot', value: 'Shoot' },
  { label: 'Strike', value: 'Strike' },
  { label: 'Hold', value: 'Hold' },
  { label: 'Permanent', value: 'Permanent' },
  { label: 'As Needed', value: 'As Needed' },
  { label: 'Travel In', value: 'Travel In' },
  { label: 'Travel Out', value: 'Travel Out' },
];
export const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5', // Light background color for landmasses
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#BDC3C7',
      },
      {
        weight: 1,
      },
      {
        dashArray: [2, 2], // Dotted borders
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off', // Disable icon labels
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161', // Darker text color
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff', // White stroke around labels
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd', // Light color for land parcel labels
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off', // Hide points of interest labels
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff', // White color for road fill
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e0e0e0', // Light color for road strokes
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off', // Disable road icon labels
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#e5e5e5', // Light grey for highways
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e0e0e0', // Light grey for highway stroke
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off', // Disable highway icon labels
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5', // Light color for transit
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575', // Grey color for transit station text
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#C9E1FF', // Light blue color for water
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e', // Light grey color for water text
      },
    ],
  },
];
