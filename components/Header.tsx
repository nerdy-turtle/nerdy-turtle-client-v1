import styled, { keyframes } from 'styled-components'
import React, { useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MAX_WIDTH, md, opacityHex, styleMode } from '../styles/styles'
import { Select } from 'antd'

/** components */
import DarkModeToggle from './DarkModeToggle'

type Props = styleMode

const Header: React.FC<Props> = ({ toggleStyle, theme }) => {
  const header = useRef<HTMLElement>(null)
  const router = useRouter()
  const { locale } = router

  const handler = useCallback(() => {
    if (!header.current) return
    const scrollPos = window.scrollY

    if (scrollPos > 10) {
      header.current.classList.add('scrolled')
    } else {
      header.current.classList.remove('scrolled')
    }
  }, [])

  const onHrefClick = () =>
    ((document.querySelector('#menu-btn') as HTMLInputElement).checked = false)

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])
  return (
    <>
      <HeaderWrapper ref={header}>
        <div className="header">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="../static/logo.png" alt="logo" width={48} />
                <span>Nerdy Turtle</span>
              </a>
            </Link>
          </div>
          <input type="checkbox" name="menu-btn" id="menu-btn" className="menu-btn" />
          <label htmlFor="menu-btn" className="menu-icon">
            <span className="menu-icon-line"></span>
          </label>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <Link href="#about">
                    <a onClick={onHrefClick}>About</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="#gallery">
                    <a onClick={onHrefClick}>Gallery</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="#roadmap">
                    <a onClick={onHrefClick}>Roadmap</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="#team">
                    <a onClick={onHrefClick}>Team</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom-form">
              <div className="btn transparent">
                <Select
                  defaultValue={locale}
                  style={{ width: 'auto' }}
                  onChange={(value) =>
                    router.push(router.pathname, router.pathname, { locale: value })
                  }>
                  <Select.Option value="en">English</Select.Option>
                  <Select.Option value="ko">한국어</Select.Option>
                </Select>
              </div>
              <div className="btn solid">
                <DarkModeToggle toggleStyle={toggleStyle} theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  )
}

/** styled components */
const pulse = keyframes`
  from {
    box-shadow: 0 0 0 0px rgba(255,255,255, .6);
    background: rgba(255,255,255,.6);
  }
  to {
    box-shadow: 0 0 0 1000px rgba(255,255,255, 0);
    background: rgba(255,255,255,0);
  }
`

