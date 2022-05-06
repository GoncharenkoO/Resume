import Phone from '../ContactsIcons/Pnohe';
import GoogleMail from '../ContactsIcons/GoogleMail';
import GitHubItem from '../ContactsIcons/GitHubItem';
import Linkedin from '../ContactsIcons/Linkedin';
import TeleGram from '../ContactsIcons/TeleGram';
import Portfolio from '../ContactsIcons/Portfolio';
import styles from './contactsSection.module.scss';

export default function Contacts() {
  return (
    <ul className={styles.contactsLict}>
      <li className={styles.contactsItem}>
        <a className={styles.icon} href="tel:380932210158" aria-label="Phone">
          <Phone className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>+38 093 221 01 58</span>
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="mailto:goncharenko86@gmail.com"
          aria-label="Email"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GoogleMail className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>goncharenko86@gmail.com</span>
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://github.com/GoncharenkoO/"
          aria-label="GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubItem className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>GoncharenkoO</span>
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/helga-goncharenko/"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>helga-goncharenko</span>
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://t.me/Himerys"
          aria-label="Telegram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TeleGram className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>OlgaGoncharenko</span>
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://goncharenkoo-portfolio.netlify.app/"
          aria-label="Portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Portfolio className={styles.item} color="#fff" />
          <span className={styles.contactsLink}>goncharenkoo</span>
        </a>
      </li>
    </ul>
  );
}
