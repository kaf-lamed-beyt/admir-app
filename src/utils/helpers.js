export const getStaff = () => {
  const staffName = sessionStorage.getItem("staff");
  staffName ? JSON.parse(staffName) : null;
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const setStaffSession = (token, staff) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("staff", JSON.stringify(staff));
};

export const clearStaffSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("staff");
};
