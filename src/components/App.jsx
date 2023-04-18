import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
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
