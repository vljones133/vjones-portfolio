import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {
  const bgStyle = { backgroundColor: '#f5f5f5' };

  return (
    <footer style={bgStyle} className='mt-auto py-5 text-center '>
      <Container>
        {props.children}
        <i className='fas fa-code' /> with <i className='fas fa-heart' /> using{' '}
        <i className='fab fa-react' />
        <br />
        Original <i className='fas fa-code' /> by&nbsp;
        <a
          rel='noopener'
          target=' _blank'
          href='https://github.com/hashirshoaeb'
          aria-label='My GitHub'
        >
          Hashir Shoaib
        </a>
        . Thanks Hashir!
      </Container>
    </footer>
  );
};

export default Footer;
