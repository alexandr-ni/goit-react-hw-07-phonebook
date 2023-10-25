import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BtnWrapper,
  ErrorMsg,
  FormBtn,
  FormField,
  Label,
  StyledForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsSlice';
import { addContact } from 'components/api';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector(selectContacts);

  return (
    <div>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          const checkContact = () => {
            for (const contact of contactsData) {
              if (contact.name.toLowerCase() === values.name.toLowerCase()) {
                alert(`${values.name} is already in contacts.`);
                return true;
              }
            }
          };

          if (checkContact() === undefined) {
            dispatch(addContact(values));
            actions.resetForm();
          }
          return;
        }}
      >
        <StyledForm>
          <Label>
            Name
            <FormField name="name" type="text" required />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <FormField name="phone" type="tel" required />
            <ErrorMsg name="phone" component="div" />
          </Label>
          <BtnWrapper>
            <FormBtn type="submit">Add contact</FormBtn>
          </BtnWrapper>
        </StyledForm>
      </Formik>
    </div>
  );
};
