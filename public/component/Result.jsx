import React from 'react'
import styles from '../../styles/Result.module.css'
import Image from 'next/dist/client/image';
import Link from 'next/link';
import CardSlider from './CardSlider';
import Cards_slider from './Cards_slider';
import { useRouter } from 'next/router';

function Result(props) {

    const basePath =process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_FAVICON : '';
    const default_page ='./students/default_page.html';

    const data = [
        {
            term: 'ترم اول 2 - تابستان 1402',
            students: [
                { name: 'باران وحدتی', age: '16', image: '', link: '', active: false },
                { name: 'روژینا بهروزیان فرد', age: '16', image: '', link: '', active: false },
                { name: 'پرنیان پناهی', age: '16', image: '', link: '', active: false },
                { name: 'معین مظفری', age: '18', image: '', link: '', active: false },
                { name: 'علیرضا جلوه نسب', age: '18', image: '', link: '', active: false },
                { name: 'عرفان خادمی', age: '18', image: '', link: '', active: false },
                { name: 'ابوالفضل موسوی', age: '16', image: '', link: '', active: false },
                { name: 'رضا احمدی پور', age: '21', image: '', link: '', active: false }
            ]
        },
        {
            term: 'ترم اول - تابستان 1402',
            students: [
                { name: 'سیدرضا موسوی', age: '17', image: '/seyed_reza_mosavi.jpeg', link: './students/seyedReza_mousavi/', active: true },
                { name: 'علیرضا حیدری', age: '14', image: '/alireza_heydari.jpeg', link: './students/alireza_heydari/index.html', active: true },
                { name: 'ابوالفضل دهداری', age: '18', image: '/abolfazl_dehdari.jpg', link: '', active: false },
                { name: 'حمیدرضا وحیدی', age: '12', image: '/haminreza_vahidi.jpg', link: '', active: false },
                { name: 'سیوان بیگرضایی', age: '15', image: '/sivan_beygrezaee.PNG', link: './students/sivan_beygrezaee/index.html', active: true },
                { name: 'مائده عیدی', age: '18', image: '/maeede_eydi.PNG', link: './students/maede_eydi/index.html', active: true },
                { name: 'علیرضا علیزاده', age: '15', image: '/alireza_alizadeh.jpg', link: './students/alireza_alizadeh/index.html', active: true },
                { name: 'فاطمه خوشبخت', age: '16', image: '/fatemeh_khoshbakht.PNG', link: './students/fatemeh_khoshbakht/index.html', active: true },
            ]
        },
        {
            term: 'ترم اول بزرگسالان (آنلاین) - پاییز 1401',
            students: [
                { name: 'کاظم امیری', age: '30', image: '', link: '', active: false },
                { name: 'ساناز قنبری', age: '30', image: '', link: '', active: false },
                { name: 'عبدالامیر فرحناک', age: '30', image: '', link: '', active: false },
                { name: 'زهرا مرادی', age: '30', image: '', link: '', active: false },
            ]
        },
        {
            term: 'ترم اول (آنلاین) - پاییز 1401',
            students: [
                { name: 'ایلیا مردانی', age: '14', image: '', link: '', active: false },
                { name: 'محمدامین زارع', age: '14', image: '', link: "./students/mohamadamin_zaree/my_page.html", active: true },
                { name: 'سجاد جمالی', age: '14', image: '', link: './students/sajad_jamali/my_page.html', active: true },
                { name: 'محمدرضا محمدی', age: '14', image: '', link: '', active: false },
                { name: 'مصطفی عباسی', age: '14', image: '', link: '', active: false },
            ]
        },
        {
            term: 'ترم دوم- پاییز 1401',
            students: [
                { name: 'امیرعلی اسدی', age: '14', image: '/amirali_asadi.jpg', link: '', active: false },
                { name: 'امیرپویا زارعی', age: '17', image: '/amirpouya_zaree.PNG', link: '', active: false },
                { name: 'آرشاک سعادتی', age: '15', image: '/arshak_saadati.jpg', link: '', active: false }]
        },

        {
            term: 'ترم اول- پاییز 1401',
            students: [
                { name: 'سید بنیامین حسینی', age: '11', image: '/benyamin_hosseyni.jpg', link: '', active: false },
                { name: 'امیرحسین حسن پور', age: '12', image: '/amirhossein_hasanpour.jpg', link: '', active: false },
                { name: 'سارا خدری', age: '10', image: '/sara_khedri.jpg', link: '', active: false }]
        },

        {
            term: 'ترم اول- تابستان 1401',
            students: [
                { name: 'امیرعلی اسدی', age: '13', image: '/amirali_asadi.jpg', link: '', active: false },
                { name: 'فرزاد نخعی', age: '17', image: '/farzad_nakhae.jpg', link: '', active: false },
                { name: 'امیرپویا زارعی', age: '17', image: '/amirpouya_zaree.PNG', link: '', active: false },
                { name: 'آرشاک سعادتی', age: '15', image: '/arshak_saadati.jpg', link: '', active: false },
                { name: 'سیده زهرا موسوی', age: '14', image: '/ghazal_mousavi.jpg', link: '', active: false },
            ]
        }];

    return (
        <section className={styles.Result}>
            <h2>تحلیل و ساخت</h2>
            <h5>
                پس از تحلیل ساختار صفحات شروع به کدنویسی کردیم،
                &nbsp;
                <b>برای بررسی سایت کارآموزان بر روی مشخصات آنها کلیک کنید</b>
            </h5>
            <Cards_slider></Cards_slider>
            {data.map((item, index) => (
                <div key={index}>
                    <h3 key={index} className={styles.term}>
                        {/* <i className="material-icons">school</i> */}
                        {item.term}
                    </h3>
                    <div className={styles.students_list}>
                        {item.students.map((item, index) => (
                            // <Link href={item.link} className={styles.student} key={index} target={'_blank'}>
                            <Link href={item.link? item.link : default_page} className={styles.student} key={index} target={'_blank'}>
                                <img src={item.image ? `${basePath}/images/profile${item.image}` : `${basePath}/images/avatar.JPG`} alt={item.name} width={'180'} height={'180'}
                                    className={
                                        index % 2 == 0 ? styles.student_image_color_o : styles.student_image_color_e
                                    } />
                                <p className={item.active ? styles.hidden : styles.effect}>
                                    <i className="material-icons">error_outline</i>
                                    محتوایی وجود ندارد!
                                </p>
                                <strong>{item.name}</strong>
                                <span>{item.age} ساله</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Result;
