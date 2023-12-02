import React from 'react'
import styles from "./education.module.css"
import Image from 'next/image'
import sgt from "@/public/sgt.webp"
import kv from "@/public/kv.jpeg"

const Education = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <Image src={sgt} alt='' />
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <Image src={kv} alt='' />
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.second}>
                        <h5 className={styles.time}>SEP. 2022 - PRESENT</h5>
                        <h5 className={styles.position}>Btech in Computer science</h5>
                        <h5 className={styles.company}>Sgt University , Gurgaon</h5>
                        <p className={styles.work}>
                            During my time at SGTU, I jumped into a lively learning scene with awesome teachers and talented classmates. SGTU is all about sparking creativity and leadership, which I totally love. I took part in their hackathons 🚀, enjoyed the cool coding vibe 💻, and even joined hackathons in other states 🌐. I also hopped into tech clubs and other groups, showing off how our college loves new ideas and working together 🤝. College {"wasn't"} just about classes; it was like a fun adventure where I learned cool stuff and worked on problems with my friends 🎓✨.
                        </p>
                    </div>
                    <div className={styles.second}>
                        <h5 className={styles.time}>MAY. 2010 - MAR. 2022</h5>
                        <h5 className={styles.position}>Schooling</h5>
                        <h5 className={styles.company}>Kendriya Vidyalaya</h5>
                        <p className={styles.work}>
                            Rocked in school! 🚀  loved learning and tackled different subjects with excitement and hard work. 📚✨
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education