import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-22", name: "hermione kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: '',
    filter: '',
  }
 
  inputNameID = nanoid();
  inputTelID = nanoid();

  addContact = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }))
  }

  addNumber = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      number: e.target.value,
    }))
  }

  saveContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    this.setState((state) => ({
      contacts: [...state.contacts, {id: nanoid(), name: this.state.name, number: this.state.number }],
    }))
    console.log(this.state.contacts);
    form.reset();
  }

  filterName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: e.target.value,
    }))
    console.log(this.state.filter);
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <h2>Phonebook</h2>
          <form onSubmit={this.saveContact}>
          <fieldset>
            <label htmlFor={this.inputNameID}>Name</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.addContact}
              id={this.inputNameID}
            />
            <br />
            <br />
            <label htmlFor={this.inputTelID}>Number</label>
            <br />
            <input
              type="tel"
              autoComplete="off"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.addNumber}
              id={this.inputTelID}
            />
            <br />
            <br />
            <button type="submit">Add contact</button>
          </fieldset>
          </form>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input type="text" name="filter" onChange={this.filterName} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Input a name"/>
          <ul>
            {this.state.filter === ""
            ? this.state.contacts.map(({ id, name, number }) => (
                <li key={id}>{name}: {number}</li>
              ))
            :  this.state.contacts.filter(({ name }) => name.toLowerCase().includes((this.state.filter).toLowerCase())).map(({ id, name, number }) => (
              <li key={id}>{name}: {number}</li>
            ))
           } 
          </ul>
        </div>
      </div>
    )
  }
}

export default Form;
