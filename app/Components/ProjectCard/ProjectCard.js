import React from 'react'
import styles from "./projectcard.module.css"
import Link from 'next/link'
import Image from 'next/image'
import arrow from "@/public/arrow.svg"
import link from '@/public/link.svg'

const ProjectCard = ({ pic, title, github, live }) => {
    return (
        <div>
            <div className={styles.container} style={{

                backgroundImage: `url(${pic.src})`
            }}>
                <h5 className={styles.title}>{title}</h5>
                <Link href={github} className={styles.github}>
                    <Image src={arrow} alt='' />
                </Link>
                <Link href={live} className={styles.link}>
                    <Image src={link} alt='' />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard