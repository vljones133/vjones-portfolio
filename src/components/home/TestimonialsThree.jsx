import React from 'react';
import uniqid from 'uniqid';
import { Jumbotron } from './migration';
import { testimonials } from '../../editable-stuff/config';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ListStars = ({ testimonial }) => {
  for (let i = 0; i <= testimonial.rating; i++) {
    return (
      <li>
        <i className='fas fa-star'></i>
      </li>
    );
  }
};

const MapRow = ({ col }) => {
  console.log('COL:', col);
  col.map((testimonial, index) => {
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
  });
};

// debugger;
const MapTestimonials = ({ rowArray }) => {
  //   console.log('carouselArray: ', rowArray);
  //   console.log(carouselArray);
  rowArray.map((column) => {
    console.log('column: ', column);
    return (
      <Carousel.Item rowArr={rowArray} key={uniqid()}>
        <Row>
          <h1>ROW</h1>
          {column.map((testimonial) => (
            <MapRow column={column} key={uniqid()} />
          ))}
        </Row>
      </Carousel.Item>
    );
  });
};

const createCarouselArray = () => {
  let carouselArray = [];
  let rowArray = [];
  let count = 1;

  for (let i = 0; i < testimonials.length; i++) {
    rowArray.push(testimonials[i]);

    if (count % 3 === 0) {
      carouselArray.push(rowArray);
      rowArray = [];
    }

    count++;
  }
  return carouselArray;
};

const Testimonials = () => {
  let carouselArray = createCarouselArray();
  return (
    <Jumbotron fluid className='bg-white m-0'>
      <h2 className='display-4 pb-5 text-center'>Client Testimonials</h2>
      <Carousel interval={null} className='carousel-dark'>
        {carouselArray.map((rowArray) => (
          <MapTestimonials key={uniqid()} rowArray={rowArray} />
        ))}
      </Carousel>
    </Jumbotron>
  );
};

export default Testimonials;
