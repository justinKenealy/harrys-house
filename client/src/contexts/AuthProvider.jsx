import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  const [isLoadingUser, setIsLoadingUser] = useState(true)

  useEffect(() => {
    const loginCheck = async () => {
      const res = await fetch("api/session");
      const user = await res.json();
      if (res.status === 200) setUser(user);
    };
    setIsLoadingUser(true);
    loginCheck();
    setIsLoadingUser(false);
  }, []);

  const logout = async () => {
    const res = await fetch("api/session", {
      method: "DELETE",
    });
    setUser(null)
  };

  const register = async (fields) => {
    const res = await fetch("api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
  };

  const login = async (fields) => {
    setIsLoadingUser(true)
    const res = await fetch("api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    const data = await res.json();
    if (res.status !== 200) {
      throw {
        status: res.status,
        message: data.message,
      };
    }
    setUser(data);
    setIsLoadingUser(false)
    navigate('/')
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
