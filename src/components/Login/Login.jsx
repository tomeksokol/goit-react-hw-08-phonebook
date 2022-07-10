import { Button, TextField } from "@mui/material";
import { Loading, Report } from "notiflix";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { useGetUsersQuery } from "../../utils/api";
import { saveToSessionStorage } from "../../utils/sessionStorage";
import s from "./Login.module.css";
//import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  Loading.remove(300);

  const { data } = useGetUsersQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const loggedUser = data.find(
      (user) => user.username === username && user.password === password
    );

    if (loggedUser === undefined) {
      Report.failure(
        "Invalid user",
        "Please type in correct username and password <br/> Or Register new user",
        "Okay"
      );
    } else {
      dispatch(userLoggedIn(loggedUser));
      saveToSessionStorage("USER", [loggedUser.id, loggedUser.name]);
      Loading.hourglass("Login in process...");
      setTimeout(() => {
        navigate(`/contacts/${loggedUser.id}`);
      }, 1000);
    }
  };


  return (
    <div className={s.LoginPage}>
      <h2>Login</h2>
      <form className={s.form} onSubmit={login}>
        <TextField
          inputProps={{
            pattern: "^[a-z0-9_-]{3,25}$",
          }}
          variant="filled"
          label="Username"
          size="small"
          margin="normal"
          name="username"
          type="text"
          placeholder="username"
          defaultValue={"benny"}
          required
          sx={{
            borderBottom: "2px solid",
          }}
        />

        <TextField
          inputProps={{
            pattern: "^[a-z0-9_-]{5,25}$",
          }}
          variant="filled"
          label="Password"
          size="small"
          margin="normal"
          name="password"
          type="text"
          placeholder="password"
          defaultValue={"hillek"}
          required
          sx={{
            borderBottom: "2px solid",
          }}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <p>
        or <Link to="/register">Sign Up</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
