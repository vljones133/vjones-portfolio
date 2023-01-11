import React from 'react';
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

// const MapColumn = ({ testimonial }) => {
//   return (
//     <Col xs={12} md={4} className='centered px-4'>
//       <Image
//         roundedCircle
//         className='test-pic'
//         src={testimonial.imageUrl}
//         alt={testimonial.name}
//       />
//       <h3>{testimonial.name}</h3>
//       <blockquote className='text-muted'>
//         <i className='fas fa-quote-left pe-2'></i>
//         {testimonial.text}
//       </blockquote>
//       <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//         <ListStars testimonial={testimonial} />;
//       </ul>
//       {/* <Image
//         roundedCircle
//         className='test-pic'
//         src='https://i.etsystatic.com/iusa/e6a3d2/52240878/iusa_400x400.52240878_9g3b.jpg?version=0'
//         alt='Elizabeth Cooper'
//       />
//       <h3>Elizabeth Cooper</h3>
//       <blockquote className='text-muted'>
//         <i className='fas fa-quote-left pe-2'></i>
//         Amazing to work with, and absolutely stunning end result! I couldn't be
//         happier. :)
//       </blockquote>
//       <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//         <li>
//           <i className='fas fa-star fa-sm'></i>
//         </li>
//         <li>
//           <i className='fas fa-star fa-sm'></i>
//         </li>
//         <li>
//           <i className='fas fa-star fa-sm'></i>
//         </li>
//         <li>
//           <i className='fas fa-star fa-sm'></i>
//         </li>
//         <li>
//           <i className='fas fa-star fa-sm'></i>
//         </li>
//       </ul> */}
//     </Col>
//   );
// };

// const MapRow = () => {
//   return (
//     // <Carousel.Item>
//     //   <Row>
//         {/* {rowArray.map((testimonial, i) => (
//           <MapColumn testimonial={testimonial} key={i} />
//         ))} */}
//        <Row>
//             <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://scontent.fcha1-1.fna.fbcdn.net/v/t39.30808-1/300582957_192422289825269_616634276348390959_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=c6021c&_nc_ohc=vAgyNR36LBMAX8mjMP0&_nc_ht=scontent.fcha1-1.fna&oh=00_AfD5ydJkJ1am0g0Gz4_--mxCSXPPOx64diKhMV7vY7vLWQ&oe=63B8FE88'
//             alt='Christine'
//           />
//           <h3>Christine</h3>
//           <h4>Barclay's Soap Box</h4>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie has done excellent work! It's been a pleasure working with
//             her and I highly recommend her for website help. Everything was done
//             quickly and completely, and she has explained things in simple terms
//             that even I can understand. :) Highly recommend!
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//         <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
//             alt='Gail Welter'
//           />
//           <h3>Gail Welter</h3>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie and her team were just wonderful to work with. Attentive and
//             prompt, insightful, patient and determined to meet her customers
//             needs and expectations. This was a delightful, easy and successful
//             process. I'd work with Instant Entity again and recommend Valerie
//             highly.
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//         <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
//             alt='Gail Welter'
//           />
//           <h3>Gail Welter</h3>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie and her team were just wonderful to work with. Attentive and
//             prompt, insightful, patient and determined to meet her customers
//             needs and expectations. This was a delightful, easy and successful
//             process. I'd work with Instant Entity again and recommend Valerie
//             highly.
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//         <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
//             alt='Gail Welter'
//           />
//           <h3>Gail Welter</h3>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie and her team were just wonderful to work with. Attentive and
//             prompt, insightful, patient and determined to meet her customers
//             needs and expectations. This was a delightful, easy and successful
//             process. I'd work with Instant Entity again and recommend Valerie
//             highly.
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//         <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
//             alt='Gail Welter'
//           />
//           <h3>Gail Welter</h3>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie and her team were just wonderful to work with. Attentive and
//             prompt, insightful, patient and determined to meet her customers
//             needs and expectations. This was a delightful, easy and successful
//             process. I'd work with Instant Entity again and recommend Valerie
//             highly.
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//         <Col xs={12} md={4} className='centered px-4'>
//           <Image
//             roundedCircle
//             className='test-pic'
//             src='https://i.etsystatic.com/668620847/r/il/4c14fc/668620847/il_170x135.668620847_ffxx.jpg'
//             alt='Gail Welter'
//           />
//           <h3>Gail Welter</h3>
//           <blockquote className='text-muted'>
//             <i className='fas fa-quote-left pe-2'></i>
//             Valerie and her team were just wonderful to work with. Attentive and
//             prompt, insightful, patient and determined to meet her customers
//             needs and expectations. This was a delightful, easy and successful
//             process. I'd work with Instant Entity again and recommend Valerie
//             highly.
//           </blockquote>
//           <ul className='list-unstyled d-flex justify-content-center text-warning mb-5'>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//             <li>
//               <i className='fas fa-star fa-sm'></i>
//             </li>
//           </ul>
//         </Col>
//     </Row>
//     //   </Row>
//     // </Carousel.Item>
//   );
// };

const Testimonials = () => {
  let carouselArray = createCarouselArray();
  return (
    <Jumbotron fluid className='bg-white m-0'>
      <h2 className='display-4 pb-5 text-center'>Client Testimonials</h2>
      <Carousel className='carousel-dark'>
        {/* <Carousel interval={null} className='carousel-dark'> */}
        {carouselArray.map((rowArray, i) => (
          <Carousel.Item>
            <Row>
              {/* <h1>HI!</h1> */}
              {/* <MapRow /> */}
            </Row>
          </Carousel.Item>

          //  <MapRow rowArray={rowArray} key={i} />
        ))}
      </Carousel>
    </Jumbotron>
  );
};

export default Testimonials;
