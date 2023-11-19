import React from 'react'
import Image from 'next/dist/client/image';
import styles from '../../styles/Header_slider.module.css'
// import TouchCarousel from 'react-touch-carousel'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Header_slider() {
  const basePath =process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_FAVICON : '';

  const data = [
    {image: '/mft1-1.png', title: 'web1_mft - تابستان و پاییز 1402'},
    {image: '/mft1_html&css.jpg', title: 'web1_mft - تابستان و پاییز 1402'},
    {image: '/IMG_20230801_102252.jpg', title: 'ترم اول2 - تابستان 1402'},
    {image: '/IMG_8438.jpg', title: 'ترم اول - تابستان 1402'},
    {image: '/IMG_20220820_190837.jpg', title: 'ترم اول - تابستان 1401'},
    {image: '/IMG_20221126_185522.jpg', title: 'ترم دوم - پاییز 1401'},
    {image: '/IMG_20221205_202607.jpg', title: 'ترم اول - پاییز 1401'},
    {image: '/classOnline.png', title: 'ترم اول (کلاس آنلاین) - پاییز 1401'},
    {image: '/IMG_20220813_190903.jpg', title: 'ترم اول - تابستان 1401'},
    {image: '/IMG_20221107_202725.jpg', title: 'ترم اول - پاییز 1401'},
    {image: '/IMG_20220829_183038.jpg', title: 'ترم اول - تابستان 1401'},
  ]
  return (
    <div className={styles.carousel_wrapper}>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        {data.map((item, index) => (
          <div key={index} className={styles.imageBox}>
            <img src={`${basePath}/images/class${item.image}`} />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Header_slider

