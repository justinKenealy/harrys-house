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
    console.log(JSON.stringify(fields))
    const res = await fetch("api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      console.log(data)
      if (res.status !== 200) {
      throw {
        status: res.status,
        message: data.message,
      };
    }
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
      throw new Error(data.message);
    }
    setUser(data);
    setIsLoadingUser(false)
    navigate('/')
  };

  const updatePassword = async (user_id, fields) => {
    const res = await fetch(`api/users/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};
