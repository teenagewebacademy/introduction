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
    // { name: '', age: '', image: '', link: '', active: false },

    const data = [
        {
            term: 'دوره طراحی سایت HTML & CSS - پاییز 1402',
            students: [
                { name: 'سارا محمدی', age: '16', image: '', link: '', active: false },
                { name: 'غزاله نعمتی زاده', age: '20', image: '', link: '', active: false },
                { name: 'حمیدرضا میرزا', age: '18', image: '', link: '', active: false },
                { name: 'امیرحسین عبدل نسب', age: '19', image: '/amirhosein_andolnasab.jfif', link: '', active: false },
                { name: 'ابوالفضل زیارتی', age: '20', image: '', link: '', active: false },
                { name: 'علی ترک زاده', age: '15', image: '', link: '', active: false },
                { name: 'حسین علی خواه', age: '37', image: '', link: '', active: false },
                { name: 'آوا صابری', age: '18', image: '', link: '', active: false },

            ]
        },
        {
            term: 'ترم سوم - پاییز 1402',
            students: [
                { name: 'روژینا بهروزیان فرد', age: '16', image: '/rozhina_behroozianfard.jpg', link: '', active: false },
                { name: 'علیرضا جلوه نسب', age: '18', image: '/alireza_jelvehnasab.jpg', link: '', active: false },
                { name: 'عرفان خادمی', age: '18', image: '/erfan_khademi.jpg', link: '', active: false },
                { name: 'رضا احمدی پور', age: '21', image: '/reza_ahmadipour.jpg', link: '', active: false },
                { name: 'علیرضا حیدری', age: '14', image: '/alireza_heydari.jpeg', link: '', active: false },
                { name: 'سیوان بیگرضایی', age: '15', image: '/sivan_beygrezaee.PNG', link: '', active: false },
                { name: 'مائده عیدی', age: '18', image: '/maeede_eydi.PNG', link: '', active: false },
            ]
        },
        {
            term: 'ترم اول (خصوصی) - پاییز 1402',
            students: [
                { name: 'حدیث کمالی', age: '18', image: '/hadis_kamali.jpg', link: './students/hadis_kamali/index.html', active: true },
                { name: 'طاها گداعلی', age: '12', image: '', link: '', active: false },
            ]
        },
        {
            term: 'ترم اول 3 - تابستان 1402',
            students: [
                { name: 'پوریا طارمی', age: '16', image: '/pouria_taremi.jpg', link: './students/pouria_taremi/index.html', active: true },
                { name: 'بهنیا حیدری', age: '15', image: '/behnia_heydari.jpg', link: '', active: false },
                { name: 'ابوالفضل هنربین', age: '16', image: '', link: '', active: false },
                { name: 'آذین طلاب', age: '15', image: '/azin_tolab.jfif', link: '', active: false },
                { name: 'رسول شماخی', age: '32', image: '', link: './students/rasoul_shamakhi/index.html', active: true },
                { name: 'یونس جمور', age: '34', image: '', link: './students/younes_jomor/index.html', active: true },
                { name: 'جابر اردستانی', age: '', image: '', link: '', active: false },
                { name: 'امیرمهدی رام', age: '15', image: '', link: '', active: false },
            ]
        },
        {
            term: 'دوره طراحی سایت HTML & CSS - تابستان و پاییز 1402',
            students: [
                { name: 'نسترن سالمی', age: '20', image: '/nastaran_salemi.PNG', link: './students/nastaran_salemi/index.html', active: true },
                { name: 'امیررضا آذروند', age: '25', image: '/amirreza_azarvand.PNG', link: '', active: false },
                { name: 'علیرضا زنگنه', age: '13', image: '/alireza_zangeneh.PNG', link: './students/alireza_zangeneh/index.html', active: true },
                { name: 'سینا غلامی', age: '18', image: '/sina_gholami.PNG', link: './students/sina_gholami/index.html', active: true },

            ]
        },
        {
            term: 'ترم دوم 2 - تابستان 1402',
            students: [
                { name: 'روژینا بهروزیان فرد', age: '16', image: '/rozhina_behroozianfard.jpg', link: 'https://rozhinabehroozian.github.io/Rozhiina/', active: true },
                { name: 'پرنیان پناهی', age: '18', image: '/parnian_panahi.jpg', link: '', active: false },
                { name: 'معین مظفری', age: '18', image: '/moein_mozafari.PNG', link: '', active: false },
                { name: 'علیرضا جلوه نسب', age: '18', image: '/alireza_jelvehnasab.jpg', link: '', active: false },
                { name: 'عرفان خادمی', age: '18', image: '/erfan_khademi.jpg', link: 'https://erfankhademi.github.io/model/', active: true },
                { name: 'رضا احمدی پور', age: '21', image: '/reza_ahmadipour.jpg', link: '', active: false }
            ]
        },
        {
            term: 'ترم دوم 1 - تابستان 1402',
            students: [
                { name: 'سیدرضا موسوی', age: '17', image: '/seyed_reza_mosavi.jpeg', link: 'https://1000reza777.github.io/cocvc/', active: true },
                { name: 'علیرضا حیدری', age: '14', image: '/alireza_heydari.jpeg', link: '', active: false },
                { name: 'سیوان بیگرضایی', age: '15', image: '/sivan_beygrezaee.PNG', link: '', active: false },
                { name: 'مائده عیدی', age: '18', image: '/maeede_eydi.PNG', link: '', active: false },
                { name: 'فاطمه خوشبخت', age: '16', image: '/fatemeh_khoshbakht.PNG', link: '', active: false },
            ]
        },
        {
            term: 'ترم اول 2 - تابستان 1402',
            students: [
                { name: 'باران وحدتی', age: '16', image: '/baran_vahdati.jpg', link: '', active: false },
                { name: 'روژینا بهروزیان فرد', age: '16', image: '/rozhina_behroozianfard.jpg', link: './students/rozhina_behroozian/index.html', active: true },
                { name: 'پرنیان پناهی', age: '18', image: '/parnian_panahi.jpg', link: './students/parniyan_panahi/index.html', active: true },
                { name: 'معین مظفری', age: '18', image: '/moein_mozafari.PNG', link: './students/moien_mozafari/index.html', active: true },
                { name: 'علیرضا جلوه نسب', age: '18', image: '/alireza_jelvehnasab.jpg', link: './students/alireza_jelvehnasab/index.html', active: true },
                { name: 'عرفان خادمی', age: '18', image: '/erfan_khademi.jpg', link: './students/erfan_khademi/index.html', active: true },
                { name: 'ابوالفضل موسوی', age: '16', image: '/abolfazl_mosavi.PNG', link: '', active: false },
                { name: 'رضا احمدی پور', age: '21', image: '/reza_ahmadipour.jpg', link: './students/reza_ahmadipour/index.html', active: true }
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
