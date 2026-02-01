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
  message: ' Passionate about efficiency. ',
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
    "Hi! I'm Valerie, an energetic software engineer who loves learning and dabbling in everything. I have 21 years of experience in science and technical fields. I love creating pretty applications that help solve problems and increase efficiency and productivity.",
  resume: require("../editable-stuff/resume.pdf")
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
  'Python',
  'AWS',
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
    `I'm currently looking for Full Stack Software Engineering opportunities.
    If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at `,
  email: 'vjonesdev@gmail.com',
};

const experiences = {
  show: true,
  heading: 'Experience',
  data: [
    {
      role: 'Senior Software Engineer / Project Lead',
      companylogo: require('../assets/img/xts-logo.jpg'),
      date: ' 2023 – Present',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/rocket-icon.jpg'),
      date: 'Jan 2023 – Oct 2023',
    },
    {
      role: 'React Native Developer',
      companylogo: require('../assets/img/livestockcity-logo.png'),
      date: 'Apr 2023 – Present',
    },
    {
      role: 'Software Engineer Trainee',
      companylogo: require('../assets/img/grace-hopper-logo.png'),
      date: 'June 2022 – Sept 2022',
    },
    {
      role: 'Owner - Web Design/Development',
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
      date: 'June 2011 – Jan 2013',
    },
    {
      role: 'GIS Analyst',
      companylogo: require('../assets/img/apsu-gis-center-logo.jpg'),
      date: 'Feb 2010 – May 2011',
    },
  ],
};

const testimonials = [
  {
    name: 'Elizabeth Cooper',
    imageUrl: require('../assets/img/TestimonialPics/Elizabeth.jpeg'),
    text: "Amazing to work with, and absolutely stunning end result! I couldn't be happier. :)",
    rating: 5,
  },
  {
    name: 'Christine',
    imageUrl: require('../assets/img/TestimonialPics/Christine.jpeg'),
    text: "Valerie has done excellent work! It's been a pleasure working with her and I highly recommend her for website help. Everything was done quickly and completely, and she has explained things in simple terms that even I can understand. :) Highly recommend!",
    rating: 5,
  },
  {
    name: 'Gail Welter',
    imageUrl: require('../assets/img/TestimonialPics/Gail.jpeg'),
    text: "Valerie and her team were just wonderful to work with. Attentive and prompt, insightful, patient and determined to meet her customers needs and expectations. This was a delightful, easy and successful process. I'd work with Instant Entity again and recommend Valerie highly.",
    rating: 5,
  },
  {
    name: 'Sue',
    imageUrl: require('../assets/img/TestimonialPics/Sue.jpeg'),
    text: "I can't say enough about how professional and talented Valerie is. She handled my complex project with skill and was incredibly patient and thorough through all of its roadblocks. I've worked with tech professionals before and had some disappointing experiences with their interpersonal skills. Not so with Valerie--she is an excellent communicator and an expert designer. Thank you to Valerie for surpassing my expectations!",
    rating: 5,
  },
  {
    name: 'Nicole',
    imageUrl: require('../assets/img/TestimonialPics/Nicole.jpeg'),
    text: "Let me just start off by saying that Valerie and her team are simply amazing! I can't even begin to describe my project without extreme joy. Valerie was always very attentive and reassuring, regardless of how many times I wanted to change something or if I had a concern. She always addressed everything and made sure that I was always completely satisfied. I'm so happy that my custom website design is done and am in absolute love with it! I'll definitely be using Valerie for all my website needs! I'd highly recommend her! Thank you so much for your hard work!!!!!!",
    rating: 5,
  },
  {
    name: 'Jada Johnson',
    imageUrl: require('../assets/img/TestimonialPics/Jada.jpeg'),
    text: "Valerie is great! She's done everything for me from website redesign to troubleshooting and fixing issues. She's knowledgeable, helpful and delivers a quality product every time. And I come back every time I have an issue with my website or need a change. Thanks Valerie!",
    rating: 5,
  },
  {
    name: 'Tanvi',
    imageUrl: require('../assets/img/TestimonialPics/Tanvi.jpeg'),
    text: 'Valerie has been a dream to work with. She is prompt, patient and professional. She took time to answer all my questions, incorporated my feedback into the design. I am in love with my website and it is all thanks to her. I cannot recommend her enough. You need to work with her. She is the best.',
    rating: 5,
  },
  {
    name: 'Laura Drayton',
    imageUrl: require('../assets/img/TestimonialPics/Laura.jpeg'),
    text: "I loved working with Valerie! She's great at communicating, and was able to help me achieve exactly what I wanted!",
    rating: 5,
  },
  {
    name: 'Amber L',
    imageUrl: require('../assets/img/TestimonialPics/Amber.jpeg'),
    text: "Valerie is Amazing at her work and I am beyond glad that I found her! She seems to be an expert at wordpress. (And a great graphic designer..which I used her for as well!) Best wordpress programmer I've found! She gives 110%. She keeps in good communication with you and is very organized and thorough with each project. I'm extremely happy with her work!!",
    rating: 5,
  },
];

export {
  navBar,
  mainBody,
  about,
  getInTouch,
  experiences,
  projects,
  skills,
  testimonials,
};
