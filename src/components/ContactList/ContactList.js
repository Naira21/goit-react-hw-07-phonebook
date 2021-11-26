import ContactElement from './ContactElement';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/action';
import { deleteContactOperation } from '../../redux/contacts/operations';
import { filteredContacts } from '../../redux/contacts/selectors';
function ContactList() {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  return (
    <ol className={s.list}>
      {contacts.map(contact => (
        <ContactElement
          contact={contact}
          onDeleteContact={() => dispatch(deleteContactOperation(contact.id))}
          key={contact.id}
        />
      ))}
    </ol>
  );
}

export default ContactList;
ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

// Логика ванильного Redux (без Toolkit)

// const mapStateToProps = (state) => {
//   const filteredContacts = state.items.filter((contact) =>
//     contact.name.toLowerCase().includes(state.filter.value.toLowerCase()) // or state.filter.toLowerCase()
//   )
//   return {
//     contacts: filteredContacts,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact(id))
//   }
// };

//export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
