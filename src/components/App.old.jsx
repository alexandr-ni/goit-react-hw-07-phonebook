// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Layout } from './Layout';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       this.setState({
//         contacts: JSON.parse(savedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     function checkContact(contacts, newcontact) {
//       for (const contact of contacts) {
//         if (contact.name.toLowerCase() === newcontact.name.toLowerCase()) {
//           alert(`${newcontact.name} is already in contacts.`);
//           return true;
//         }
//       }
//     }

//     if (checkContact(this.state.contacts, newContact) === undefined) {
//       this.setState(prevState => ({
//         contacts: [
//           ...prevState.contacts,
//           {
//             id: nanoid(),
//             ...newContact,
//           },
//         ],
//       }));
//     }
//     return;
//   };

//   changeFilter = newFilter => {
//     this.setState({
//       filter: newFilter,
//     });
//   };

//   getVisibleContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Layout>
//         <h1>Phonebook</h1>

//         <ContactForm onAdd={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter
//           filterData={this.state.filter}
//           onChangeFilter={this.changeFilter}
//         />
//         <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
//       </Layout>
//     );
//   }
// }
