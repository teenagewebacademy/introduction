import React from 'react'
import styles from '../../styles/Skill.module.css'
import Image from 'next/image';

function Skill(props) {

    return (
        <section className={styles.skill}>
            <div className={styles.desc}>
                <h2>دستاورد های این دوره</h2>
                <ul className={styles.list}>
                    <li>
                        <i className="material-icons">done</i>
                        فراگیری html - آشنایی با تگ های مهم و کاربردی
                    </li>
                    <li>
                        <i className="material-icons">done</i>
                        فراگیری css - آشنایی با ویژگی های مهم و کاربردی
                    </li>
                    <li>
                        <i className="material-icons">done</i>
                        توانایی تحلیل صفحات وب - کارت ها  و کنترل نسبت ها
                    </li>
                    <li>
                        <i className="material-icons">done</i>
                        کسب مهارت کدنویسی
                        <em>(Html,Css)</em>
                    </li>
                    <li>
                        <i className="material-icons">done</i>
                        طراحی سایت شخصی و تکامل و توسعه آن
                    </li>
                </ul>
            </div>
            <img src={`${process.env.NEXT_PUBLIC_FAVICON}/images/_book2.png`} alt='skill' width={100} height={100} />

        </section>
    )
}
export default Skill;
