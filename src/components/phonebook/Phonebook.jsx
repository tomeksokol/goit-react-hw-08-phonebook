import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";

const Phonebook = () => {
  
  return (
    <div>
      <div className="form-container">
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default Phonebook;
