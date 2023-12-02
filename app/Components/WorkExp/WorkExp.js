import React from 'react'
import styles from "./work.module.css"
import Image from 'next/image'
import abhyaz from "@/public/Abhyaz.jpg"
import tenmarketing from "@/public/tenmarketing.jpeg"

const WorkExp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <Image src={tenmarketing} alt='' />
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <Image src={abhyaz} alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.second}>
                        <h5 className={styles.time}>SEP. 2023 - DEC. 2023</h5>
                        <h5 className={styles.position}>Junior Front end developer</h5>
                        <h5 className={styles.company}>Ten Marketing</h5>
                        <p className={styles.work}>
                            🤖 Successfully delivered multiple web projects within tight deadlines.
                            <br />
                            🧑🏻‍💻 Proficient in HTML, CSS, JavaScript, and front-end frameworks like React.
                            <br />
                            💻  Strong attention to detail, ensuring pixel-perfect implementation of designs.
                            <br />
                            🙌   Problem-solving skills demonstrated through quick resolution of compatibility issues.
                            <br />
                            🤟   Effective communication and collaboration skills within a diverse team environment.
                        </p>
                    </div>
                    <div className={styles.second}>
                        <h5 className={styles.time}>MAR. 2023 - AUG. 2023</h5>
                        <h5 className={styles.position}>Front end developer</h5>
                        <h5 className={styles.company}>Abhyaz</h5>
                        <p className={styles.work}>
                            🤖 Collaborated with a cross-functional team to design and develop interactive front-end web solutions.
                            <br />
                            🧑🏻‍💻 Implemented responsive design principles, enhancing user experience on various devices.
                            <br />
                            💻  Optimized website performance by reducing load times through efficient coding practices.
                            <br />
                            🙌   Developed reusable UI components, streamlining development and ensuring consistent design.
                            <br />
                            🤟   Enhanced user interface and user experience, resulting in a 20% increase in website engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp