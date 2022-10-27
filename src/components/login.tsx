import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import useAuth from "../utils/hook/useAuth";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login] = useMutation(api.mutation.login);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    if (token && !loading) {
      document.cookie = `access_token=${token};`;
      navigate("/authorized");
    }
    if (error) console.log(error);

    //eslint-disable-next-line
  }, [token, loading]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    login({ variables: { email: email, password: password } })
      .then((data) => {
        setToken(data.data?.login.token);
        setAuth({ name: data.data?.login.name, email: data.data?.login.email });
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
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
