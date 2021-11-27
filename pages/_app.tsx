import React, { useCallback, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, TypeOfTheme } from '../styles/styles'
import themes from '../styles/themes'

import 'antd/dist/antd.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<TypeOfTheme>('dark')

  const toggleStyle = useCallback(
    (mode: TypeOfTheme) => {
      localStorage.setItem('theme', mode)
      setTheme(mode)
    },
    [theme]
  )

  useEffect(() => {
    const getTheme = localStorage.getItem('theme') as TypeOfTheme | null

    if (getTheme) {
      setTheme(getTheme)
    }
  }, [theme])

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Component {...pageProps} toggleStyle={toggleStyle} theme={theme} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
