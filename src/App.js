import s from './App.module.css';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Form from './components/Form';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from './redux/contacts/operations';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchContactThunk());
  return (
    <div className={s.wrapper}>
      <h1 className={s.pageTitle}>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
