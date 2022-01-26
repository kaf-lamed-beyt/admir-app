const userDashboard = "/dashboard";
const adminDashboard = "/admin";

export const dashRoutes = {
  adminDashboard,
  userDashboard,
  userReports: `${userDashboard}/reports`,
  userSettings: `${userDashboard}/settings`,
  userTimeTracker: `${userDashboard}/time-tracker`,
  generalSettingsRoute: `${userDashboard}/settings/general`,
  changePasswordRoute: `${userDashboard}/settings/change-password`,
  adminSettings: `${adminDashboard}/settings`,
  locationRoute: `${adminDashboard}/location`,
  workers: `${adminDashboard}/workers`,
  adminTimeTracker: `${adminDashboard}/time-tracker`,
  adminReports: `${adminDashboard}/reports`,
};

export const sideNavItems = [
  { name: "overview", path: "/dashboard", icon: "overview" },
  { name: "Time Tracker", path: "/dashboard/time-tracker", icon: "time" },
  ,
  { name: "reports", path: "/dashboard/reports", icon: "report" },
  {
    name: "settings",
    path: `${
      dashRoutes.userSettings ||
      dashRoutes.generalSettingsRoute ||
      dashRoutes.changePasswordRoute
    }`,
    icon: "settings",
    unique_class: "settings",
  },
];

export const adminNavItems = [
  { name: "overview", path: "/admin", icon: "overview" },
  { name: "Time Tracker", path: "/admin/time-tracker", icon: "time" },
  { name: "Location", path: "/admin/location", icon: "location" },
  { name: "reports", path: "/admin/reports", icon: "report" },
  { name: "workers", path: "/admin/workers", icon: "report" },
  {
    name: "settings",
    path: "/admin/settings",
    icon: "settings",
    unique_class: "settings",
  },
];

// dashboard stats card
export const overview_stats = [
  {
    // title: "Check out your tasks",
    title: "Available tasks this week",
    value: 20,
    _id: 0,
    icon: "tasks",
    fill: "var(--primary-60)",
  },
  {
    title: "Reports for this week",
    value: 7,
    _id: 1,
    icon: "feedbacks",
    fill: "var(--pink)",
  },
];

// signup form counter constant that indicates the amount of
// steps remaining in form filling process
export const MAX_FORM_STEPS = 3;

// admin dashboard static data

export const admin_stats = [
  { title: "all staffs", value: 60, _id: 0 },
  { title: "active staffs", value: 16, _id: 1 },
  { title: "reports", value: 43, _id: 2 },
  { title: "average hour", value: 16, _id: 3 },
];

// dashboard/settings
export const settings_card = [
  {
    icon: "organization",
    name: "organizations",
    description: "Edit your company name, address, time zone and more e.t.c",
    path: "/dashboard/settings/organizations",
  },
  {
    icon: "map",
    name: "Maps",
    description: "Control location tracking",
    path: "#",
  },
  {
    icon: "time-tracker",
    name: "Time off",
    description: "Manage your companies time off and holiday policy",
    path: "#",
  },
];

