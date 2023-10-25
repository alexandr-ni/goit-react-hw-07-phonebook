import { deleteContact } from 'components/api';
import { Item, Btn } from './ContactItem.styled';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <FiUser /> {name}: {number} <Btn onClick={handleDelete}>Delete</Btn>
    </Item>
  );
};
