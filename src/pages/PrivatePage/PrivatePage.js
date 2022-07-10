import React, { useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { Filter } from "../../components/filter/Filter";
import { ContactList } from "../../components/contactList/ContactList";
import { useSelector } from "react-redux";
import { Loading } from "notiflix";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "../../utils/sessionStorage";
import { useLocation, useNavigate } from "react-router";

const PrivatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  Loading.remove(100);
  const loggedUserId = loadFromSessionStorage("USER")[0];
  const loggedUserName =
    useSelector((state) => state.loggedUser.name) ||
    loadFromSessionStorage("USER")[1];
  useEffect(() => {
    if (location.pathname !== `/contacts/${loggedUserId}`) {
      navigate("/");
      saveToSessionStorage("USER", []);
    }
  }, [location.pathname, loggedUserId, navigate]);

  return (
    <div>
      <div className="form-container">
        <h2>Add new Contact</h2>
        <ContactForm />
        <Filter />
        <h2>{loggedUserName}'s Contacts:</h2>
        <ContactList />
      </div>
    </div>
  );
};

export default PrivatePage;
