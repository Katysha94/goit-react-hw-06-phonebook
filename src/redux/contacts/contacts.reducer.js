import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
    filter: '',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
        state.contacts = state.contacts.filter(contact => contact.id !== payload);
      },
      filterContacts(state, { payload }) {
        state.filter = payload
    }
  },
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;










// const initialState = {
//     contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
//     filter: '',
// }

// export const contactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "contacts/addContacts": {
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             }

//         }
//         case "contacts/deleteContacts": {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload)
//             }
//         } case "contacts/filterContacts": {
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         }
//         default:
//         return state
// }
//     }
    