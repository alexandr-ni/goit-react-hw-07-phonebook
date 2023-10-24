import { filterContacts, getFilterValue } from 'redux/filterSlice';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  return (
    <FilterInput
      type="text"
      value={filterValue}
      onChange={evt => {
        dispatch(filterContacts(evt.target.value));
      }}
    />
  );
};
