import React from 'react'
import styles from '../../styles/Books.module.css'
import Image from 'next/image';

function Books (props){

    const basePath =process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_FAVICON : '';

  return (
    <section className={styles.books}>
        <img src={`${basePath}/images/_book1.png`} alt='books' width={100} height={100} />
        <div className={styles.desc}>
            <h2>کتاب های آموزشی دوره</h2>
            <ul className={styles.list}>
                <li>
                    <i className="material-icons">book</i>
                    هر ترم شامل کتابچه آموزشی میباشد.
                </li>
                <li>
                <i className="material-icons">people</i>
                    مطالب کتابچه ها بصورت کوتاه و مختصر بوده و عمده توضیحات بصورت عملی ، حین پروژه های کلاس درس بیان میشود.
                </li>
                <li>
                <i className="material-icons">laptop</i>
                    تمامی مطالب بیان شده در کتابچه ها شامل توضیحات، نمونه کد و خروجی حاصله میباشند.
                </li>
            </ul>
        </div>
    </section>
  )
}
export default Books;
