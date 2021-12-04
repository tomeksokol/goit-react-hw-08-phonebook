import React from 'react'

const Filter = ({ filterName }) => {
  return (
    <div>
      <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            onChange={filterName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Input a name"
          />
    </div>
  )
}

export default Filter
