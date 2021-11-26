import { createAction } from '@reduxjs/toolkit';
//export const addContact = createAction('contact/add');
// export const deleteContact = createAction('contact/delete');
export const filterContacts = createAction('filter/value');

export const addRequest = createAction('contact/addRequest');
export const addSuccess = createAction('contact/addSuccess');
export const addError = createAction('contact/addError');

export const deleteRequest = createAction('contact/deleteRequest');
export const deleteSuccess = createAction('contact/deleteSuccess');
export const deleteError = createAction('contact/deleteError');

export const fetchRequest = createAction('contact/fetchRequest');
export const fetchSuccess = createAction('contact/fetchSuccess');
export const fetchError = createAction('contact/fetchError');

// Логика ванильного Redux (без Toolkit)

// export const addContact = newContact => ({
//     type: 'contact/add',
//     payload: {
//         name:newContact.name,
//         number:newContact.number,
//        id: uuidv4(),
//     }
// })

// export const deleteContact = id => ({
//     type: 'contact/delete',
//     payload: id,
// })

// export const filterContacts = value => ({
//     type: 'filter/value',
//     payload: value, //нельзя закидывать событие!! сразу результат

// })

// export const getfilteredContacts = (contact) => ({
//     type: 'filter/filterContacts',
//     payload: {
//         name: contact.name,
//         number: contact.number
//     },
// })
