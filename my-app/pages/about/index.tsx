import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {
  
  const router = useRouter()

  const handleHome = () => {
    router.replace('/')
  }
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.divbtn}>
          <button type="button" onClick={handleHome}>
            Go back to home
          </button>
        </div>
        <h2>About</h2>
        <div className={styles.articles}>
          <h3 className={styles.h3}>Premier défi permier exploit !</h3>
          <hr />
          <p className={styles.paragraphabout}>
            Mon premier défi a été de monter mon pc pour pouvoir jouer à un MMO-RPG.
            Après plusieurs heures de jeux, j'ai voulu comprendre le fonctionnement
            de mon ordinateur. Pour ce faire je suis passé de Windows 10 à Linux.
            Ensuite, je me suis demandé comment interagir avec des SI. Pour cela, j'ai 
            compris qu'il me fallait apprendre le code. A partir de ce moment-là, 
            j'ai appris HTML, CSS, PhP, MySQL. J'ai transformé mon raspberry en serveur, 
            grâce à Apache2 afin de rendre mon site accessible en WAN avec HTTPS.
          </p>
        </div>

        <div className={styles.articles}>
          <h3 className={styles.h3}>Premier défi permier exploit !</h3>
          <hr />
          <p className={styles.paragraphabout}>
            Je me suis également intéressé aux réseaux internet. J'ai donc suivi des 
            cours sur openclassroom. La création de machines virtuelles avec réseaux 
            virtuels sur Virtualbox m'a permis de mieux comprendre le fonctionnement des 
            réseaux. J'ai également une expérience avec Kalilinux sur rootme et hackthebox 
            pour me faire une meilleure représentation de la sécurité. Aussi, j'ai trouvé 
            amusant de faire mes propres packet internet avec Scapy et d'observer leur
            contenu avec TCPdump (wireshark), comment déchiffrer un mot de passe, etc.
          </p>
        </div>

        <div className={styles.articles}>
          <h3 className={styles.h3}>Premier défi permier exploit !</h3>
          <hr />
          <p className={styles.paragraphabout}>
            J'ai également voulu faire une Web App sans framework avec python3 et tkinter.
            L'idée était de faire une application améliorée pour le personnel soignant qui
            incorpore des alarmes, agenda, rappel des dates d'arrêt des posologies
            médicamenteuses, signes vitaux, tableau récapitulatifs des maladies 
            transmissbiles, allergies, etc.
          <br />
            La réalisation de ce projet, c'est faite grace à une base de données MySQL, et à une connexion SSH 
            sur Raspberry pi 3b (configuration du firewall serveur-client avec clefs asymétriques et SCP pour
            SSH).  
          </p>
        </div>

        <div className={styles.articles}>
          <h3 className={styles.h3}>Premier défi permier exploit !</h3>
          <hr />
          <p className={styles.paragraphabout}>
            J'ai également appris quelques framework tels que React, Vite, Next.js,
            pour faire des applications/sites web en JavaScript avec TypeScript et
            apprendre comment utiliser les divers style systems.
          <br />
            Ces notions m'ont permis de faire des applications e-commerce, chat avec base de données
            MySQL, des API avec openWeathermap.com, typicode.com.
          </p>
        </div>

        <div className={styles.articles}>
          <h3 className={styles.h3}>Premier défi permier exploit !</h3>
          <hr />
          <p className={styles.paragraphabout}>
            Actuellement en reconversion professionnelle, je souhaite faire de ma passion
            un métier et continuer de faire évoluer mes compétences avec des pros au sein d'une
            entreprise.
          </p>
        </div>

      </div>
    </Layout>
  )
}

export default About