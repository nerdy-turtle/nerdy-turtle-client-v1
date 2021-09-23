import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { styleMode } from '../styles/styles'

type Props = styleMode

const Home: NextPage<Props> = ({ toggleStyle, theme }) => {
  const router = useRouter()
  const { locale, defaultLocale, locales } = router
  return (
    <Layout toggleStyle={toggleStyle} theme={theme}>
      <DivWrapper>
        <main className="main">
          <p>Current locale: {locale}</p>
          <p>Default locale: {defaultLocale}</p>
          <p>Configured locales: {JSON.stringify(locales)}</p>
          <div className="grid">
            <a className="card" href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a className="card" href="https://nextjs.org/learn">
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a className="card" href="https://github.com/vercel/next.js/tree/master/examples">
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              className="card"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </main>
      </DivWrapper>
    </Layout>
  )
}

const DivWrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 45%;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`

export default Home
