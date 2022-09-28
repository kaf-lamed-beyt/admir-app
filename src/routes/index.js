// code splitting all the component-based routes like  signup,
// signin, forgot-password etc with Next.js dynamic routes
import dynamic from "next/dynamic";

export const routes = {
  // auth routes
  register: dynamic(() => import("../../src/containers/UserAuth/SignUp")),
  login: dynamic(() => import("../../src/containers/UserAuth/SignIn")),
  //   user dashboard routes
  Dashboard: dynamic(() => import("../containers/Dashboard/overview")),
  DashboardReports: dynamic(() => import("../containers/Dashboard/reports")),
  DashboardSettings: dynamic(() => import("../containers/Dashboard/settings")),
  DashboardTimeTracker: dynamic(() =>
    import("../containers/Dashboard/time-tracker")
  ),

  //   admin dash routes
};
