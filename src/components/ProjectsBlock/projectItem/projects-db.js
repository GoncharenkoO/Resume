import qaTest from '../../../images/screenshots/proTest.png';
import filmoteka from '../../../images/screenshots/filmoteka.png';
import donutMasterclass from '../../../images/screenshots/donutMasterclass.png';

export const teamProjects = [
  {
    id: 1,
    title: 'Pro Test for a QA Engineer',
    url: 'https://qa-team-project.netlify.app/auth',
    screenshot: qaTest,
    description: 'section contacts of our team (role: developer)',
    stack: 'React.js, Redux, AXIOS, HTML5, SCSS, JavaScript, Figma, Trello',
  },
  {
    id: 2,
    title: 'Filmoteka',
    url: 'https://webstudioflip.github.io/filmoteka-js/',
    screenshot: filmoteka,
    description: 'modal window section and styles (role: developer)',
    stack: 'HTML5, SCSS, Handlebars, JavaScript, REST API, AJAX, Figma, Trello',
  },
  {
    id: 3,
    title: 'Donut Masterclass',
    url: 'https://goncharenkoo.github.io/minions/',
    screenshot: donutMasterclass,
    description: 'section reviews slider (role: developer)',
    stack: 'HTML5, SCSS, JavaScript, Parcel, Figma, Trello',
  },
];
