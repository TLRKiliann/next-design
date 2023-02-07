import { useState } from 'react'
import { myprojects } from './../../data/myprojects'
//import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { FaPython } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiVite } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import styles from '@/styles/Projects.module.scss'

type MyProjectsProps = {
  myprojects: {
    map: any
    id: number
    name: string
    url: string
  }
}

const Projects = () => {
  const router = useRouter()
  const [myprojectsUrl] = useState(myprojects)
  //console.log(myprojectsUrl)
  const handleHome = () => {
    router.replace('/')
  }
  return (
    <>
      <div className={styles.myprojects}>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        
        <h2>Projects</h2>

        <div className={styles.allprojects}>
          {myprojectsUrl.map((myproject: any) => (
            <li key={myproject.id} className={styles.liprojects}>
              <Link
                target="_blank"
                href={`${myproject.url}`}
                rel="noopener noreferrer"
                className={styles.linkprojects}
              >
                <div className={styles.realignlogos}>
                  {myproject.name}
                  {myproject.id === 1 
                  ? <TbBrandNextjs
                      size={32}
                      style={{
                        marginTop: '-3px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} /> 
                    : null
                  }
                  {myproject.id === 2 
                    ? <SiVite
                      size={32}
                      style={{
                        marginBottom: '-7px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} />
                    : null
                  }
                  {myproject.id === 3 
                    ? <div><GrReactjs
                      size={32}
                      style={{
                        marginBottom: '-7px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} /> <SiMongodb 
                      size={32}
                      style={{
                        marginBottom: '-6px',
                        marginLeft: '0px',
                        color: "cyan",
                        opacity: 0.7,                      
                      }}/></div>
                    : null
                  }
                  {myproject.id === 4 
                    ? <FaPython
                      size={32}
                      style={{
                        marginBottom: '-7px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} />
                    : null
                  }
                  {myproject.id === 5 
                    ? <div><FaPython
                      size={32}
                      style={{
                        marginBottom: '-7px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} /> <SiMysql
                      size={32}
                      style={{
                        marginBottom: '-7px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,                      
                      }}/> </div> 
                    : null
                  }
                  {myproject.id === 6 
                    ? <div style={{width: "200px"}}><SiPhp
                      size={38}
                      style={{
                        marginBottom: '5px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }} /> <SiMysql
                        size={32}
                        style={{
                          marginBottom: '10px',
                          marginLeft: '10px',
                          color: "cyan",
                          opacity: 0.7,                      
                        }}/> </div> 
                    : null
                  }
                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects

/*
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/myprojects')
  const data = await response.json()
  return {
    props: {
      myprojects: data
    },
    revalidate: 10
  }
}
*/