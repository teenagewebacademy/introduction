


import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Project.module.css'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router';


const Project = () => {
    const [Name, setName] = useState('')
    const [Image, setImage] = useState('')
    const [Final, setFinal] = useState('')
    const [Projects, setProjects] = useState([])

    const default_page = './students/default_page.html';

    const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FAVICON : '';

    const router = useRouter()


    useEffect(() => {

        console.log(router.pathname)
        const name = router.query.name;
        const image = router.query.image;
        const final = router.query.final;

        setName(router.query.name)
        setImage(router.query.image)
        setFinal(router.query.final)
        const projects = router.query.projects;
        setProjects(JSON.parse(projects))

    }, [])

    console.log(JSON.stringify(Projects))
    console.log(typeof Projects)

    return (
        <main className={styles.main}>
            <section className={styles.container}>
            <div className={styles.rightSilde}>
                <a href={Final ? Final : `${basePath}/students/default_page.html`}>
                    <img src={`${basePath}/images/project.png`} className={styles.image} />
                    <strong className={styles.link}>پروژه پایانی {Name}</strong>
                </a>
            </div>
            <div className={styles.leftSilde}>
                <strong>پروژه و تمرینات {Name} : </strong>

                <ul className={styles.list}>
                    {Projects.map((item, index) => (
                        <li key={index} className={styles.list_item}><Link href={item.link} target={'_blank'}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
        </section>
        </main>
    )
}
export default Project;

// export async function getStaticProps(){
//     const router = useRouter()
//     console.log(router.query.name);
//     console.log(router.query.image);
//     console.log(router.query.final);
//     console.log(router.query.projects);
//     return{
//         props:{
//             name:router.query.name,
//             image:router.query.image,
//             final:router.query.final,
//             projects:router.query.projects,
//         }
//     }
// }


// export async function getServerSideProps(context){
//     const req=context.req;
//     console.log(req)
//     return{
//         props:{
//             name:req
//         }
//     }
// }

