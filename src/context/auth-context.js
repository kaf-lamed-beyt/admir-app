import React from "react";
import axios from "axios";
import { userEndpoints } from "../routes/endpoints";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
    userRole: "",
  });
  // const [currentLoggedInUser, setCurrentLoggedInUser] = React.useState({
  //   fullName: "",
  // });

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
    const userRole = localStorage.setItem("userRole", data.meta);

    setAuthState({
      token,
      userRole,
    });
  };

  // const getCurrentLoggedInUser = ({ fullName }) => {
  //   setCurrentLoggedInUser({
  //     fullName,
  //   });
  // };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        // currentLoggedInUser,
        // setCurrentLoggedInUser: (loggedInUserInfo) =>
        //   getCurrentLoggedInUser(loggedInUserInfo),
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
