import { useRouter } from 'next/router'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {
  
  const router = useRouter()

  const handleHome = () => {
    router.replace('/')
  }
  return (
    <>
      <div>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>About</h2>
      </div>
    </>
  )
}

export default About