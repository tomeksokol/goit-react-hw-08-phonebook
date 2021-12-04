import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-22", name: "hermione kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: "",
    filter: "",
  };

  inputNameID = nanoid();
  inputTelID = nanoid();

  addContact = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  addNumber = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      number: e.target.value,
    }));
  };

  saveContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let arrayOfNames = this.state.contacts.map((arr) => arr.name);
    if (arrayOfNames.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState((state) => ({
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      }));
    }
    form.reset();
  };

  filterName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: e.target.value,
    }));
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <h2>Phonebook</h2>
          <ContactForm
            saveContact={this.saveContact}
            inputNameID={this.inputNameID}
            addContact={this.addContact}
            inputTelID={this.inputTelID}
            addNumber={this.addNumber}
          />
          <h2>Contacts</h2>
          <Filter filterName={this.filterName} />

          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;
