import PropTypes from 'prop-types';
import ContactsSection from './ContactsSection';
import { contactsItems } from './ContactsSection/contactsItem';
import styles from './contacts.module.scss';

export default function Contacts() {
  const elements = contactsItems.map(({ id, link, text }) => (
    <ContactsSection key={id} link={link} text={text} />
  ));
  return (
    <div className={styles.contactsSection}>
      <h3 className={styles.contactsTitle}>Contacts</h3>
      <ul className={styles.contactsLict}>{elements}</ul>
    </div>
  );
}

Contacts.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};
