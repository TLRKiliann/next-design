import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return ( 
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.5,
        }}
        variants={{
          initialState: { x: -600, opacity: 0 },
          animateState: { x: 0, opacity: 1, ease:'easeOut' },

        }}

      >
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}


/*
import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/