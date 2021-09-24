import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { styleMode } from '../styles/styles'

interface Props extends styleMode {
  children?: ReactNode
  title?: string
  description?: string
  imageUrl?: string
}

const Layout = ({
  children,
  title = 'Nerdy Turtle',
  description = '',
  imageUrl = '',
  toggleStyle,
  theme,
}: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* content="article"은 기사, 뉴스소식, 블로그 게시물에 대한 설정 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://nerdyturtlenft.com/`} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* 선호 URL */}
        <link rel="canonical" href="https://nerdyturtlenft.com/"></link>
        {/* favicon */}
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <Header toggleStyle={toggleStyle} theme={theme} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
