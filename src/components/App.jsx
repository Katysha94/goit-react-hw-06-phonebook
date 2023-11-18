import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, filterContacts } from "redux/contacts/contacts.reducer";
import { getContacts, getFilters } from "redux/contacts/contacts.selectors";


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);


  function handleNewContact(newContact) {
    const existingContact = contacts.find(contact => contact.name === newContact.name);
    if (existingContact) {
      alert(`Contact ${newContact.name} already exists!`);
    } else {
      dispatch(addContact(newContact));
    }

  }

  const handleChange = (evt) => {
    const {value } = evt.target;
    dispatch(filterContacts(value))


  }
   
  const getFilteredContacts = () => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())
    });
    return filterContacts;
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
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

  

  
 
 