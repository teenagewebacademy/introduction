import React from 'react'
import styles from '../../styles/Info.module.css'
import Image from 'next/image';

function Info(props) {
  // const basePath = process.env.BASE_PATH || '';
  
  const data = [
    { title: 'ترم اول', desc: 'آشنایی مقدماتی با Html , Css و اهمیت آنها', goal: 'تحلیل و ساخت صفحات', img: '/f1.png' },
    { title: 'ترم دوم', desc: 'توسعه سایت شخصی با لینکدهی، لیست ها و سایر', goal: 'توسعه سایت شخصی', img: '/f2.png' },
    { title: 'ترم سوم', desc: 'آشنایی با فرم ها و آیتم های 3بعدی و متحرک', goal: 'افزودن حالات و فرم به سایت', img: '/f3.png' },
  ];
  return (
    <section className={styles.part1}>
      <h2>دوره آموزشی طراحی سایت</h2>
      <h5>این دوره شامل سه ترم پروژه محور میباشد</h5>
      <section className={styles.cover} >
        {data.map((item, index) =>
          <div className={styles.items} key={index}>
            <Image src={`${process.env.NEXT_PUBLIC_FAVICON}/images${item.img}`} alt='' width={100} height={100} />
            <h5 className={styles.title}>{item.title}</h5>
            <p className={styles.desc}>{item.desc}</p>
            <span className={styles.goal}>
              <i className="material-icons">school</i>
              &nbsp;{item.goal}
            </span>
          </div>
        )}
      </section>
    </section>
  )
}
//  export async function getstaticProps(){
//     const data=[
//         {title:'ترم اول',desc:'آشنایی مقدماتی با Html , Css و اهمیت آنها',goal:'تحلیل و ساخت صفحات'},
//         {title:'ترم دوم',desc:'ساخت سایت شخصی و توسعه آن با لیست ها، منوها و..',goal:'توسعه سایت شخصی'},
//         {title:'ترم سوم',desc:'آشنایی با فرم ها و ساخت 3بعدی و متحرک',goal:'افزودن حالات و فرم به سایت'},
//     ];
//     return{
//         data:data
//     }
//  }
export default Info;