const Mid = keyframes`
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`
const Top = keyframes`
  0% {
    transform: translateY(-5px) rotate(0deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(0px) rotate(90deg);
  }
`
const Bottom = keyframes`
  0% {
    transform: translateY(5px) rotate(0deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(0px) rotate(90deg);
  }
`
const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeaderWrapper = styled.header`
  font-size: 1rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.75rem;
  width: 100vw;
  color: #000;
  z-index: 2;
  transition: 0.4s ease-out;
  margin: 0 auto;

  background-color: ${({ theme }) => `${theme.body}${opacityHex._80}`};

  ${md} {
    margin: 0;
    padding: 0 1rem;
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    width: 100%;

    ${md} {
      justify-content: space-between;
    }

    &.scrolled {
      min-height: 5rem;
      background: ${({ theme }) => `${theme.body}${opacityHex._90}`};
      color: ${({ theme }) => theme.text};
      .menu-icon {
        .menu-icon-line,
        .menu-icon-line::before,
        .menu-icon-line::after {
          background-color: ${({ theme }) => theme.text};
        }
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .logo {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        color: ${({ theme }) => theme.text};
        margin-left: 1rem;
        font-weight: bold;
      }
    }

    .nav-btn {
      flex: 3;

      display: flex;

      ${md} {
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.body};
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow-x: hidden;
        overflow-y: auto;
        transform: translateX(100%);
        transition: 0.65s;
      }

      .nav-links {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        ${md} {
          flex: initial;
          justify-content: center;
          width: 100%;
        }

        > ul {
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          ${md} {
            width: 100%;
            flex-direction: column;
          }

          .nav-link {
            position: relative;
            transition: 0.4s ease-out;

            ${md} {
              width: 100%;
              opacity: 0;
              transform: translateY(15px);
              &:hover {
                .arrow {
                  background-color: #707070;
                }
                > a > svg {
                  transform: rotate(360deg);
                }
              }
            }

            > a {
              position: relative;
              color: ${({ theme }) => theme.text};
              padding: 0.5em 0.8rem;
              line-height: 2rem;
              font-size: 0.95rem;
              letter-spacing: 1px;

              ${md} {
                color: ${({ theme }) => theme.text};
                line-height: 1;
                padding: 1.6rem 2rem;
                display: flex;
                justify-content: space-between;
              }

              > svg {
                transform: rotate(0deg);
                transition: 0.7s ease-out;
              }

              &:after {
                content: '';
                width: 0;
                position: absolute;
                height: 2px;
                display: block;
                margin-top: 5px;
                right: 0;
                top: 100%;
                background-color: ${({ theme }) => theme.text};
                transition: width 0.4s ease;
              }

              &:hover {
                color: ${({ theme }) => theme.hover};
              }
            }

            .flex-center {
              display: flex;
              align-items: center;

              padding: 0.5em 0.8rem;

              ${md} {
                padding: 1.6rem 2rem;
              }
            }
          }
        }

        svg {
          position: relative;
          top: 3px;
          margin-left: 0.2rem;
          g {
            ${md} {
              stroke: #fff;
            }
          }
        }
      }

      .bottom-form {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        ${md} {
          flex: initial;
          width: 100%;
          padding: 1.5rem 1.9rem 5rem;
          justify-content: flex-start;
          opacity: 1;
          transform: translateY(15px);
        }

        .btn {
          color: #000;
          display: flex;
          align-items: center;
          padding: 0.5rem;
          margin: 0 0.2rem;
          transition: 0.3s;
        }
      }
    }

    .menu-icon {
      position: relative;
      padding: 1.625rem 0.625rem;
      cursor: pointer;
      z-index: 1;
      display: none;

      ${md} {
        display: block;
      }

      .menu-icon-line {
        display: block;
        position: relative;
        background-color: ${({ theme }) => theme.text};
        height: 2px;
        width: 1.25rem;
        border-radius: 4px;

        &::before,
        &::after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.text};
          transition: background 0.8s ease;
        }
        &::before {
          transform: translateY(-5px);
        }
        &::after {
          transform: translateY(5px);
        }
      }
    }

    .menu-btn {
      position: absolute;
      top: -100px;
      &:focus ~ .menu-icon {
        .menu-icon-line {
          &::before {
            transform: translateY(-7px);
          }
          &::after {
            transform: translateY(7px);
          }
        }
      }

      &:checked ~ .menu-icon {
        border-radius: 50%;
        animation: ${pulse} 1s;
        .menu-icon-line {
          background-color: ${({ theme }) => theme.text};
          animation: ${Mid} 0.8s forwards;
          &::before {
            background-color: ${({ theme }) => theme.text};
            animation: ${Top} 0.8s forwards;
          }
          &::after {
            background-color: ${({ theme }) => theme.text};
            animation: ${Bottom} 0.8s forwards;
          }
        }
      }

      &:checked ~ .nav-btn {
        transform: translateX(0);
      }

      &:checked ~ .nav-btn .nav-link,
      &:checked ~ .nav-btn .log-sign {
        clip-path: circle(100% at center);
        animation: ${animation} 0.4s ease forwards;
      }

      &:checked ~ .nav-btn .nav-link {
        &:nth-of-type(1) {
          animation-delay: 0.5s;
        }
        &:nth-of-type(2) {
          animation-delay: 0.65s;
        }
        &:nth-of-type(3) {
          animation-delay: 0.8s;
        }
        &:nth-of-type(4) {
          animation-delay: 0.95s;
        }
        &:nth-of-type(5) {
          animation-delay: 1.1s;
        }
        &:nth-of-type(6) {
          animation-delay: 1.25s;
        }
      }

      &:checked ~ .nav-btn .log-sign {
        animation-delay: 1.35s;
      }
    }
    .ant-select {
      color: ${({ theme }) => theme.text};
      .ant-select-selector {
        background-color: transparent;
        border: 0;
        ${md} {
          background-color: ${({ theme }) => theme.body};
          border: 1px solid ${({ theme }) => theme.text};
        }
      }
    }
  }
`

export default Header
