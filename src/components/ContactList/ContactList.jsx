import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

export const ContactList = () => {
  const contactsData = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const getVisibleContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {getVisibleContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};
