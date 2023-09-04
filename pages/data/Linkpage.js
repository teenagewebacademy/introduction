import React from 'react'
import styles from '../../styles/Linkpage.module.css'

export default function Linkpage() {
  const basePath =process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_FAVICON : '';

    return (
      <div>
        <section className={styles.lightmode}>
          <img src={`${basePath}/images/linkpage/link.png`} alt='link' className={styles.image}/>
          <h3>آشنایی با بهترین منابع</h3>
          <a href='https://github.com/' target='_blank' className={styles.btn}>GitHub</a>
        </section>

        <section className={styles.darkmode}>
          <img src={`${basePath}/images/linkpage/link.png`} alt='git' className={styles.image}/>
          <h3> جزوه آموزشی آشنایی با گیت</h3>
          <a href={`${basePath}/images/linkpage/git.pdf`} download className={styles.btn}>دانلود جزوه</a>
        </section>

        <section className={styles.lightmode}>
          <img src={`${basePath}/images/linkpage/call.png`} alt='calltome' className={styles.image}/>
          <h3>پشتیبانی 24 ساعته</h3>
          <a href='tel:+989960820046' className={styles.btn}>تماس با ما</a>
        </section>

        <section className={styles.darkmode}>
          <img src={`${basePath}/images/linkpage/sms.png`} alt='mailtome' className={styles.image}/>
          <h3>عضویت رایگان، فقط تا پایان هفته !</h3>
          <a href='sms:+989960820046?body=درخواست عضویت در دوره های آموزشی' className={styles.btn}>ارسال sms</a>
        </section>

        <section className={styles.lightmode}>
          <img src={`${basePath}/images/linkpage/mail.png`} alt='calltome' className={styles.image}/>
          <h3>عضویت رایگان، فقط تا پایان هفته !</h3>
          <a href='mailto:teenage.web.academy@gmail.com?subject = request&body = New_request' className={styles.btn}>ارسال Email</a>
        </section>
      </div>
    )
}
