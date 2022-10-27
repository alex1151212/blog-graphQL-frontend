import { createContext, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const initAuthState = {
  email: "",
  name: "",
};
export interface AuthType {
  email: string;
  name: string;
}
export interface AuthContextType {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}
export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<AuthType>(initAuthState);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </ApolloProvider>
  );
};

export default AuthContext;
