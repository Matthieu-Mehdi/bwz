import './SlideShow.scss';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import photo1 from '../../../asset/photo1.jpg';
import photo2 from '../../../asset/photo2.jpg';
import photo3 from '../../../asset/photo3.jpg';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '800px'
}
const slideImages = [
  {
    url: photo1,
    //caption: 'Slide 1'
  },
  {
    url: photo2,
    //caption: 'Slide 2'
  },
  {
    url: photo3,
    //caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide duration={2500}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;