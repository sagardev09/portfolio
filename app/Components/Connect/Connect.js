import React from 'react'
import styles from "./connect.module.css"
import Link from 'next/link'

const Connect = () => {
    return (
        <div className={styles.container}>
            <h5>{"Let's"} Connect</h5>
            <p>{"I'm"} excited to connect with others via
                <span className={styles.span}>
                    <Link href={"#"}>
                        email (official.sagar.dev@gmail.com)
                    </Link>
                </span>
                and
                <span className={styles.span}>
                    <Link href={"https://twitter.com/Sagar__Dev"}>
                        Twitter
                    </Link>
                </span>
                to chat about projects and ideas. Currently,{" I'm "}taking on freelance projects via
                <span className={styles.span}>
                    <Link href={"https://www.fiverr.com/sagardev09"}>
                        fiverr
                    </Link>

                </span>
                , I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if{" it's"} a good fit.</p>
        </div>
    )
}

export default Connect