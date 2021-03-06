import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Head from 'next/head'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <AuthProvider>
          <Head>
            <title>Dashgo</title>
          </Head>
          <Component {...pageProps} />
        </AuthProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
