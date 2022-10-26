import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { data, loading, error }] = useMutation(api.mutation.login);

  const navigate = useNavigate();

  useEffect(() => {
    if (data && loading) document.cookie = `access_token=${data.login.token};`;
    if (error) console.log(error);
  }, [data, loading, error]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ variables: { email: email, password: password } }).then(() =>
      console.log("111")
    );
    navigate("/test");
  };

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
