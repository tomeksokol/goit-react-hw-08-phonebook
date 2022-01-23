import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const inputNameID = nanoid();
  const inputTelID = nanoid();

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const submitForm = (evt) => {
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;
    evt.preventDefault();
    if (contacts.some((contacts) => contacts.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <fieldset>
          <label htmlFor={inputNameID}>Name</label>
          <br />
          <input
            id={inputNameID}
            type="text"
            autoComplete="off"
            name="name"
            placeholder="Contact Name"
            pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <br />
          <label htmlFor={inputTelID}>Number</label>
          <br />
          <input
            id={inputTelID}
            type="tel"
            autoComplete="off"
            name="number"
            placeholder="Phone Number"
            pattern="(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <br />
          <button type="submit">Add contact</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
