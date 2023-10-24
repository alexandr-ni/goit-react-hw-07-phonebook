import { Item, Btn } from './ContactItem.styled';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <FiUser /> {name}: {number}{' '}
      <Btn
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Btn>
    </Item>
  );
};
