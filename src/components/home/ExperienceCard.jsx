import React from 'react';

import { Col } from 'react-bootstrap';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg='6'>
      <div className='pb-5 text-center'>
        <div
          style={{
            height: 175,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            className='bg-white mb-3'
            style={{ maxWidth: 230, maxHeight: 125 }}
            src={data.companylogo}
            alt='logo'
          />
        </div>
        <p className='lead'>
          <b> {data.role} </b>
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
