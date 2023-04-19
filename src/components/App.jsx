import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout';

export default function App() {
  return (
    <Layout>
      <ContactForm />
      <h3>Contacts :</h3>
      <Filter />
      <ContactList />
    </Layout>
  );
}
