/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  userRole: string | null;
  setUserRole: (role: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(localStorage.getItem("userRole") || null);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
