import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import { api } from "../utils/api";
import { getCookie } from "../utils/helper";

interface IProps {}

const Test: React.FC<IProps> = () => {
  return (
    <div>
      <h1>AUTH TEST PAGE</h1>
    </div>
  );
};

export default Test;
