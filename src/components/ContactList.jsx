import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filtredContacts.map(item => {
        return (
          <li key={item.id}>
            <ContactItem contact={item} />
          </li>
        );
      })}
    </ul>
  );
}
