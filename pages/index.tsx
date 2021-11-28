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

const Home: NextPage<Props> = ({ toggleStyle, theme }) => {
  const router = useRouter()
  const { locale } = router
  const textArr =
    locale === 'ko' ? ['나', '너', '우리', '홀더', '널디'] : ['Me', 'You', 'We', 'Holder', 'Nerdy']
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
          {locale === 'ko' ? (
            <>
              <p>
                <span>{textArr[increase]}</span>를 위한 [널디 모임]에 오신걸 환영합니다.
              </p>
              <p>
                새로운 도전을 무서워하는 널디들이 모여서 두려움을 극복하고자 새로운 도전을
                시작합니다.
              </p>
              <p>
                귀엽고, 매력있고 고유한 10,000개의 수집 가능한 거북이들은 클레이튼 블록체인에
                저장되어있습니다.
              </p>
              <p>동양에서는 거북이가 지혜와 제물을 가져다준다는 재미있는 이야기가 있습니다. </p>
              <p>
                또한 해양 생태계 위기에서 영감을 얻었고 널디터틀은 디지털 아트 및 수집품을 지원하는
                KIP-17 표준을 활용합니다.
              </p>
              <p>
                그리고 Nerdy Turtles는 생태계 안에서 모임과 소통을 활성화하기 위해 사용될 것입니다.
              </p>
              <p>그리고 이 친구들은 매우 귀여워요. 👀</p>
            </>
          ) : (
            <>
              <p>
                Welcome to the [Nerdy Meetings] for <span>{textArr[increase]}</span>.
              </p>
              <p>
                Nerds who always gets afraid of new challenges have gathered and are starting new
                challenges to overcome fear.
              </p>
              <p>
                The 10,000 collectible turtles, which are cute, attractive and unique, are stored in
                the Clayton blockchain.
              </p>
              <p>
                In the East, there is an interesting story that turtles bring wisdom and wealth.
              </p>
              <p>
                Nerdy Turtles were also inspired by the marine ecosystem crisis, and it utilizes the
                KIP-17 standard that supports digital art and collections.
              </p>
              <p>
                And Nerdy Turtles will be used to boost meetings and communication within the
                ecosystem.
              </p>
              <p>And they are super cute. 👀</p>
            </>
          )}
        </section>
        <section className="slick-container">
          {reSize <= +MAX_WIDTH.replace('px', '') ? (
            <Slider {...slickConfig} slidesToShow={3}>
              {Array(10)
                .fill('')
                .map((_, index) => (
                  <div className="slick-item" key={index}>
                    <img src={`/static/img/nerdy_${index + 1}.png`} alt="240" />
                  </div>
                ))}
            </Slider>
          ) : (
            <Slider {...slickConfig} slidesToShow={5}>
              {Array(10)
                .fill('')
                .map((_, index) => (
                  <div className="slick-item" key={index}>
                    <img src={`/static/img/nerdy_${index + 1}.png`} alt="240" />
                  </div>
                ))}
            </Slider>
          )}
        </section>
        <section id="gallery" className="gallery">
          <div className="section-description">
            <h1>Gallery</h1>
          </div>
          <div className="container">
            {Array(16)
              .fill('')
              .map((_, index) => (
                <div className="item" key={index}>
                  <img src={`/static/img/nerdy_${index + 11}.png`} alt="240" />
                </div>
              ))}
          </div>
        </section>
        <section id="roadmap" className="roadmap">
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
                description={locale === 'ko' ? '모든 민팅 완료' : 'Minting complete'}
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '굿즈' : 'Goods'}
                description={
                  locale === 'ko'
                    ? '홀더에게 널디 케이스 & 그립톡 제공'
                    : 'Provide Nerdy cases&pop grip to holders'
                }
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '토큰' : 'Token'}
                description={
                  locale === 'ko'
                    ? '자체 토큰 개발도 가능하며 진행 상황에 따라 홀더와 커뮤니케이션을 통해 여러가지 길을 열어둘것입니다.'
                    : 'We are planning to develop our own tokens, and we will keep the possibilities open for various options through communication with the holder depending on the progress.'
                }
              />
              <Steps.Step
                title={locale === 'ko' ? '진행예정' : 'Waiting'}
                subTitle={locale === 'ko' ? '생태계 활성화' : 'Vitalize the ecosystem.'}
                description={
                  locale === 'ko'
                    ? '생태계 구성에 필요한 기획이나 아이디어는 모여 하나의 큰 생태계를 디벨롭하게 될 것 입니다.'
                    : 'Plans and ideas needed to construct the ecosystem will gather to build a large ecosystem.'
                }
              />
            </Steps>
          </div>
        </section>
        <section id="team" className="team">
          <div className="section-description">
            <h1>Team</h1>
            <p>
              {locale === 'ko'
                ? '하늘을 나는 거북이라고 들어봤어? 🐢'
                : 'Heard of flying turtles? 🐢'}
            </p>
            <p>{locale === 'ko' ? '그게 우리야 🚀' : 'That’s us 🚀'}</p>
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
                <div className="title">Luke</div>
                <div className="job">Developer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-4" />
              </div>
              <div className="content">
                <div className="title">Michol</div>
                <div className="job">Developer</div>
              </div>
            </div>
            <div>
              <div className="image">
                <img src="https://via.placeholder.com/180" alt="team-5" />
              </div>
              <div className="content">
                <div className="title">Chris</div>
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

  .gallery {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;

      ${md} {
        grid-template-columns: 1fr 1fr;
      }

      .item {
        img {
          width: 100%;
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
