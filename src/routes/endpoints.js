export const authEndpoints = {
  login: "/auth/login",
  verfiy: "/auth/verify/:email/:token",
  resendLink: "/auth/resend-link",
  changePassword: "/auth/change-password",
  //   maybe it's recover password. I don't know for now sha
  recover: "/auth/recover",
  // I also don't know if this one is forgot account or...
  // perharps it is for the admin
  forgot: "/auth/forgot/:email/:token",
  resetPassword: "/auth/reset-password",
  grantUserAccess: "/auth/grant-access/:userId",
};

export const userEndpoints = {
  base: "/user",
  getProfile: "/user/me",
  getStaff: "/user/:id",
};

export const dashboardDataEndpoints = {
  base: "/work-post",
  userWorks: "/work-post/user",
  uniqueWork: "/work-post/:workPostId",
  reports: "/report",
  userReport: "/report/user",
  uniqueStaffReport: "/report/user/:staffId",
  uniqueWorkPost: "/report/work-post/:workPostId",
  uniqueReport: "/report/:reportId",
  uploadReport: "report/upload/:reportId",
  entry: "/entry",
  uniqueEntry: "/entry/:entryId",
};
