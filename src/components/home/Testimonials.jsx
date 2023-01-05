import React from 'react';
import { Jumbotron } from './migration';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ListStars = (testimonial) => {
  for (let i = 0; i <= testimonial.rating; i++) {
    return (
      <li>
        <i className='fas fa-star'></i>
      </li>
    );
  }
};

const Column = (testimonial, index) => {
  return (
    <Col xs={12} md={4} className='centered px-4' key={index}>
      <Image
        roundedCircle
        className='test-pic'
        src={testimonial.imageUrl}
        alt={testimonial.name}
      />
      <h3>{testimonial.name}</h3>
      <blockquote className='text-muted'>
        <i className='fas fa-quote-left pe-2'></i>
        {testimonial.text}
      </blockquote>
      <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
        <ListStars testimonial={testimonial} />;
      </ul>
    </Col>
  );
};

const MapTestimonials = (props) => {
  //   console.info(testimonials);
  props.testimonials.map((testimonial, index) => {
    if (index === 0 || index % 3 === 0) {
      return (
        <Carousel.Item>
          <Row>
            <Column testimonial={testimonial} key={index} />
          </Row>
        </Carousel.Item>
      );
    } else {
      return <Column testimonial={testimonial} key={index} />;
    }
  });
};

const Testimonials = ({ testimonials }) => {
  return (
    <Jumbotron fluid className='bg-white m-0'>
      <h2 className='display-4 pb-5 text-center'>Client Testimonials</h2>
      <Carousel interval={null} className='carousel-dark'>
        {/* {testimonials.map((testimonial, index) => ( */}
        <MapTestimonials props={testimonials} />
        {/* ))} */}
      </Carousel>
    </Jumbotron>
  );
};

export default Testimonials;
