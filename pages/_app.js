import '../styles/globals.css'
import { Provider, createClient } from 'urql'
import Nav from '../components/nav'
import { StateContext } from '../lib/context'
const { AnimatePresence } = require('framer-motion')
import { UserProvider } from '@auth0/nextjs-auth0'
import { Toaster } from 'react-hot-toast'

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API })

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AnimatePresence>
        <StateContext>
          <Provider value={client}>
            <Toaster />
            <Nav />
            <Component {...pageProps} />
          </Provider>
        </StateContext>
      </AnimatePresence>
    </UserProvider>
  )
}

export default MyApp
