import styles from './contactsSection.module.scss';

export default function ContactsSection({ link, text }) {
  return (
    <li className={styles.contactsItem}>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        <span className={styles.contactsLink}>{text}</span>
      </a>
    </li>
  );
}
