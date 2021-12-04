import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-22", name: "hermione kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    contacts: this.props.contacts,
    name: this.props.name,
  }
 
  inputID = nanoid();

  addContact = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }))
  }

  saveContact = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      contacts: [...state.contacts, {name: this.state.name, id: nanoid()}],
    }))
    console.log(this.state.contacts);

  }

  render() {
    return (
      <div>
        <div className="form-container">
          <h2>Phonebook</h2>
          <form onSubmit={this.saveContact}>
          <fieldset>
            <label htmlFor={this.inputID}>Name</label>
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.addContact}
              id={this.inputID}
            />
            <br />
            <button type="submit">Add contact</button>
          </fieldset>
          </form>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Form;
