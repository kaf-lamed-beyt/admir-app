const baseURL = `https://admir-service.herokuapp.com/api/v1`;

export const authEndpoints = {
  login: `${baseURL}/auth/login`,
  verfiy: `${baseURL}/auth/verify/:email/:token`,
  resendLink: `${baseURL}/auth/resend-link`,
  changePassword: `${baseURL}/auth/change-password`,
  //   maybe it's recover password. I don't know for now sha
  recover: `${baseURL}/auth/recover`,
  // I also don't know if this one is forgot account or...
  // perharps it is for the admin
  forgot: `${baseURL}/auth/forgot/:email/:token`,
  resetPassword: `${baseURL}/auth/reset-password`,
};

export const userEndpoints = {
  createUser: `${baseURL}/user`,
  getCurrentUser: `${baseURL}/user/me`,
  getStaffByAdmin: `${baseURL}/user/:id`,
  grantUserAccess: `${baseURL}/user/grant-access/:userId`,
};

export const dashboardDataEndpoints = {
  base: `${baseURL}/work-post`,
  userWorks: `${baseURL}/work-post/user`,
  uniqueWork: `${baseURL}/work-post/:workPostId`,
  reports: `${baseURL}/report`,
  userReport: `${baseURL}/report/user`,
  uniqueStaffReport: `${baseURL}/report/user/:staffId`,
  uniqueWorkPost: `${baseURL}/report/work-post/:workPostId`,
  uniqueReport: `${baseURL}/report/:reportId`,
  uploadReport: `report/upload/:reportId`,
  entry: `${baseURL}/entry`,
  uniqueEntry: `${baseURL}/entry/:entryId`,
  userRecord: `${baseURL}/record/user`,
  uniqueRecord: `${baseURL}/record/:recordId`,
  records: `${baseURL}/record`,
  clockIn: `${baseURL}/record/clock-in`,
  clockOut: `${baseURL}/record/clock-out/:recordId`,
};
