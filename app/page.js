import Image from 'next/image'
import styles from './page.module.css'
import header from "@/public/header.png"
import BlogContent from './Components/BlogContent/BlogContent'
import AchievementCard from './Components/AchievementCard/AchievementCard'

export default function Home() {

  const data = [1, 2, 3]
  const data2 = [1, 2, 3, 4, 5, 6]
  return (
    <main className={styles.main}>
      <div className={styles.headerimg}>
        <Image src={header} alt='header_img' />
      </div>
      <div className={styles.title}>
        <h5>Hi, {"I'm"} </h5>
        <span>Sagar Dabas</span>
      </div>
      <div className={styles.intro}>
        <div className={styles.introtop}>
          <h1>
            I make
            <span className={styles.skills}>
              <span className={styles.skillsBackground}>
              </span>
              Front-End & UI/UX
            </span>
            products that people
            <span className={styles.love}>
              <span className={styles.skillsBackground2}></span>
              love.
            </span>
          </h1>
          <h5>Developer, Content Creator, Indie Hacker, traveller and Student. I play read, write and travel for fun.</h5>
        </div>
      </div>
      <div className={styles.blogSection}>
        <h5>Latest Articles</h5>
        <BlogContent />
      </div>
      <div>
        <h5 className={styles.achivementtitle}>
          Achievements
        </h5>
        <div className={styles.AchievementCard}>
          {data.map((item, index) => {

            return (

              <AchievementCard key={index} pic={header} title={"muh hackathon"} />
            )
          })
          }
        </div>
        <div>
          <h5 className={styles.achivementtitle}>
            Some Of My Projects
          </h5>
          <div className={styles.AchievementCard}>
            {data2.map((item, index) => {

              return (

                <AchievementCard key={index} pic={header} title={"muh hackathon"} />
              )
            })
            }
          </div>
        </div>
      </div>
    </main>
  )
}
