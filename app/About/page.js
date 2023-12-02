import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import self from "@/public/self.jpg"
import Link from 'next/link'
import Connect from '../Components/Connect/Connect'
import WorkExp from '../Components/WorkExp/WorkExp'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div>
                        <h1 className={styles.heading}>
                            Hi. {"I'm "}Sagar
                            <span className={styles.twitter}>
                                <span className={styles.subtwitter}></span>
                                <Link href={"https://twitter.com/Sagar__Dev"}>
                                    @Sagar__dev
                                </Link>
                            </span>
                            Dabas
                            🤟
                        </h1>
                    </div>
                    <div className={styles.image}>
                        <Image src={self} alt='self' />
                    </div>
                    <div className={styles.bio}>
                        <h5>Short Bio</h5>
                        <p>
                            {"I'm"} a product maker (UI/UX designer and front-end developer) currently based in Haryana, India.{" I'm "}passionate about building products that help people and make a difference in the world. {"I'm"} also a big fan of open source software - which is why
                            <span className={styles.github}>
                                <Link href={"https://github.com/sagardev09"}>
                                    almost everything I build is open source!
                                </Link>
                            </span>
                            I also love educating others about technology and programming, which is why {"I'm"} a
                            <span className={styles.github}>
                                <Link href={"https://www.instagram.com/codeanddesignpro/"}>
                                    content creator
                                </Link>
                            </span>
                            and write blogs in my free time.
                            I mainly write code in the
                            <span className={styles.github}>
                                <Link href={"https://create.t3.gg/"}>
                                    T3 Stack
                                </Link>
                            </span>

                        </p>
                    </div>
                    <div className={styles.work}>
                        <h5 className={styles.worktitle}>Work Experience</h5>
                        <WorkExp />
                    </div>
                    <div className={styles.connect}>
                        <Connect />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>right</h1>
                </div>

            </div>
        </div>
    )
}

export default About