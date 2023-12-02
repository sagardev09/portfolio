import React from 'react'
import styles from "./resume.module.css"
import WorkExp from '../Components/WorkExp/WorkExp'
import Education from '../Components/Education/Education'

const Resume = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>my resume</h1>
                    <div className={styles.edu}>
                        <h5 className={styles.worktitle}>Education</h5>
                        <Education />
                    </div>
                    <div className={styles.work}>
                        <h5 className={styles.worktitle}>Work Experience</h5>
                        <WorkExp />
                    </div>
                </div>
                <div className={styles.right}>
                    right
                </div>
            </div>
        </div>
    )
}

export default Resume