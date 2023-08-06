import React from 'react'
import Carousel from 'better-react-carousel'
import styles from '../../styles/Result.module.css'

function Cards_slider() {

  const basePath =process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_FAVICON : '';

  const data = [
    '/sam_cards/maede_info.JPG',
    '/sam_cards/maede.JPG',
    '/sam_cards/mohamadamin.JPG',
    '/sam_cards/sajad1.png',
    '/sam_cards/sajad2.png',
    '/sam_cards/sajad3.png',
  ]

  return (
    <div className={styles.Carousel}>
      <Carousel cols={3} rows={1} gap={10} loop scrollSnap autoplay={3000} >
        {data.map((item, index) =>
          <Carousel.Item key={index}>
            <img width="100%" src={`${basePath}/images${item}`} className={styles.cards} />
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  )
}

export default Cards_slider;