import { useState } from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'
import styles from '@/styles/Skills.module.scss'

const Skills:React.FC = () => {
  const router = useRouter()
  
  const [switchBtn, setSwitchBtn] = useState<boolean>(false)

  const handleHome = () => {
    router.replace('/')
  }
  
  const handleClickSkills = ({children}: any) => {
    setSwitchBtn(switchBtn => !switchBtn)
  }
  return (
    <>
      <div className={styles.skills}>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>Skills</h2>

        {!switchBtn ? (
          <div>
            <div className={styles.sectionone}>

              <div className={styles.titlebtncontainer}>
                <h3 className={styles.firsttitle}>
                  Hard Skills
                </h3>
                <button type='button'
                  onClick={handleClickSkills}
                  className={styles.btnhard}
                >
                  Soft Skills
                </button>
              </div>

              <hr />

              <div className={styles.mainblocdiv}>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Code :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Python3
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        HTML
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        JavaScript
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        TypeScript
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Styles :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        CSS
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Sass
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Bootstrap
                      </a>
                    </li>

                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Tailwind (-)
                      </a>
                    </li>

                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Database :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        MySQL
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Mongoose
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Json-server
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        API REST + RESTFull
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Framework :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        React
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Vite
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Next.js
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Angular (-)
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Testing :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        React testing library
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Jest
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Vitest
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Cypress
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h3 className={styles.h3titlesubblock}>
                    Security :
                  </h3>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Attestation ANSSI
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Kalilinux
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Les bonnes pratiques
                      </a>
                    </li>
                  </div>
                </div>

              </div>
            </div>
          </div>

          ) : (

          <div className={styles.sectiontwo}>
            <div className={styles.secondtitlebtncontainer}>
              <h3 className={styles.secondtitle}>
                Softs Skills
              </h3>
              <button type='button'
                onClick={handleClickSkills}
                className={styles.btnsoft}
              >
                Hard Skills
              </button>
            </div>

            <hr />

            <div className={styles.softdiv}>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Esprit d'analyse.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Esprit de conceptualisation.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Sensible à la sécurité des SI.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Capacité à se remettre en question.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Sens de l'organisation.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Personnalité calme et empathique.
                  </a>
                </li>
              </div>
            </div>
          </div>
          )
        }
      </div>
    </>
  )
}

export default Skills
