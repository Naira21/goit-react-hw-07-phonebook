import axios from 'axios';
// import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addError,
  addRequest,
  addSuccess,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchError,
  fetchRequest,
  fetchSuccess,
} from './action';

axios.defaults.baseURL = 'https://619bf11168ebaa001753c6e3.mockapi.io/api/v1';

export const fetchContact = () => dispatch => {
  dispatch(fetchRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

//     createAsyncThunk(
//     'contacts/allContacts',
//     async (newContact) => {
//         try {
//         const {data} = await axios.get('/contacts', newContact); // возможно newContact не нужен, post instead of get
//         return data;  //payload on Success
//         } catch (error) {
//             alert(error);
//             return;
//         }
//     }

// )

export const addContactOperation = newContact => async dispatch => {
  dispatch(addRequest());
  try {
    const { data } = await axios.post('/contacts', newContact); // возможно newContact не нужен
    dispatch(addSuccess(data));
  } catch (error) {
    dispatch(addError(error));
  }

  // axios
  //     .get('/contacts', newContact)
  //     .then(({ data }) => dispatch(addSuccess(data)))
  //     .catch(err => dispatch(addError(err)))
};

export const deleteContactOperation = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = axios.delete(`/contacts/${id}`);
    dispatch(deleteSuccess(id));
  } catch (error) {
    dispatch(deleteError(error));
  }

  // try {
  //     const response = await axios.delete(`/contacts/${id}`);
  //     dispatch(deleteSuccess(response));

  //    axios
  //         .delete(`/contacts/${id}`)
  //         .then(() => dispatch(deleteSuccess(id)))
  //         .catch(err => dispatch(deleteError(err)))
};
