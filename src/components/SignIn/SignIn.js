import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Loading, Report } from "notiflix";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { useGetUsersQuery } from "../../utils/api";
import { saveToSessionStorage } from "../../utils/sessionStorage";
//import s from "./Login.module.css";

const theme = createTheme();

export default function SignIn() {

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="login"
              name="login"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <p>
        or <Link to="/register">Sign Up</Link>{" "}
      </p>
      </Container>
    </ThemeProvider>
  );
}