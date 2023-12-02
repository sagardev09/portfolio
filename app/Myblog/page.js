import React from 'react'
import styles from "./myblog.module.css"
import BlogContent from '../Components/BlogContent/BlogContent'

const Blog = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <h1 className={styles.heading}>
                        My blog
                    </h1>
                </div>
                <div>
                    <BlogContent />
                </div>
            </div>
        </div>
    )
}

export default Blog