import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Slider, { Settings } from 'react-slick'

/** components */
import Layout from '../components/Layout'
import { Steps } from 'antd'

/** utils */
import { MAX_WIDTH, md, styleMode } from '../styles/styles'
import useWindowSize from '../utils/hooks/useWindowSize'
import { useEffect, useState } from 'react'

type Props = styleMode

const textArr = ['나', '너', '우리', '홀더', '널디']

const Home: NextPage<Props> = ({ toggleStyle, theme }) => {
  const router = useRouter()
  const { locale } = router
  const reSize = useWindowSize()
  const [increase, setIncrease] = useState<number>(0)

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (increase + 1 >= textArr.length) {
        setIncrease(0)
      } else {
        setIncrease(increase + 1)
      }
    }, 1500)

    return () => clearTimeout(timeout)
  }, [increase])

  return (
    <Layout toggleStyle={toggleStyle} theme={theme}>
      <MainWrapper>
        <section id="about" className="about">
          <p>
            <span>{textArr[increase]}</span>를 위한 널디 모임에 오신걸 환영합니다.
          </p>
          <p>새로운 도전을 무서워 하는 널디들이 모여 새로운 도전을 하는 널디 모임입니다.</p>
          <p>클레이튼 블록체인에 저장된 10,000개의 고유한 수집 가능한 거북이 친구들 입니다.</p>
          <p>
            동양에서의 거북이는 지혜와 제물을 가져다주는 재밌는 이야기와 해양 생태계에 영감을
            받았으며 디지털 아트 및 수집품을 지원하는 KIP-17 표준을 활용합니다.
          </p>
          <p>생태계에서의 모임과 소통 활성화에 널디한 거북이 친구들을 접목시키고자 합니다.</p>
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
        <section className="roadmap">
          <div className="section-description">
            <h1>Roadmap</h1>
          </div>
          <div className="container">
            <Steps current={0} percent={30} responsive>
              {/* {locale === "ko" ? "진행예정" : "Waiting"}
              {locale === "ko" ? "진행중" : "In Progress"}
              {locale === "ko" ? "완료" : "Completion"} */}
              <Steps.Step
                title={locale === 'ko' ? '진행중' : 'In Progress'}
                subTitle={locale === 'ko' ? '민팅' : 'Minting'}
                description={locale === 'ko' ? '모든 민팅 완료' : 'All minting is done'}
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '굿즈' : ''}
                description={locale === 'ko' ? '홀더에게 널디 케이스 & 그립톡 제공' : ''}
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '토큰' : 'Token'}
                description={
                  locale === 'ko'
                    ? '자체 토큰 개발도 가능하며 진행 상황에 따라 홀더와 커뮤니케이션을 통해 여러가지 길을 열어둘것입니다.'
                    : ''
                }
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '생태계 활성화' : 'Vitalize the ecosystem.'}
                description={
                  locale === 'ko'
                    ? '생태계 구성에 필요한 기획이나 아이디어는 모여 하나의 큰 생태계를 디벨롭하게 될 것 입니다.'
                    : ''
                }
              />
            </Steps>
          </div>
        </section>
        <section className="team">
          <div className="section-description">
            <h1>Team</h1>
            <p>하늘을 나는 거북이라고 들어봤어? 🐢</p>
            <p>그게 우리야 🚀</p>
          </div>
          <div className="container">
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-1" />
              </div>
              <div className="content">
                <div className="title">Agent K</div>
                <div className="job">Marketer & Writer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-2" />
              </div>
              <div className="content">
                <div className="title">Shindy</div>
                <div className="job">Designer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-3" />
              </div>
              <div className="content">
                <div className="title">Gatsby</div>
                <div className="job">Developer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-4" />
              </div>
              <div className="content">
                <div className="title">Soon</div>
                <div className="job">Developer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-5" />
              </div>
              <div className="content">
                <div className="title">Kevin</div>
                <div className="job">Data Engineer</div>
              </div>
            </div>
          </div>
        </section>
      </MainWrapper>
    </Layout>
  )
}

const MainWrapper = styled.main`
  padding-top: 7rem;
  margin: 0 auto 5rem;
  max-width: ${MAX_WIDTH};

  ${md} {
    padding: 5rem 1rem 0;
    margin: 0 auto 3rem;
  }

  p {
    margin: 0;
  }

  section {
    margin: 5rem auto;

    ${md} {
      margin: 3rem auto;
    }

    .section-description {
      padding: 3rem 0 1rem;
      font-size: 1.25rem;

      ${md} {
        font-size: 1rem;
      }
    }
  }

  .about {
    p {
      font-size: 1.25rem;

      ${md} {
        font-size: 1rem;
      }
    }
  }

  .slick-container {
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

  .roadmap {
    .container {
      padding: 2rem 0 0;
    }
  }

  .team {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      gap: 2rem;

      ${md} {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      > div {
        border: 1px solid #ababab;
        .image {
          img {
            width: 100%;
            object-fit: contain;
          }
        }

        .content {
          padding: 1rem 1rem;
          display: inline-flex;
          flex-flow: column nowrap;
          gap: 1rem;
          .title {
            font-size: 1.25rem;

            ${md} {
              font-size: 1rem;
            }
          }

          .job {
            font-size: 1rem;

            ${md} {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`

export default Home
