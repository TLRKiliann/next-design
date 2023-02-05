import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

type MyurlsProps = {
  myurls: {
    id: number | null
    name: string
    url: string
  }
}

const Home:React.FC = ({myurls}: MyurlsProps) => {
  //console.log(myurls)
  return (
    <>
      <Head>
        <title>Portfolio Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.firstcontainer}>
          <h1 className={styles.titlehome}>
            Portfolio
          </h1>

          <div className={styles.linkcontainer}>

            <div className={styles.homelinks}>
              <li className={styles.li}>
                <Link
                  href="/about"
                  className={styles.link}
                >
                  🌺 About
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="/skills"
                  className={styles.link}
                >
                  🌺 Skills
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="/projects"
                  className={styles.link}
                >
                  🌺 Projects
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="/gallery"
                  className={styles.link}
                >
                  🌺 Gallery
                </Link>
              </li>

              <li className={styles.li}>
                <Link
                  href="/contact"
                  className={styles.link}
                >
                  🌺 Contact
                </Link>
              </li>
            </div>

            <div className={styles.secondhomelinks}>
              {myurls.map((myurl: any) => (
                <li key={myurl.id} className={styles.li}>
                  <Link
                    target="_blank" 
                    href={`${myurl.url}`}
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {myurl.name}
                  </Link>
                </li>
              ))}
            </div>

          </div>

          <div>
            <div className={styles.divimg}>
              <Image 
                src="/next.svg" 
                width="100"
                height="100"
                alt="no img next"
                className={styles.img}
              />
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/myurls")
  const data = await response.json()
  return {
    props: {
      myurls: data,
    }
  }
}
