// code splitting all the component-based routes like  signup,
// signin, forgot-password etc with Next.js dynamic routes
import dynamic from "next/dynamic";

export const routes = {
  // auth routes
  register: dynamic(() => import("../../src/containers/UserAuth/SignUp")),
  login: dynamic(() => import("../../src/containers/UserAuth/SignIn")),

  // user dashboard routes
  dashboard: dynamic(() => import("../containers/Dashboard/overview")),
  reports: dynamic(() => import("../containers/Dashboard/reports")),
  settings: dynamic(() => import("../containers/Dashboard/settings")),
  tracker: dynamic(() => import("../containers/Dashboard/time-tracker")),

  // admin dash routes
  admin: dynamic(() => import("../containers/admin/location")),
  adminReports: dynamic(() => import("../containers/admin/reports")),
  workers: dynamic(() => import("../containers/admin/workers")),
  adminSettings: dynamic(() => import("../containers/admin/settings")),

  // layouts
  home: dynamic(() => import("@layouts/HomeLayout")),
  dash: dynamic(() => import("@layouts/DashLayout")),
  admin: dynamic(() => import("@adminRoutes/DashLayout")),
};
