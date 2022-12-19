import React from 'react'
import styles from '../../styles/Sample.module.css'
import Image from 'next/dist/client/image';

function Sample (props){
  
  return (
    <section className={styles.sample}>
        <img src={'../public/images/music.png'} alt='books' width={100} height={100}  />
      
    </section>
  )
}
export default Sample;
