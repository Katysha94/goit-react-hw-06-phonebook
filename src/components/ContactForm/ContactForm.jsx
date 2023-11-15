import css from './ContactForm.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid'


export const ContactForm = ({newContact}) => {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleSubmit = (evt) => {
        evt.preventDefault();
        const addContact = {
            id: nanoid(),
            name,
            number,
        }
      newContact(addContact);
      
      const form = evt.currentTarget;
      form.reset();
      setName('');
      setNumber('');
    }

    const handleNameChange = (evt) => {
        const {value} = evt.target;
      setName(value);
      
    }

    const handleNumberChange = (evt) => {
        const {value} = evt.target;
      setNumber(value);
      
    }

        return (
          <div>
        <form 
        className={css.contactForm}
        onSubmit={handleSubmit}>
        <label
        className={css.contactFormLabel}
        htmlFor="name">Name</label>
          <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
         <label
        className={css.contactFormLabel}
        htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          className={css.contactFormInput}
          id="number"
          value={number}
          onChange={handleNumberChange}
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
          required
        />
        <button type="submit" className={css.contactFormBtn}>
          Add contact
        </button>
      </form>
         </div>   
        )
    }

