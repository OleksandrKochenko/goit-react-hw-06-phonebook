import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.elements.name.value,
      tel: form.elements.tel.value,
    };
    dispatch(addContact(data));
    form.reset();
  };

  return (
    <form
      style={{ border: '1px solid black', padding: '20px', width: '400px' }}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <br />
      <label>
        Phone
        <br />
        <input
          type="tel"
          name="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <br />
      <button
        style={{
          padding: '3px',
          borderRadius: '5px',
          fontWeight: '700',
          cursor: 'pointer',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}
