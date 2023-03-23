import '../dist/css/app.css';

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const hasCookie = Cookies.get('SMARTPATROL')

    console.log(hasCookie)

    if (!hasCookie) {
      router.push('/auth/login')
    }
  }, [Cookies.get('SMARTPATROL')])

  return <Component {...pageProps} />
}
