import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter() as any
  return (
    <div style={{position: "fixed", width:"100%", overflow: 'hidden'}}>
      <AnimatePresence exitBeforeEnter>
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


/*
import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/