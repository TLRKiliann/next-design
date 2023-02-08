import { useRouter } from 'next/router'
import styles from '@/styles/Contact.module.scss'

const Contact:React.FC = () => {
  const router = useRouter()

  const handleHome = () => {
    router.replace('/')
  }
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>Contact</h2>
        <div className={styles.divcontact}>
          <h3 className={styles.h3xtop}>Cédric Kuchen</h3>
          <h3 className={styles.h3yleft}>Web Developer & Software Programmer</h3>
          <h3 className={styles.h3yright}>cat.3st3ban@gmail.com</h3>
          <h3 className={styles.h3xbottom}>Switzerland</h3>
        </div>
      </div>
    </>
  )
}

export default Contact