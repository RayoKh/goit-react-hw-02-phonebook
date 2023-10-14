// import { ContactItem, ListItem } from './ContactList.styled';

// const Contact = ({ contact, onDeleteContact }) => (
//   <ListItem>
//     <ContactItem>
//       {contact.name}: {contact.number}
//     </ContactItem>
//     <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
//   </ListItem>
// );
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);
