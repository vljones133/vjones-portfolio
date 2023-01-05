import React from 'react';
import { Jumbotron } from './migration';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const TestimonialsOld = () => {
  return (
    <Jumbotron fluid className='bg-white m-0'>
      <h2 className='display-4 pb-5 text-center'>Client Testimonials</h2>
      <Carousel interval={null} className='carousel-dark'>
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/iusa/e6a3d2/52240878/iusa_400x400.52240878_9g3b.jpg?version=0'
                alt='Elizabeth Cooper'
              />
              <h3>Elizabeth Cooper</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>
                Amazing to work with, and absolutely stunning end result! I
                couldn't be happier. :)
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://scontent.fcha1-1.fna.fbcdn.net/v/t39.30808-1/300582957_192422289825269_616634276348390959_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=c6021c&_nc_ohc=vAgyNR36LBMAX8mjMP0&_nc_ht=scontent.fcha1-1.fna&oh=00_AfD5ydJkJ1am0g0Gz4_--mxCSXPPOx64diKhMV7vY7vLWQ&oe=63B8FE88'
                alt='Christine'
              />
              <h3>Christine</h3>
              <h4>Barclay's Soap Box</h4>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>
                Valerie has done excellent work! It's been a pleasure working
                with her and I highly recommend her for website help. Everything
                was done quickly and completely, and she has explained things in
                simple terms that even I can understand. :) Highly recommend!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
                alt='Gail Welter'
              />
              <h3>Gail Welter</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>
                Valerie and her team were just wonderful to work with. Attentive
                and prompt, insightful, patient and determined to meet her
                customers needs and expectations. This was a delightful, easy
                and successful process. I'd work with Instant Entity again and
                recommend Valerie highly.
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/756715564/r/il/4828c8/756715564/il_170x135.756715564_5b6b.jpg'
                alt='Sue'
              />
              <h3>Sue</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>I can't say enough
                about how professional and talented Valerie is. She handled my
                complex project with skill and was incredibly patient and
                thorough through all of its roadblocks. I've worked with tech
                professionals before and had some disappointing experiences with
                their interpersonal skills. Not so with Valerie--she is an
                excellent communicator and an expert designer. Thank you to
                Valerie for surpassing my expectations!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/iap/088899/921400887/iap_300x300.921400887_1wsy9n16.jpg?version=0'
                alt='Nicole'
              />
              <h3>Nicole</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>
                Let me just start off by saying that Valerie and her team are
                simply amazing! I can't even begin to describe my project
                without extreme joy. Valerie was always very attentive and
                reassuring, regardless of how many times I wanted to change
                something or if I had a concern. She always addressed everything
                and made sure that I was always completely satisfied. I'm so
                happy that my custom website design is done and am in absolute
                love with it! I'll definitely be using Valerie for all my
                website needs! I'd highly recommend her! Thank you so much for
                your hard work!!!!!!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/iusa/ef5886/20842785/iusa_400x400.20842785_ptk1.jpg?version=0'
                alt='Jada Johnson'
              />
              <h3>Jada Johnson</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>
                Valerie is great! She's done everything for me from website
                redesign to troubleshooting and fixing issues. She's
                knowledgeable, helpful and delivers a quality product every
                time. And I come back every time I have an issue with my website
                or need a change. Thanks Valerie!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/iusa/d99591/84550055/iusa_400x400.84550055_3yg1.jpg?version=0'
                alt='Tanvi'
              />
              <h3>Tanvi</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>Valerie has been a
                dream to work with. She is prompt, patient and professional. She
                took time to answer all my questions, incorporated my feedback
                into the design. I am in love with my website and it is all
                thanks to her. I cannot recommend her enough. You need to work
                with her. She is the best.
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/iusa/7629f1/34525255/iusa_400x400.34525255_5w0m.jpg?version=0'
                alt='Laura Drayton'
              />
              <h3>Laura Drayton</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>I loved working with
                Valerie! She's great at communicating, and was able to help me
                achieve exactly what I wanted!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className='centered px-4'>
              <Image
                roundedCircle
                className='test-pic'
                src='https://i.etsystatic.com/674017594/r/il/6e93d4/674017594/il_170x135.674017594_m3u2.jpg'
                alt='Amber L'
              />
              <h3>Amber L</h3>
              <blockquote className='text-muted'>
                <i className='fas fa-quote-left pe-2'></i>Valerie is Amazing at
                her work and I am beyond glad that I found her! She seems to be
                an expert at wordpress. (And a great graphic designer..which I
                used her for as well!) Best wordpress programmer I've found! She
                gives 110%. She keeps in good communication with you and is very
                organized and thorough with each project. I'm extremely happy
                with her work!!
              </blockquote>
              <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
                <li>
                  <i className='fas fa-star fa-sm'></i>
                </li>
              </ul>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Col className='centered mb-5'>
            <h2>Read More</h2>
            <a
              href='https://instantentity.etsy.com/'
              target='_blank'
              rel='noreferrer'
            >
              Instant Entity store on Etsy
            </a>
          </Col>
        </Carousel.Item>
      </Carousel>
    </Jumbotron>
  );
};

export default TestimonialsOld;
