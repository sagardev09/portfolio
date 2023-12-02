"use client"
import React, { useState, useEffect } from 'react'
import LatestBlog from '../LatestBlog/LatestBlog'
import StoryBlog from '../StoriesBlog/StoryBlog'
import CodingBlog from '../CodingBlog/CodingBlog'
import TutorialBlog from '../TutorialBlog/TutorialBlog'
import styles from "./blogcontent.module.css"


const BlogContent = () => {
    const [latest, setlatest] = useState(false)
    const [stories, setstories] = useState(false)
    const [tutorial, settutorial] = useState(false)
    const [coding, setcoding] = useState(false)

    useEffect(() => {
        setlatest(true)
    }, [])



    const handlelatest = () => {
        setlatest(true)
        setstories(false)
        settutorial(false)
        setcoding(false)
    }
    const handlestory = () => {
        setlatest(false)
        setstories(true)
        settutorial(false)
        setcoding(false)
    }
    const handletutorial = () => {
        setlatest(false)
        setstories(false)
        settutorial(true)
        setcoding(false)
    }
    const handlecoding = () => {
        setlatest(false)
        setstories(false)
        settutorial(false)
        setcoding(true)
    }
    return (
        <div>
            <div className={styles.categoryContainer}>
                <div onClick={handlelatest} className={latest ? styles.latestactive : styles.latest}>
                    <h5 className={styles.titleCategory}>Latest</h5>
                </div>
                <div onClick={handlestory} className={stories ? styles.storyactive : styles.story}>
                    <h5 className={styles.titleCategory}>Stories</h5>
                </div>
                <div onClick={handletutorial} className={tutorial ? styles.tutorialactive : styles.tutorial}>
                    <h5 className={styles.titleCategory}>Tutorial</h5>
                </div>
                <div onClick={handlecoding} className={coding ? styles.codingactive : styles.coding}>
                    <h5 className={styles.titleCategory}>
                        Coding
                    </h5>
                </div>
            </div>
            <div>
                {
                    latest ? <LatestBlog /> : null || stories ? <StoryBlog /> : null || tutorial ? <TutorialBlog /> : null || coding ? <CodingBlog /> : null
                }
            </div>
        </div>
    )
}

export default BlogContent