import React from 'react'
import styles from '../../styles/CardSlider.module.css'
import Image from 'next/dist/client/image';

function CardSlider(props) {
  const data = [
    '/sam_cards/mohamadamin.JPG',
    '/sam_cards/sajad1.png',
    '/sam_cards/sajad2.png',
    '/sam_cards/sajad3.png',
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
          <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images${item}`} key={index} className={styles.cards} />
        ))}
      </div>
    </section>
  )
}
export default CardSlider;
