import './App.css';

import { useEffect, useState } from 'react';

import { ContactDetails } from './types/ContactDetails';

function App() {
  const [contactList, setContactList] = useState<ContactDetails[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContactList(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='App'>
      <h1>
        <b>Available contact details</b>
      </h1>
      <table className='ContactTable'>
        <tr>
          <th id='name'>Name</th>
          <th id='email'>Email Address</th>
          <th id='phone'>Phone Number</th>
          <th id='company'>Company Name</th>
          <th id='website'>Website</th>
          <th id='city'>Located City </th>
        </tr>
        {contactList.map((contact) => (
          <tr key={contact.id}>
            <td id='name'>{contact.name}</td>
            <td id='email'>{contact.email}</td>
            <td id='phone'>{contact.phone}</td>
            <td id='company'>{contact.company.name}</td>
            <td id='website'>{contact.website}</td>
            <td id='city'>{contact.address.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
