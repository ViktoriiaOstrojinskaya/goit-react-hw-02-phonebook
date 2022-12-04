//import PropTypes from 'prop-types';
import { ListItem, ButtonDelete } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        {name} {number}
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonDelete>
      </ListItem>
    ))}
  </>
);

// ContactListItem.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
