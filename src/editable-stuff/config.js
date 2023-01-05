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
    "Hi! I'm Valerie, an energetic software engineer who loves learning and dabbling in everything. I have 15 years of experience in science and technical fields. I love creating beautiful websites and applications that help solve problems and increase efficiency and productivity.",
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
    livePreview: 'https://campuscatalog.onrender.com/',
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

const testimonials = [
  {
    name: 'Elizabeth Cooper',
    imageUrl:
      'https://i.etsystatic.com/iusa/e6a3d2/52240878/iusa_400x400.52240878_9g3b.jpg?version=0',
    text: "Amazing to work with, and absolutely stunning end result! I couldn't be happier. :)",
    rating: 5,
  },
  {
    name: 'Christine',
    imageUrl:
      'https://scontent.fcha1-1.fna.fbcdn.net/v/t39.30808-1/300582957_192422289825269_616634276348390959_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=c6021c&_nc_ohc=vAgyNR36LBMAX8mjMP0&_nc_ht=scontent.fcha1-1.fna&oh=00_AfD5ydJkJ1am0g0Gz4_--mxCSXPPOx64diKhMV7vY7vLWQ&oe=63B8FE88',
    text: "Valerie has done excellent work! It's been a pleasure working with her and I highly recommend her for website help. Everything was done quickly and completely, and she has explained things in simple terms that even I can understand. :) Highly recommend!",
    rating: 5,
  },
  {
    name: 'Gail Welter',
    imageUrl:
      'https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg',
    text: "Valerie and her team were just wonderful to work with. Attentive and prompt, insightful, patient and determined to meet her customers needs and expectations. This was a delightful, easy and successful process. I'd work with Instant Entity again and recommend Valerie highly.",
    rating: 5,
  },
  {
    name: 'Sue',
    imageUrl:
      'https://i.etsystatic.com/756715564/r/il/4828c8/756715564/il_170x135.756715564_5b6b.jpg',
    text: "I can't say enough about how professional and talented Valerie is. She handled my complex project with skill and was incredibly patient and thorough through all of its roadblocks. I've worked with tech professionals before and had some disappointing experiences with their interpersonal skills. Not so with Valerie--she is an excellent communicator and an expert designer. Thank you to Valerie for surpassing my expectations!",
    rating: 5,
  },
  {
    name: 'Nicole',
    imageUrl:
      'https://i.etsystatic.com/iap/088899/921400887/iap_300x300.921400887_1wsy9n16.jpg?version=0',
    text: "Let me just start off by saying that Valerie and her team are simply amazing! I can't even begin to describe my project without extreme joy. Valerie was always very attentive and reassuring, regardless of how many times I wanted to change something or if I had a concern. She always addressed everything and made sure that I was always completely satisfied. I'm so happy that my custom website design is done and am in absolute love with it! I'll definitely be using Valerie for all my website needs! I'd highly recommend her! Thank you so much for your hard work!!!!!!",
    rating: 5,
  },
  {
    name: 'Jada Johnson',
    imageUrl:
      'https://i.etsystatic.com/iusa/ef5886/20842785/iusa_400x400.20842785_ptk1.jpg?version=0',
    text: "Valerie is great! She's done everything for me from website redesign to troubleshooting and fixing issues. She's knowledgeable, helpful and delivers a quality product every time. And I come back every time I have an issue with my website or need a change. Thanks Valerie!",
    rating: 5,
  },
  {
    name: 'Tanvi',
    imageUrl:
      'https://i.etsystatic.com/iusa/d99591/84550055/iusa_400x400.84550055_3yg1.jpg?version=0',
    text: 'Valerie has been a dream to work with. She is prompt, patient and professional. She took time to answer all my questions, incorporated my feedback into the design. I am in love with my website and it is all thanks to her. I cannot recommend her enough. You need to work with her. She is the best.',
    rating: 5,
  },
  {
    name: 'Laura Drayton',
    imageUrl:
      'https://i.etsystatic.com/iusa/7629f1/34525255/iusa_400x400.34525255_5w0m.jpg?version=0',
    text: "I loved working with Valerie! She's great at communicating, and was able to help me achieve exactly what I wanted!",
    rating: 5,
  },
  {
    name: 'Amber L',
    imageUrl:
      'https://i.etsystatic.com/674017594/r/il/6e93d4/674017594/il_170x135.674017594_m3u2.jpg',
    text: "Valerie is Amazing at her work and I am beyond glad that I found her! She seems to be an expert at wordpress. (And a great graphic designer..which I used her for as well!) Best wordpress programmer I've found! She gives 110%. She keeps in good communication with you and is very organized and thorough with each project. I'm extremely happy with her work!!",
    rating: 5,
  },
];

export {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  experiences,
  projects,
  skills,
  testimonials,
};
