import React from 'react';
import { Jumbotron } from './migration';
import { testimonials } from '../../editable-stuff/config';
import uniqid from 'uniqid';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const createCarouselArray = () => {
  let carouselArray = [];
  let rowArray = [];
  let count = 1;

  for (let i of testimonials) {
    rowArray.push(i);

    if (count % 3 === 0) {
      carouselArray.push(rowArray);
      rowArray = [];
    }

    count++;
  }
  return carouselArray;
};

const ListStars = (props) => {
  let ratingArray = [];
  for (let i = 1; i <= props.rating; i++) {
    ratingArray.push(i);
  }
  return ratingArray.map((rating) => (
    <li key={rating}>
      <i className='fas fa-star fa-sm'></i>
    </li>
  ));
};

const Testimonials = () => {
  const carouselArray = createCarouselArray();

  return (
    <Jumbotron fluid className='bg-white m-0'>
      <h2 className='display-4 pb-5 text-center'>Client Testimonials</h2>
      <Carousel interval={null} className='carousel-dark'>
        {carouselArray.map((rowArray) => (
          <Carousel.Item key={uniqid()}>
            <Row>
              {rowArray.map((testimonial) => (
                <Col xs={12} md={4} className='centered px-4' key={uniqid()}>
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
                    <ListStars key={uniqid()} rating={testimonial.rating} />
                  </ul>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
        <Carousel.Item>
          <Row className='carousel-row-more'>
            <h3 className='text-center pt-5'>
              <a
                href='https://instantentity.etsy.com/'
                target='_blank'
                rel='noreferrer'
              >
                Read More on Etsy
              </a>
            </h3>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Jumbotron>
  );
};

export default Testimonials;
