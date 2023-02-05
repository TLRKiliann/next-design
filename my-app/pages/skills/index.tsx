import { useRouter } from 'next/router'
import styles from '@/styles/Skills.module.scss'

const Skills:React.FC = () => {
  const router = useRouter()

  const handleHome = () => {
    router.replace('/')
  }
  return (
    <>
      <div>
        <div>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>Skills</h2>
      </div>
    </>
  )
}

export default Skills