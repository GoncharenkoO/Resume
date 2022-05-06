import ContactsSection from './ContactsSection';
import styles from './contacts.module.scss';

export default function Contacts() {
  return (
    <div className={styles.contactsSection}>
      <h3 className={styles.contactsTitle}>Contacts</h3>
      <ContactsSection />
    </div>
  );
}
