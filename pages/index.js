import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header_slider from '../public/component/Header_slider'
import Info from '../public/component/Info'
import Books from '../public/component/Books'
import Skill from '../public/component/Skill'
import Result from '../public/component/Result'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>teenage_web_academy</title>
        <meta charSet='UTF-8' />
        <meta name='author' content='mina nastaran' />
        <meta name="description" content="Education and introduction" />
        <link rel="icon" href="/images/logo.JPG" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Header_slider></Header_slider>
        {/* <Info></Info> */}
        <Books></Books>
        <Skill></Skill>
        <Result></Result>
      </main>

      <footer className={styles.footer}>
        teenage_web_academy
        <i className="material-icons instaicon">laptop</i>
      </footer>
    </div>
  )
}
