import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '@/styles/Gallery.module.scss'

const Gallery:React.FC = () => {
  const router = useRouter()

  const handleHome = () => {
    router.replace('/')
  }
  return (
    <Layout>
      <div className={styles.gallery}>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>Gallery</h2>

        <div className={styles.gridgallery}>

        </div>

      </div>
    </Layout>
  )
}

export default Gallery