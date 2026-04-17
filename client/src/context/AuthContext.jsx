import { createContext, useState, useEffect } from "react";
import { getMe, logoutUser } from "../api/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const fetchUser = async () => {
    try {
      const result = await getMe();
      setUser(result.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      await fetchUser();
    };

    initAuth();
  }, []);

  const setAuthUser = async () => {
    try {
      const result = await getMe();
      setUser(result.data);
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setAuthUser, fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
