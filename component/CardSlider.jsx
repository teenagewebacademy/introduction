import React from 'react'
import styles from '../../styles/CardSlider.module.css'
import Image from 'next/dist/client/image';

function CardSlider(props) {
  const data = [
    '/images/sam_cards/mohamadamin.JPG',
    '/images/sam_cards/sajad.JPG',
    '/images/sam_cards/mohamadamin.JPG',
    '/images/sam_cards/sajad.JPG',
    '/images/sam_cards/mohamadamin.JPG',
    '/images/sam_cards/sajad.JPG',
  ]

  return (
    <section className={styles.card_slider}>
      <h2>تحلیل و ساخت</h2>
      <h5>
        پس از تحلیل ساختار صفحات شروع به کدنویسی کردیم،
        &nbsp;
        <b>برای بررسی سایت کارآموزان بر روی مشخصات آنها کلیک کنید</b>
      </h5>


      <div className={styles.slider}>
        {data.map((item, index) => (
          <img src={item} key={index} className={styles.cards} />
        ))}
      </div>
    </section>
  )
}
export default CardSlider;
