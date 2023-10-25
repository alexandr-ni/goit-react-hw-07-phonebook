import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
 
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.phone}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};
