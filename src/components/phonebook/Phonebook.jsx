import React, {useState, useEffect} from 'react'
import { nanoid } from "nanoid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";

const Phonebook = () => {

  //states

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem("phoneContacts")) ?? []);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  

 const inputNameID = nanoid();
 const inputTelID = nanoid();

 
  const addContact = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const addNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };


  const saveContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let arrayOfNames = contacts.map((arr) => arr.name);
    if (arrayOfNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
    }
    form.reset();
  };

  const filterName = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const deleteContact = (idNumber) => {
    setContacts(contacts.filter(({ id }) => id !== idNumber));
  };

  useEffect(() => {
    window.localStorage.setItem("phoneContacts", JSON.stringify(contacts));
  }, [contacts])


    return (
      <div>
        <div className="form-container">
          <h2>Phonebook</h2>
          <ContactForm
            saveContact={saveContact}
            inputNameID={inputNameID}
            addContact={addContact}
            inputTelID={inputTelID}
            addNumber={addNumber}
          />
          <h2>Contacts</h2>
          <Filter filterName={filterName} />

          <ContactList
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    );
  }

export default Phonebook;
