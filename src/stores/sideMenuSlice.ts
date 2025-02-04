import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "DASHBOARDS",
    {
      icon: "GaugeCircle",
      pathname: "/layout/dashboard-overview-1",
      title: "E-Commerce",
    },
    {
      icon: "ActivitySquare",
      pathname: "/layout/dashboard-overview-2",
      title: "CRM",
    },
    {
      icon: "Album",
      pathname: "/layout/dashboard-overview-3",
      title: "Hospital",
    },
    {
      icon: "BookMarked",
      pathname: "/layout/dashboard-overview-4",
      title: "Factory",
    },
    {
      icon: "HardDrive",
      pathname: "/layout/dashboard-overview-5",
      title: "Banking",
    },
    {
      icon: "MousePointerSquare",
      pathname: "/layout/dashboard-overview-6",
      title: "Cafe",
    },
    {
      icon: "ShieldHalf",
      pathname: "/layout/dashboard-overview-7",
      title: "Crypto",
    },
    {
      icon: "Building",
      pathname: "/layout/dashboard-overview-8",
      title: "Hotel",
    },
    "APPS",
    {
      icon: "GanttChartSquare",
      pathname: "/layout/inbox",
      title: "Inbox",
      badge: 4,
    },
    {
      icon: "PanelRightClose",
      pathname: "/layout/file-manager-list",
      title: "File Manager List",
    },
    {
      icon: "PanelTopClose",
      pathname: "/layout/file-manager-grid",
      title: "File Manager Grid",
    },
    {
      icon: "PanelTopClose",
      pathname: "/layout/point-of-sale",
      title: "Point of Sale",
    },
    {
      icon: "MailOpen",
      pathname: "/layout/chat",
      title: "Chat",
    },
    {
      icon: "CalendarRange",
      pathname: "/layout/calendar",
      title: "Calendar",
    },
    "UI WIDGETS",
    {
      icon: "Album",
      pathname: "/layout/creative",
      title: "Creative",
    },
    {
      icon: "ActivitySquare",
      pathname: "/layout/dynamic",
      title: "Dynamic",
    },
    {
      icon: "Keyboard",
      pathname: "/layout/interactive",
      title: "Interactive",
    },
    "USER MANAGEMENT",
    {
      icon: "SquareUser",
      pathname: "/layout/users",
      title: "Users",
    },
    {
      icon: "CakeSlice",
      pathname: "/layout/departments",
      title: "Departments",
    },
    {
      icon: "PackagePlus",
      pathname: "/layout/add-user",
      title: "Add User",
    },
    "PERSONAL DASHBOARD",
    {
      icon: "Presentation",
      pathname: "/layout/profile-overview",
      title: "Profile Overview",
    },
    {
      icon: "CalendarRange",
      pathname: "/layout/profile-overview?page=events",
      title: "Events",
    },
    {
      icon: "Medal",
      pathname: "/layout/profile-overview?page=achievements",
      title: "Achievements",
    },
    {
      icon: "TabletSmartphone",
      pathname: "/layout/profile-overview?page=contacts",
      title: "Contacts",
    },
    {
      icon: "Snail",
      pathname: "/layout/profile-overview?page=default",
      title: "Default",
    },
    "GENERAL SETTINGS",
    {
      icon: "Briefcase",
      pathname: "/layout/settings",
      title: "Profile Info",
    },
    {
      icon: "MailCheck",
      pathname: "/layout/settings?page=email-settings",
      title: "Email Settings",
    },
    {
      icon: "Fingerprint",
      pathname: "/layout/settings?page=security",
      title: "Security",
    },
    {
      icon: "Radar",
      pathname: "/layout/settings?page=preferences",
      title: "Preferences",
    },
    {
      icon: "DoorOpen",
      pathname: "/layout/settings?page=two-factor-authentication",
      title: "Two-factor Authentication",
    },
    {
      icon: "Keyboard",
      pathname: "/layout/settings?page=device-history",
      title: "Device History",
    },
    {
      icon: "Ticket",
      pathname: "/layout/settings?page=notification-settings",
      title: "Notification Settings",
    },
    {
      icon: "BusFront",
      pathname: "/layout/settings?page=connected-services",
      title: "Connected Services",
    },
    {
      icon: "Podcast",
      pathname: "/layout/settings?page=social-media-links",
      title: "Social Media Links",
    },
    {
      icon: "PackageX",
      pathname: "/layout/settings?page=account-deactivation",
      title: "Account Deactivation",
    },
    "ACCOUNT",
    {
      icon: "PercentSquare",
      pathname: "/layout/billing",
      title: "Billing",
    },
    {
      icon: "DatabaseZap",
      pathname: "/layout/invoice",
      title: "Invoice",
    },
    "E-COMMERCE",
    {
      icon: "BookMarked",
      pathname: "/layout/categories",
      title: "Categories",
    },
    {
      icon: "Compass",
      pathname: "/layout/add-product",
      title: "Add Product",
    },
    {
      icon: "Table2",
      pathname: "/layout/products",
      title: "Products",
      subMenu: [
        {
          icon: "LayoutPanelTop",
          pathname: "/layout/product-list",
          title: "Product List",
        },
        {
          icon: "LayoutPanelLeft",
          pathname: "/layout/product-grid",
          title: "Product Grid",
        },
      ],
    },
    {
      icon: "SigmaSquare",
      pathname: "/layout/transactions",
      title: "Transactions",
      subMenu: [
        {
          icon: "DivideSquare",
          pathname: "/layout/transaction-list",
          title: "Transaction List",
        },
        {
          icon: "PlusSquare",
          pathname: "/layout/transaction-detail",
          title: "Transaction Detail",
        },
      ],
    },
    {
      icon: "FileArchive",
      pathname: "/layout/sellers",
      title: "Sellers",
      subMenu: [
        {
          icon: "FileImage",
          pathname: "/layout/seller-list",
          title: "Seller List",
        },
        {
          icon: "FileBox",
          pathname: "/layout/seller-detail",
          title: "Seller Detail",
        },
      ],
    },
    {
      icon: "Goal",
      pathname: "/layout/reviews",
      title: "Reviews",
    },
    "AUTHENTICATIONS",
    {
      icon: "BookKey",
      pathname: "/",
      title: "Login",
    },
    {
      icon: "BookLock",
      pathname: "register",
      title: "Register",
    },
    "COMPONENTS",
    {
      icon: "LayoutPanelLeft",
      title: "Table",
      subMenu: [
        {
          icon: "FlipVertical",
          pathname: "/layout/regular-table",
          title: "Regular Table",
        },
        {
          icon: "FlipHorizontal",
          pathname: "/layout/tabulator",
          title: "Tabulator",
        },
      ],
    },
    {
      icon: "MemoryStick",
      title: "Overlay",
      subMenu: [
        {
          icon: "MenuSquare",
          pathname: "/layout/modal",
          title: "Modal",
        },
        {
          icon: "Newspaper",
          pathname: "/layout/slideover",
          title: "Slide Over",
        },
        {
          icon: "PanelBottom",
          pathname: "/layout/notification",
          title: "Notification",
        },
      ],
    },
    {
      icon: "Package2",
      pathname: "/layout/tab",
      title: "Tab",
    },
    {
      icon: "Pocket",
      pathname: "/layout/accordion",
      title: "Accordion",
    },
    {
      icon: "PlusSquare",
      pathname: "/layout/button",
      title: "Button",
    },
    {
      icon: "Presentation",
      pathname: "/layout/alert",
      title: "Alert",
    },
    {
      icon: "ShieldEllipsis",
      pathname: "/layout/progress-bar",
      title: "Progress Bar",
    },
    {
      icon: "Clapperboard",
      pathname: "/layout/tooltip",
      title: "Tooltip",
    },
    {
      icon: "FlipVertical",
      pathname: "/layout/dropdown",
      title: "Dropdown",
    },
    {
      icon: "FileType2",
      pathname: "/layout/typography",
      title: "Typography",
    },
    {
      icon: "Aperture",
      pathname: "/layout/icon",
      title: "Icon",
    },
    {
      icon: "Droplets",
      pathname: "/layout/loading-icon",
      title: "Loading Icon",
    },
    {
      icon: "GalleryHorizontalEnd",
      pathname: "/layout/regular-form",
      title: "Regular Form",
    },
    {
      icon: "Microwave",
      pathname: "/layout/datepicker",
      title: "Datepicker",
    },
    {
      icon: "Disc3",
      pathname: "/layout/tom-select",
      title: "Tom Select",
    },
    {
      icon: "Sandwich",
      pathname: "/layout/file-upload",
      title: "File Upload",
    },
    {
      icon: "HopOff",
      pathname: "/layout/wysiwyg-editor",
      title: "Wysiwyg Editor",
    },
    {
      icon: "ClipboardType",
      pathname: "/layout/validation",
      title: "Validation",
    },
    {
      icon: "PieChart",
      pathname: "/layout/chart",
      title: "Chart",
    },
    {
      icon: "KanbanSquare",
      pathname: "/layout/slider",
      title: "Slider",
    },
    {
      icon: "Image",
      pathname: "/layout/image-zoom",
      title: "Image Zoom",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
