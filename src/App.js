import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  navBar,
  mainBody,
  about,
  getInTouch,
  experiences,
  projects,
  testimonials,
} from './editable-stuff/config.js';
import MainBody from './components/home/MainBody';
import AboutMe from './components/home/AboutMe';
import Projects from './components/home/Projects';
import Experience from './components/home/Experience';
import Testimonials from './components/home/Testimonials';
import GetInTouch from './components/home/GetInTouch.jsx';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {<Experience experiences={experiences} />}
      {<Projects projects={projects} />}
      {<Testimonials testimonials={testimonials} />}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path='/' exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
