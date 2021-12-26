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
  {
    title: "Check out your tasks",
    value: 20,
    _id: 0,
    icon: "tasks",
    fill: "var(--primary-60)",
  },
  {
    title: "Daily and weeekly reports",
    value: 7,
    _id: 1,
    icon: "feedbacks",
    fill: "var(--pink)",
  },
];

// signup form counter constant that indicates the amount of
// steps remaining in form filling process
export const MAX_FORM_STEPS = 3;
