import { useState, useEffect } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';


export const  App = () =>  {

  const [contacts, setContacts] = useState(() => 
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
  
    if (parsedContacts) {
      setContacts(parsedContacts)
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
 

  const handleNewContact = (newContact) => {
   const existingContact = contacts.find(contact => contact.name === newContact.name);
    if (existingContact) {
      alert(`Contact ${newContact.name} already exists!`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    } 
   
  }

  const handleChange = (evt) => {
    const {value } = evt.target;
    setFilter(value);


  }
   
  const getFilteredContacts = () => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())
    });
    return filterContacts;
  }

  const handleDelete = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id
    ))

  }

     return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient( 45deg, #8cc8e6, #f1f389)'
      }}
       >
         <Section
         title="Phonebook"
         />
         <ContactForm
           newContact={handleNewContact}
         />
         <Section
         title="Contacts"
         />
         <FilterContact
           filter={filter}
           handleChange={handleChange}
         />
         <ContactList
           contacts={getFilteredContacts()}
           handleDelete={handleDelete} />
    </div>
  );

  }

  

  
 
 