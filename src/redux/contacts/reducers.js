import contactsData from '../../contacts.json';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addContact,
  addRequest,
  addSuccess,
  addError,
  // deleteContact,
  filterContacts,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './action';
// import {fetchContact} from './operations'
const initState = contactsData;

export const items = createReducer(initState, {
  [fetchSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) =>
    state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [deleteSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  // [fetchContact.pending]: () => true,
  // [fetchContact.fulfilled]: () => false,
  // [fetchContact.rejected]: () => false,

  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,

  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,

  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
});

// Логика ванильного Redux (без Toolkit)

// export const items = (state = initState, {type, payload}) => {
//     switch (type) {
//         case 'addContact':
//             return {
//                 // ...state.contacts,
//                 items: [...state, payload]
//             };
//         case 'deleteContact':
//             return {
//                 // ...state.contacts,
//                 items: state.filter((contact) => contact.id !== payload.id)
//             };
//         // case 'getfilteredContacts':
//         //     return state.filter((contact) =>
//         //         contact.name.toLowerCase().includes(filter.payload.toLowerCase()));

//         default:
//             return state;
//     }
// }
// export const filter = (state = '', {payload}) => {
//     return payload
// }
