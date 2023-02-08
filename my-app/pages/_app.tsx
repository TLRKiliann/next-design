import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/globals.scss'
//import {Layout} from './../components/Layout'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter() as any

  return (
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      variants={{
        initialState:{ y: 40, opacity: 0 },
        animateState:{ y: 0, opacity: 1 },
        exitState:{ y: 40, opacity: 0 },
      }}
      transition={{
        duration: 0.75,
      }}
    >
      <Component {...pageProps}/>
    </motion.div>
  )
}


/*

      <AnimatePresence
        initial={false}
        exitBeforeEnter
      >

import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

  return (
    <div style={{overflow: 'hidden'}}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState:{ y: 40, opacity: 0 },
            animateState:{ y: 0, opacity: 1 },
            exitState:{ y: 40, opacity: 0 },
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <Component {...pageProps}/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
*/