import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
    userRole: "",
  });

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
    const userRole = localStorage.setItem("userRole", data.meta);

    setAuthState({
      token,
      userRole,
    });
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
