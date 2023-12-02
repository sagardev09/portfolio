import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'

const AchievementCard = ({ pic, title, style }) => {
    return (
        <div className={styles.container} style={{

            backgroundImage: `url(${pic.src})`
        }}>

            <h5 className={styles.title}>Securing a Spot in the Finals of {"Unstop's"} Hackathon Round 2!</h5>
        </div>
    )
}

export default AchievementCard