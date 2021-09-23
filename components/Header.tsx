import styled from 'styled-components'
import { styleMode } from '../styles/styles'
/** components */
import DarkModeToggle from './DarkModeToggle'

type Props = styleMode

const Header: React.FC<Props> = ({ toggleStyle, theme }) => {
  return (
    <HeaderWrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ margin: '1rem', minHeight: '2rem', display: 'flex', alignItems: 'center' }}>
          Darkmode component :
        </span>
        <DarkModeToggle toggleStyle={toggleStyle} theme={theme} />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  code {
    background: #fafafa;
    color: #000000;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }
`

export default Header
