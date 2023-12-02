import React from 'react'
import styles from "./projects.module.css"
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import header from "@/public/header.png"
import projectsData from '../data/project'

const Projects = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div>
                        <h1 className={styles.heading}>Personal Projects</h1>
                    </div>
                    <div className={styles.projectcontainer}>
                        {projectsData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ProjectCard pic={header} title={item.projectName} github={item.githubLink} live={item.liveLink} />
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className={styles.right}>
                    right
                </div>
            </div>
        </div>
    )
}

export default Projects