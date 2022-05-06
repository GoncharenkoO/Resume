import movies from '../../../images/screenshots/movies.png';
import phonebook from '../../../images/screenshots/phonebook.png';
import images from '../../../images/screenshots/images.png';
import webstudio from '../../../images/screenshots/webstudio.png';
import helsocial from '../../../images/screenshots/helsocial.png';

export const ownProjects = [
  {
    id: 1,
    title: 'Phonebook',
    url: 'https://goncharenkoo-react-js-phonebook-08.netlify.app/',
    screenshot: phonebook,
    description: 'app for working with private collections of contacts',
    stack:
      'React, REST API, AJAX, HTML5, CSS3, JavaScripvt, Material-UI, Netlify',
  },
  {
    id: 2,
    title: 'MoviesFinder',
    url: 'https://goncharenkoo-react-js-movies.netlify.app/',
    screenshot: movies,
    description:
      'movie finder app with actors details and reviews and movie comments',
    stack: 'React, Redux, REST API, AJAX, HTML5, CSS3, JavaScripvt, Netlify',
  },
  {
    id: 3,
    title: 'ImagesFinder',
    url: 'https://goncharenkoo.github.io/goit-react-hw-04-images/',
    screenshot: images,
    description: 'images and photos search app',
    stack: 'React, REST API, AJAX, Axios, HTML5, CSS3, JavaScripvt',
  },
  {
    id: 4,
    title: 'Helsocial',
    url: 'https://goncharenkoo.github.io/React-social-media/',
    screenshot: helsocial,
    description: 'app for a helsocial',
    stack: 'HTML5, SCSS, JavaScripvt',
  },
  {
    id: 5,
    title: 'WebStudio',
    url: 'https://goncharenkoo.github.io/goit-markup-hw-08/',
    screenshot: webstudio,
    description: 'app for a web studio',
    stack: 'HTML5, SCSS, JavaScripvt, BEM',
  },
];
