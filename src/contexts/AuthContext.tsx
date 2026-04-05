import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("iep_user");
    if (stored) setUser(JSON.parse(stored));
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    if (!email.endsWith("@vitstudent.ac.in")) {
      throw new Error("Only VIT email IDs are allowed");
    }
    // Mock login
    const mockUser: User = { id: crypto.randomUUID(), name: email.split("@")[0], email };
    localStorage.setItem("iep_user", JSON.stringify(mockUser));
    localStorage.setItem("iep_token", "mock-jwt-token");
    setUser(mockUser);
  };

  const signup = async (name: string, email: string, password: string) => {
    if (!email.endsWith("@vitstudent.ac.in")) {
      throw new Error("Only VIT email IDs are allowed");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    const mockUser: User = { id: crypto.randomUUID(), name, email };
    localStorage.setItem("iep_user", JSON.stringify(mockUser));
    localStorage.setItem("iep_token", "mock-jwt-token");
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("iep_user");
    localStorage.removeItem("iep_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
