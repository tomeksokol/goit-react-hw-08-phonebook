import React from "react";
import { usePostContactMutation } from "../../utils/api";

const ContactForm = () => {
  const [submitForm] = usePostContactMutation();

  return (
    <div>
      <form
        onSubmit={(e) => {
          const form = e.target;
          const name = form.name.value;
          const phone = form.number.value;
          e.preventDefault();
          form.reset();
          return submitForm({ name, phone });
        }}>
        <fieldset>
          <label>Name</label>
          <br />
          <input
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
          <label>Number</label>
          <br />
          <input
            type="tel"
            autoComplete="off"
            name="number"
            placeholder="Phone Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
