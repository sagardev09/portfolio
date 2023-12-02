"use client"
import React, { useState } from 'react'
import styles from "./sidebar.module.css"
import { useRouter, usePathname } from 'next/navigation'

const Sidebar = () => {

    const initialState = {
        home: "#F1F6F9",
        about: "#F1F6F9",
        myblog: "#F1F6F9",
        projects: "#F1F6F9",
        resume: "#F1F6F9",
        contact: "#F1F6F9"
    };

    const [active, setActive] = useState(initialState);
    const path = usePathname()
    const router = useRouter()


    const toggleActive = (item) => {
        // Reset all colors to default
        const resetColors = { ...initialState };

        // Set the active color for the selected item
        resetColors[item] = "#10a5e9";

        // Update the state to reflect the changes
        setActive(resetColors);

        // Use Next.js router to navigate to the selected path
        router.push(`/${item.charAt(0).toUpperCase() + item.slice(1)}`);
    };



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={path === "/" ? styles.homeactive : styles.home} onClick={() => toggleActive('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={path === "/" ? "#10a5e9" : active.home} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div onClick={() => toggleActive('about')} className={path === "/About" ? styles.aboutactive : styles.about}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active.about} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>

                </div>
                <div onClick={() => toggleActive('myblog')} className={path === "/Myblog" ? styles.blogactive : styles.blog}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active.myblog} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>

                </div>
                <div onClick={() => toggleActive('projects')} className={path === "/Projects" ? styles.projectsactive : styles.projects}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active.projects} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>


                </div>
                <div onClick={() => toggleActive('resume')} className={path === "/Resume" ? styles.resumeactive : styles.resume}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active.resume} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>

                </div>
                <div onClick={() => toggleActive('contact')} className={path === "/Contact" ? styles.contactactive : styles.contact}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active.contact} className={styles.svg}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Sidebar