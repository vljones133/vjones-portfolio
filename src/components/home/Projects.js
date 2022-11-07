import uniqid from 'uniqid';
import { projects } from '../../editable-stuff/config';
import ProjectContainer from '../home/ProjectContainer';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from './migration';
//import './Projects.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <Jumbotron fluid id='projects' className='bg-light m-0'>
      <Container className=''>
        <h2 className='display-4 pb-5 text-center'>Projects</h2>
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Projects;
