import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/login";
import Layout from "../src/components/login";
import Unauthorized from "../src/components/unauthorized";
import RequireAuth from "../src/components/requireAuth";
import Test from "../src/components/test";
interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="test" element={<Test />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* <Route element={<RequireAuth />}> */}

        {/* </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
