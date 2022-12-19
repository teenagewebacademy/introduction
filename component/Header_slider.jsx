import React from 'react'
import Image from 'next/dist/client/image';
import styles from '../../styles/Header_slider.module.css'
// import TouchCarousel from 'react-touch-carousel'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Header_slider() {

  const data = [
    {image: '/class/IMG_20220820_190837.jpg', title: 'ترم اول - تابستان 1401'},
    {image: '/class/IMG_20221126_185522.jpg', title: 'ترم دوم - پاییز 1401'},
    {image: '/class/IMG_20221205_202607.jpg', title: 'ترم اول - پاییز 1401'},
    {image: '/class/classOnline.png', title: 'ترم اول (کلاس آنلاین) - پاییز 1401'},
    {image: '/class/IMG_20220813_190903.jpg', title: 'ترم اول - تابستان 1401'},
    {image: '/class/IMG_20221107_202725.jpg', title: 'ترم اول - پاییز 1401'},
    {image: '/class/IMG_20220829_183038.jpg', title: 'ترم اول - تابستان 1401'},
  ]
  return (
    <div className={styles.carousel_wrapper}>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={`../public/images${item}/${item.image}`} />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Header_slider

