import ContactForm from './FormComponent';
import ContactList from './ContactList';
import Filter from './FilterComponent';
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
