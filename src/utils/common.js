export const sideNavItems = [
  { name: "overview", path: "/dashboard", icon: "overview" },
  { name: "Time Tracker", path: "/dashboard/time-tracker", icon: "time" },
  ,
  { name: "reports", path: "/dashboard/reports", icon: "report" },
  {
    name: "settings",
    path: "/dashboard/settings",
    icon: "settings",
    unique_class: "settings",
  },
];

// dashboard stats card
export const overview_stats = [
  { title: "all staffs", value: 60, _id: 0 },
  { title: "active staffs", value: 16, _id: 1 },
  { title: "reports", value: 43, _id: 2 },
  { title: "average hour", value: 16, _id: 3 },
];

// signup form counter constant that indicates the amount of
// steps remaining in form filling process
export const MAX_FORM_STEPS = 3;
