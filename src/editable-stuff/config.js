// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Valerie',
  middleName: '',
  lastName: 'Jones',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/vljones133',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/valeriejones133',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/profile-pic.png'),
  imageSize: 290,
  message:
    "Hi! I'm Valerie, a highly-energetic software engineer who loves learning and dabbling in everything. I have 15 years of experience in science and technical fields. Creating beautiful websites and applications that help solve problems and increase efficiency and productivity are my favorite.",
  resume: 'https://www.cakeresume.com/valerie-jones',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'vljones133', //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ['Team-Easily/Easily-v2', 'CampusCatalog'],
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Easily',
    mockup: require('../assets/img/Easily-mockup.jpg'),
    description:
      'A mobile Personal Assistant app that brings together everything you need to stay organized, plan ahead, and prepare for your day.',
    stack: [
      'React',
      'React Native',
      'Expo',
      'Firebase',
      'Google Mail API',
      'Google Calendar API',
      'OpenWeather API',
      'React Native Paper',
      'Redux Toolkit',
    ],
    sourceCode: 'https://github.com/Team-Easily/Easily-v2',
    livePreview: 'https://youtu.be/l552ZBV1kRQ',
  },
  {
    name: 'Ready to Roomba',
    mockup: require('../assets/img/Ready-to-Roomba-mockup.jpeg'),
    description:
      'A mock e-commerce site where users can browse a selection of robotic vacuums, add to their cart, and checkout their selected products.',
    stack: [
      'Node.js',
      'React',
      'Redux',
      'Express',
      'PostgreSQL',
      'Bootstrap',
      'Stripe API',
      'Heroku',
    ],
    sourceCode: 'https://github.com/Team-Wall-E/Ready-To-Roomba',
    livePreview: 'https://ready-to-roomba.onrender.com',
  },
  {
    name: 'Campus Catalog',
    mockup: require('../assets/img/Campus-catalog.png'),
    description:
      'Campus and student catalog to create, read, update, and delete campuses and students.',
    stack: [
      'Node.js',
      'Express',
      'React',
      'Redux',
      'Express',
      'Axios',
      'PostgreSQL',
      'Bootstrap',
      'Webpack',
      'Bootstrap',
    ],
    sourceCode: 'https://github.com/vljones133/CampusCatalog',
    livePreview: 'https://campus-catalog.herokuapp.com/',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React Native',
  'Redux',
  'Express',
  'PostgreSQL',
  'Firebase',
  'Bootstrap',
  'React Native Paper',
  'Git',
  'VSCode',
];

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for Full Stack Software Engineering opportunities. If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",
  email: 'vljones133@gmail.com',
};

const experiences = {
  show: true,
  heading: 'Experience',
  data: [
    {
      role: 'Software Engineer Student', // Here Add Company Name
      companylogo: require('../assets/img/grace-hopper-logo.png'),
      date: 'June 2022 – Sept 2022',
    },
    {
      role: 'Lead Designer and Project Manager',
      companylogo: require('../assets/img/instant-entity-logo.png'),
      date: 'Jan 2014 – May 2017',
    },
    {
      role: 'Junior Developer',
      companylogo: require('../assets/img/accucode-logo.png'),
      date: 'Jan 2013 – Oct 2013',
    },
    {
      role: 'Space Weather Forecaster',
      companylogo: require('../assets/img/noaa_emblem_logo-2022.png'),
      date: 'June 2013 – Jan 2013',
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  experiences,
  projects,
  skills,
};
