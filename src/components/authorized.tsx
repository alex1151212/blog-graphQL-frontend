import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/hook/useAuth";
interface IProps {}

const Authorized: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { auth } = useAuth();
  useEffect(() => {
    console.log(auth);
  }, []);
  return (
    <div>
      <h1>{auth.email}</h1>
      <button onClick={goBack}></button>
    </div>
  );
};

export default Authorized;
