import { Loading } from "notiflix";
import React from "react";
import { Link } from "react-router-dom";
//import { useGetUsersQuery } from "../../utils/api";//

const HomePage = () => {
  //const { data } = useGetUsersQuery();//
  Loading.remove(100);

  return (
    <div>
      <p>
        {" "}
        Are You registered? Then{" "}
        <Link to="/login">Sign In</Link>{" "}
      </p>
      <p>
        If not - <Link to="/register">Register a new account</Link>{" "}
      </p>
    </div>
  );
};

export default HomePage;