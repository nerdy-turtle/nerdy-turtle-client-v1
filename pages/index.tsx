import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Slider, { Settings } from 'react-slick'

/** components */
import Layout from '../components/Layout'

/** utils */
import { MAX_WIDTH, md, styleMode } from '../styles/styles'
import useWindowSize from '../utils/hooks/useWindowSize'

type Props = styleMode

const Home: NextPage<Props> = ({ toggleStyle, theme }) => {
  const router = useRouter()
  const { locale, defaultLocale, locales } = router
  const reSize = useWindowSize()

  const slickConfig: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 300,
    cssEase: 'linear',
  }

  return (
    <Layout toggleStyle={toggleStyle} theme={theme}>
      <MainWrapper>
        <section className="about">
          <h1>Nerdy Turtle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam vel ut! Quaerat
            iusto omnis at cum vero deserunt molestias, nulla dolore impedit repellat, aliquam eius
            harum dolor veritatis quo facere commodi error molestiae, quasi ipsum consequatur nemo
            corrupti. Nam esse aperiam ratione, odio ullam pariatur amet, veritatis rerum fugit
            officiis quae eius dolor consectetur similique animi provident recusandae minus quasi
            eum! Vero nobis optio illum doloribus error maiores maxime ipsa? Debitis nesciunt est
            nemo, animi voluptates dignissimos asperiores quidem eaque reprehenderit ea minima,
            labore recusandae commodi consectetur facilis. Blanditiis est esse dolorum deleniti
            molestias aut quidem porro cum quam, enim, cupiditate, dignissimos pariatur voluptatum
            eos rem assumenda nobis! Laudantium dolores assumenda esse a ullam, et corporis ipsa
            culpa doloribus, corrupti veritatis distinctio quod est neque exercitationem, enim sint
            similique delectus quam sapiente consectetur architecto aut totam adipisci? Assumenda,
            quos vel. Magni debitis reprehenderit, voluptatum dolor fuga alias, facere voluptas
            dicta nobis nostrum omnis amet ipsa ut odio, nesciunt est aliquid rem temporibus sit sed
            consectetur odit. Blanditiis rerum dicta deserunt molestias at cum ipsa consequatur
            expedita pariatur in deleniti eligendi dolore ex exercitationem, dolor voluptates porro
            quos necessitatibus sequi quod tempora? Id, voluptatibus! Ipsa provident pariatur illum
            consequuntur voluptates?
          </p>
        </section>
        <section className="slick-container">
          {reSize <= +MAX_WIDTH.replace('px', '') ? (
            <Slider {...slickConfig} slidesToShow={3}>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
            </Slider>
          ) : (
            <Slider {...slickConfig} slidesToShow={5}>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
              <div className="slick-item">
                <img src="https://via.placeholder.com/240" alt="240" />
              </div>
            </Slider>
          )}
        </section>
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>
      </MainWrapper>
    </Layout>
  )
}

const MainWrapper = styled.main`
  margin: 5rem auto;
  max-width: ${MAX_WIDTH};

  ${md} {
    margin: 3rem auto;
  }

  .about {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;

      ${md} {
        font-size: 1.25rem;
      }
    }

    p {
      font-size: 1rem;

      ${md} {
        font-size: 0.875rem;
      }
    }
  }

  .slick-container {
    margin: 5rem auto;

    ${md} {
      margin: 3rem auto;
    }

    .slick-slider {
      .slick-list {
        .slick-track {
          display: flex;
          gap: 1rem;

          .slick-item {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`

export default Home
