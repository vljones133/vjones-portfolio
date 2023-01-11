import uniqid from 'uniqid';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <img className='bg-white mb-3 img-fluid' src={project.mockup} alt='' />

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-github' />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <i
          className='bi bi-box-arrow-up-right'
          role='img'
          aria-label='Open Link'
        ></i>
      </a>
    )}
  </div>
);

export default ProjectContainer;
