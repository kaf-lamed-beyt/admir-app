import { useRouter } from "next/router";
import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
    userRole: "",
  });
  const router = useRouter();

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
    const userRole = localStorage.setItem("userRole", data.meta);

    setAuthState({
      token,
      userRole,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    router.push("/");
  };

  // // checks if the user is an admin
  // // if yes, they're sent to the admin route
  // const isAdmin = () => {
  //   return authState.userRole === "Manager";
  // };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
