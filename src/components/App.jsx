import ContactForm from './form';
import ContactList from './contact_list';
import Filter from './filter';
import { Layout } from './Layout';

export default function App() {
  return (
    <Layout>
      <ContactForm />
      <h3>Contacts:</h3>
      <Filter />
      <ContactList />
    </Layout>
  );
}
