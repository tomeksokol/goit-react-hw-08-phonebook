import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { loadFromSessionStorage } from "../../utils/sessionStorage";
import Logout from "../Logout/Logout";

const NavBar = () => {
  const currentUser = useSelector((state) => state.loggedUser);
  const currentUserId = currentUser.id || loadFromSessionStorage("USER")[0];
  const location = useLocation();

  const navLinks =
    currentUser === false &&
    location.pathname !== `/contacts/${currentUserId}` ? (
      <>
        <ButtonGroup sx={{marginTop: "40px"}} variant="contained">
          <Button component={NavLink} to="/">
            Home Page
          </Button>
          <Button component={NavLink} to="/login">
            Sign In
          </Button>
          <Button component={NavLink} to="/register">
            Sign Up
          </Button>
        </ButtonGroup>
      </>
    ) : (
      <>
        <Logout />
      </>
    );

  return <div>{navLinks}</div>;
};

export default NavBar;