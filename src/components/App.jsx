import { useEffect } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsStore.contacts);
  const filter = useSelector((state) => state.contactsStore.filter);

 
  
  // useEffect(() => {
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts)
  
  //   if (contacts) {
  //     setContacts(parsedContacts)
  //   } 
  // }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
 

  function handleNewContact(newContact) {
    const existingContact = contacts.find(contact => contact.name === newContact.name);
    if (existingContact) {
      alert(`Contact ${newContact.name} already exists!`);
    } else {
      const addContactAction = {
        type: 'contacts/addContacts',
        payload: newContact,
      };
      dispatch(addContactAction);
    }

  }

  const handleChange = (evt) => {
    const {value } = evt.target;
    const filterAction = {
      type: 'contacts/filterContacts',
      payload: value,
    }
    dispatch(filterAction)


  }
   
  const getFilteredContacts = () => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())
    });
    return filterContacts;
  }

  const handleDelete = (id) => {
    const deleteContactAction = {
      type: 'contacts/deleteContacts',
      payload: id,
    }
    dispatch(deleteContactAction)
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

  

  
 
 