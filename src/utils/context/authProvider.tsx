import { createContext, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api";
const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthContext;
