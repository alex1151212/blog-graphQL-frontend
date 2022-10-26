import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import { api } from "../utils/api";
import { getCookie } from "../utils/helper";

interface IProps {}

const RequireAuth: React.FC<IProps> = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const accessToken = getCookie(document.cookie, "access_token");

  useEffect(() => {
    console.log(accessToken);
  }, []);

  return accessToken ? <Outlet /> : <Navigate to="login" />;
};

export default RequireAuth;
// test1@test.com
