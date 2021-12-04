import React from 'react'

const ContactList = ({ filter, contacts }) => {
  return (
    <div>
      <ul>
          {filter === ""
            ? contacts.map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))
            : contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))}
        </ul>
    </div>
  )
}

export default ContactList
