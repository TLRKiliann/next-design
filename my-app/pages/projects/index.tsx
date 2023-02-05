import { useRouter } from 'next/router'
import styles from '@/styles/Projects.module.scss'

const Projects:React.FC = () => {
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
        <h2>Projects</h2>
      </div>
    </>
  )
}

export default Projects