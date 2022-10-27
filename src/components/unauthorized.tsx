import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/hook/useAuth";
interface IProps {}

const Unauthorized: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { auth } = useAuth();
  return (
    <div>
      <h1>Unauthorized</h1>
      <button onClick={goBack}></button>
    </div>
  );
};

export default Unauthorized;
