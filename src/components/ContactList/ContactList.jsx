//import PropTypes from 'prop-types';
import { List, ListTitle } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => (
  <>
    <ListTitle>You have {contacts.length} contacts</ListTitle>
    <List>{ContactListItem}</List>
  </>
);

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <List>
//     <ListTitle>You have {contacts.length} contacts</ListTitle>
//     {contacts.map(({ id, name, number }) => (
//       <ListItem key={id}>
//         {name} {number}
//         <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
//           Delete
//         </ButtonDelete>
//       </ListItem>
//     ))}
//   </List>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
