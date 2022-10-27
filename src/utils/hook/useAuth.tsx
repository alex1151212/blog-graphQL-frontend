import { useContext } from "react";
import AuthContext, { AuthType } from "../context/authProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuth;
