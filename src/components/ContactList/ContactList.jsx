export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    <p>You have {contacts.length} contacts</p>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name} {number}
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
