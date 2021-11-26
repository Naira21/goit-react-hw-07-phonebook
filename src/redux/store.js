import { configureStore } from '@reduxjs/toolkit';
import { items, filter, loading } from './contacts/reducers';
import { combineReducers } from 'redux';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const contactReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: contactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
