import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { saveToLocalStorage } from "../../utils/localStorage";

const getAvailableContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(
    (contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter) ||
      contacts.number.includes(filter)
  );
};

const ContactList = () => {
  const contacts = useSelector(({ contacts, filter }) =>
    getAvailableContacts(contacts, filter)
  );
  const dispatch = useDispatch();
  saveToLocalStorage("CONTACTS", contacts);

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              className="del-button"
              onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
