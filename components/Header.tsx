import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { md, styleMode } from '../styles/styles'
import { Select } from 'antd'

/** components */
import DarkModeToggle from './DarkModeToggle'

type Props = styleMode

const Header: React.FC<Props> = ({ toggleStyle, theme }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <HeaderWrapper>
      <div className="header-title" onClick={() => router.push('#', '#', { locale })}>
        <div className="logo"></div>
        <span>Nerdy Turtle</span>
      </div>
      <div className="header-list">
        <Link href="/">
          <a>coming soon</a>
        </Link>
        <Link href="/">
          <a>coming soon</a>
        </Link>
      </div>
      <div className="header-actions">
        <div>
          <Select
            defaultValue={locale}
            style={{ width: 'auto' }}
            onChange={(value) => router.push(router.pathname, router.pathname, { locale: value })}>
            <Select.Option value="ko">한국어</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>
        </div>
        <DarkModeToggle toggleStyle={toggleStyle} theme={theme} />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  min-height: 3.75rem;
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;

  ${md} {
    padding: 0 1rem;
    row-gap: 0.5rem;
  }

  > * {
    display: inline-flex;
  }
  .header-title {
    gap: 1rem;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    .logo {
      width: 2rem;
      height: 2rem;

      background: url('http://placehold.it/64x64') no-repeat center/cover;
    }
  }

  .header-list {
    justify-content: space-evenly;
    align-items: center;

    ${md} {
      grid-column: 2/4;
    }
  }

  .header-actions {
    gap: 1rem;

    justify-content: center;
    align-items: center;

    ${md} {
      grid-column: 4/1;
      grid-row: 2;
    }
    .ant-select {
      .ant-select-selector {
        background-color: transparent;
        border: 0;
      }
    }
  }
`

export default Header
