import styles from './techSkillsBlock.module.scss';
import ChekItem from './TechSkillsIcon/ChekItem';
import GitItem from './TechSkillsIcon/GitItem';
import CssItem from './TechSkillsIcon/CssItem';
import HtmlItem from './TechSkillsIcon/HtmlItem';
import JsItem from './TechSkillsIcon/JsItem';
import ReactItem from './TechSkillsIcon/ReactItem';
import ReduxItem from './TechSkillsIcon/ReduxItem';
import HandleItem from './TechSkillsIcon/HandleItem';
import GithubItem from './TechSkillsIcon/GithubItem';
import NodeItem from './TechSkillsIcon/NodeItem';

export default function TechSkillsBlock() {
  return (
    <ul className={styles.techSkillsList}>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>GIT</p>
        <GitItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>CSS3</p>
        <CssItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>HTML5</p>
        <HtmlItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>JavaScript</p>
        <JsItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>React.js</p>
        <ReactItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>Redux</p>
        <ReduxItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>Handlebars</p>
        <HandleItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>Github</p>
        <GithubItem />
      </li>
      <li className={styles.techSkillsBlock}>
        <ChekItem className={styles.chekIcon} />
        <p className={styles.techSkills}>Node.js</p>
        <NodeItem />
      </li>
    </ul>
  );
}
