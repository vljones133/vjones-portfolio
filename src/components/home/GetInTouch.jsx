import React from 'react';

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className='display-4 pb-3 text-center'>{heading}</h2>
      <p className='lead text-center'>
        I'm currently looking for Full-Stack or Front-End Software Engineering
        opportunities.
      </p>
      <p className='lead text-center'>
        If you know of any positions available, have any questions, or just want
        to say hi, please feel free to email me at{' '}
      </p>
      <p className='lead text-center pb-3'>
        <a className='text-decoration-none' href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
    </>
  );
};

export default GetInTouch;