// time tracker time stamps
export const time = [
  {
    label: "12:00 AM",
    value: "12:00 AM",
  },
  {
    label: "12:10 AM",
    value: "12:10 AM",
  },
  {
    label: "12:15 AM",
    value: "12:15 AM",
  },
  {
    label: "12:20 AM",
    value: "12:20 AM",
  },
  {
    label: "12:25 AM",
    value: "12:25 AM",
  },
  {
    label: "12:30 AM",
    value: "12:30 AM",
  },
  {
    label: "12:35 AM",
    value: "12:35 AM",
  },
  {
    label: "12:40 AM",
    value: "12:40 AM",
  },
  {
    label: "12:45 AM",
    value: "12:45 AM",
  },
  {
    label: "12:50 AM",
    value: "12:50 AM",
  },
  {
    label: "1:00 AM",
    value: "1:00 AM",
  },
  {
    label: "1:10 AM",
    value: "1:10 AM",
  },
  {
    label: "1:20 AM",
    value: "1:20 AM",
  },
  {
    label: "1:25 AM",
    value: "1:25 AM",
  },
  {
    label: "1:30 AM",
    value: "1:30 AM",
  },
  {
    label: "1:40 AM",
    value: "1:40 AM",
  },
  {
    label: "1:50 AM",
    value: "1:50 AM",
  },
  {
    label: "2:00 AM",
    value: "2:00 AM",
  },
  {
    label: "2:10 AM",
    value: "2:10 AM",
  },
  {
    label: "2:20 AM",
    value: "2:20 AM",
  },
  {
    label: "2:30 AM",
    value: "2:30 AM",
  },
  {
    label: "2:40 AM",
    value: "2:40 AM",
  },
  {
    label: "2:50 AM",
    value: "2:50 AM",
  },
  {
    label: "3:00 AM",
    value: "3:00 AM",
  },
  {
    label: "3:10 AM",
    value: "3:10 AM",
  },
  {
    label: "3:20 AM",
    value: "3:20 AM",
  },
  {
    label: "3:30 AM",
    value: "3:30 AM",
  },
  {
    label: "3:40 AM",
    value: "3:40 AM",
  },
  {
    label: "3:50 AM",
    value: "3:50 AM",
  },
  {
    label: "4:00 AM",
    value: "4:00 AM",
  },
  {
    label: "4:10 AM",
    value: "4:10 AM",
  },
  {
    label: "4:20 AM",
    value: "4:20 AM",
  },
  {
    label: "4:30 AM",
    value: "4:30 AM",
  },
  {
    label: "5:40 AM",
    value: "5:40 AM",
  },
  {
    label: "5:50 AM",
    value: "5:50 AM",
  },
  {
    label: "6:00 AM",
    value: "6:00 AM",
  },
  {
    label: "6:10 AM",
    value: "6:10 AM",
  },
  {
    label: "6:20 AM",
    value: "6:20 AM",
  },
  {
    label: "6:30 AM",
    value: "6:30 AM",
  },
  {
    label: "6:40 AM",
    value: "6:40 AM",
  },
  {
    label: "6:50 AM",
    value: "6:50 AM",
  },
  {
    label: "7:00 AM",
    value: "7:00 AM",
  },
  {
    label: "7:10 AM",
    value: "7:10 AM",
  },
  {
    label: "7:20 AM",
    value: "7:20 AM",
  },
  {
    label: "7:30 AM",
    value: "7:30 AM",
  },
  {
    label: "7:40 AM",
    value: "7:40 AM",
  },
  {
    label: "7:50 AM",
    value: "7:50 AM",
  },
  {
    label: "8:00 AM",
    value: "8:00 AM",
  },
  {
    label: "8:10 AM",
    value: "8:10 AM",
  },
  {
    label: "8:20 AM",
    value: "8:20 AM",
  },
  {
    label: "8:30 AM",
    value: "8:30 AM",
  },
  {
    label: "8:30 AM",
    value: "8:30 AM",
  },
  {
    label: "8:40 AM",
    value: "8:40 AM",
  },
  {
    label: "8:50 AM",
    value: "8:50 AM",
  },
  {
    label: "9:00 AM",
    value: "9:00 AM",
  },
  {
    label: "9:10 AM",
    value: "9:10 AM",
  },
  {
    label: "9:20 AM",
    value: "9:20 AM",
  },
  {
    label: "9:30 AM",
    value: "9:30 AM",
  },
  {
    label: "9:40 AM",
    value: "9:40 AM",
  },
  {
    label: "9:50 AM",
    value: "9:50 AM",
  },
  {
    label: "9:00 AM",
    value: "9:00 AM",
  },
  {
    label: "9:10 AM",
    value: "9:10 AM",
  },
  {
    label: "9:20 AM",
    value: "9:20 AM",
  },
  {
    label: "9:30 AM",
    value: "9:30 AM",
  },
  {
    label: "9:40 AM",
    value: "9:40 AM",
  },
  {
    label: "9:50 AM",
    value: "9:50 AM",
  },
  {
    label: "10:00 AM",
    value: "10:00 AM",
  },
  {
    label: "10:10 AM",
    value: "10:10 AM",
  },
  {
    label: "10:20 AM",
    value: "10:20 AM",
  },
  {
    label: "10:30 AM",
    value: "10:30 AM",
  },
  {
    label: "10:40 AM",
    value: "10:40 AM",
  },
  {
    label: "10:50 AM",
    value: "10:50 AM",
  },
  {
    label: "11:00 AM",
    value: "11:00 AM",
  },
  {
    label: "11:10 AM",
    value: "11:10 AM",
  },
  {
    label: "11:20 AM",
    value: "11:20 AM",
  },
  {
    label: "11:30 AM",
    value: "11:30 AM",
  },
  {
    label: "11:40 AM",
    value: "11:40 AM",
  },
  {
    label: "11:50 AM",
    value: "11:50 AM",
  },
  {
    label: "12:00 PM",
    value: "12:00 PM",
  },
  {
    label: "12:10 PM",
    value: "12:10 PM",
  },
  {
    label: "12:20 PM",
    value: "12:20 PM",
  },
  {
    label: "12:30 PM",
    value: "12:30 PM",
  },
  {
    label: "12:40 PM",
    value: "12:40 PM",
  },
  {
    label: "12:50 PM",
    value: "12:50 PM",
  },
  {
    label: "1:00 PM",
    value: "1:00 PM",
  },
  {
    label: "1:10 PM",
    value: "1:10 PM",
  },
  {
    label: "1:20 PM",
    value: "1:20 PM",
  },
  {
    label: "1:30 PM",
    value: "1:30 PM",
  },
  {
    label: "1:40 PM",
    value: "1:40 PM",
  },
  {
    label: "1:50 PM",
    value: "1:50 PM",
  },
  {
    label: "2:00 PM",
    value: "2:00 PM",
  },
  {
    label: "2:10 PM",
    value: "2:10 PM",
  },
  {
    label: "2:20 PM",
    value: "2:20 PM",
  },
  {
    label: "2:30 PM",
    value: "2:30 PM",
  },
  {
    label: "2:40 PM",
    value: "2:40 PM",
  },
  {
    label: "2:50 PM",
    value: "2:50 PM",
  },
  {
    label: "3:00 PM",
    value: "3:00 PM",
  },
  {
    label: "4:10 PM",
    value: "4:10 PM",
  },
  {
    label: "3:20 PM",
    value: "3:20 PM",
  },
  {
    label: "3:30 PM",
    value: "3:30 PM",
  },
  {
    label: "3:40 PM",
    value: "3:40 PM",
  },
  {
    label: "3:50 PM",
    value: "3:50 PM",
  },
  {
    label: "4:00 PM",
    value: "4:00 PM",
  },
  {
    label: "4:10 PM",
    value: "4:10 PM",
  },
  {
    label: "4:20 PM",
    value: "4:20 PM",
  },
  {
    label: "4:30 PM",
    value: "4:30 PM",
  },
  {
    label: "4:40 PM",
    value: "4:40 PM",
  },
  {
    label: "4:50 PM",
    value: "4:50 PM",
  },
  {
    label: "5:00 PM",
    value: "5:00 PM",
  },
  {
    label: "5:10 PM",
    value: "5:10 PM",
  },
  {
    label: "5:20 PM",
    value: "5:20 PM",
  },
  {
    label: "5:30 PM",
    value: "5:30 PM",
  },
  {
    label: "5:40 PM",
    value: "5:40 PM",
  },
  {
    label: "5:50 PM",
    value: "5:50 PM",
  },
  {
    label: "6:00 PM",
    value: "6:00 PM",
  },
  {
    label: "6:10 PM",
    value: "6:10 PM",
  },
  {
    label: "6:20 PM",
    value: "6:20 PM",
  },
  {
    label: "6:30 PM",
    value: "6:30 PM",
  },
  {
    label: "6:40 PM",
    value: "6:40 PM",
  },
  {
    label: "6:50 PM",
    value: "6:50 PM",
  },
  {
    label: "7:00 PM",
    value: "7:00 PM",
  },
  {
    label: "7:10 PM",
    value: "7:10 PM",
  },
  {
    label: "7:20 PM",
    value: "7:20 PM",
  },
  {
    label: "7:30 PM",
    value: "7:30 PM",
  },
  {
    label: "7:40 PM",
    value: "7:40 PM",
  },
  {
    label: "7:50 PM",
    value: "7:50 PM",
  },
  {
    label: "8:00 PM",
    value: "8:00 PM",
  },
  {
    label: "8:10 PM",
    value: "8:10 PM",
  },
  {
    label: "8:20 PM",
    value: "8:20 PM",
  },
  {
    label: "8:30 PM",
    value: "8:30 PM",
  },
  {
    label: "8:40 PM",
    value: "8:40 PM",
  },
  {
    label: "8:50 PM",
    value: "8:50 PM",
  },
  {
    label: "9:00 PM",
    value: "9:00 PM",
  },
  {
    label: "9:10 PM",
    value: "9:10 PM",
  },
  {
    label: "9:20 PM",
    value: "9:20 PM",
  },
  {
    label: "9:30 PM",
    value: "9:30 PM",
  },
  {
    label: "9:40 PM",
    value: "9:40 PM",
  },
  {
    label: "9:50 PM",
    value: "9:50 PM",
  },
  {
    label: "10:00 PM",
    value: "10:00 PM",
  },
  {
    label: "10:10 PM",
    value: "10:10 PM",
  },
  {
    label: "10:20 PM",
    value: "10:20 PM",
  },
  {
    label: "10:30 PM",
    value: "10:30 PM",
  },
  {
    label: "10:40 PM",
    value: "10:40 PM",
  },
  {
    label: "10:50 PM",
    value: "10:50 PM",
  },
  {
    label: "11:00 PM",
    value: "11:00 PM",
  },
  {
    label: "11:10 PM",
    value: "11:10 PM",
  },
  {
    label: "11:20 PM",
    value: "11:20 PM",
  },
  {
    label: "11:30 PM",
    value: "11:30 PM",
  },
  {
    label: "11:40 PM",
    value: "11:40 PM",
  },
  {
    label: "11:50 PM",
    value: "11:50 PM",
  },
];
