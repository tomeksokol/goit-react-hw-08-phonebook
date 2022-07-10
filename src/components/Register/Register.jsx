import { Box, Button, TextField } from "@mui/material";
import { Loading, Report } from "notiflix";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUsersQuery, useRegisterUserMutation } from "../../utils/api";
import s from "./Register.module.css";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { data } = useGetUsersQuery();

  const checkIfUsernameIsTaken = (name, username, password) => {
    if (data.find((user) => user.username === username)) {
      Report.failure(
        "Username is taken",
        "Please choose other username",
        "Okay"
      );
    } else {
      // console.log("username available");
      registerUser({ name, username, password });
      Loading.hourglass("Registering New User...");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  const onRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;
    checkIfUsernameIsTaken(name, username, password);
    form.reset();
  };

  return (
    <Box
      sx={{
        width: "100vw",
      }}>
      
      <form className={s.form} onSubmit={onRegister}>
        <div className={s.LoginPage}>
        <h2>Register</h2>
          <TextField
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            }}
            variant="filled"
            label="Full Name"
            size="small"
            margin="normal"
            name="name"
            type="text"
            placeholder="Full Name"
            required
            sx={{
              borderBottom: "2px solid",
            }}
          />
          <TextField
            inputProps={{
              pattern: "^[a-z0-9_-]{3,25}$",
              title:
                "Username has to be min. 3, max. 25 characters long, and may contain only lowercase letters, dash and numbers. ",
            }}
            variant="filled"
            label="Username"
            size="small"
            margin="normal"
            name="username"
            type="text"
            placeholder="username"
            required
            sx={{
              borderBottom: "2px solid",
            }}
          />

          <TextField
            inputProps={{
              pattern: "^[a-z0-9_-]{5,25}$",
              title:
                "It's demo version, so password needs only lowercase letters and be min. 5 max. 25 characters long.",
            }}
            variant="filled"
            label="Password"
            size="small"
            margin="normal"
            name="password"
            type="text"
            placeholder="password"
            required
            sx={{
              borderBottom: "2px solid",
            }}
          />
          <br>
          </br>
          <Button variant="contained" type="submit" value="Create new user">
            Create new user
          </Button>
        </div>
      </form>
      <p>
        Already have account? <Link to="/login">Sign In</Link>{" "}
      </p>
    </Box>
  );
};

export default Register;
