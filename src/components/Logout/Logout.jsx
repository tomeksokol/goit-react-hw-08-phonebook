import { Button } from "@mui/material";
import { Loading } from "notiflix";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { saveToSessionStorage } from "../../utils/sessionStorage";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    saveToSessionStorage("USER", []);
    Loading.hourglass("Logout in process...");
    setTimeout(() => {
      navigate(`/`);
      dispatch(userLoggedIn(false));
    }, 1000);
  };
  return (
    <div>
      <Button sx={{ marginTop: "40px" }} variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
