import styled from 'styled-components'
import { MAX_WIDTH } from '../styles/styles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p>© 2021 Nerdy Turtle Team. All rights reserved.</p>
        <p>Powered by Luke</p>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  .container {
    max-width: ${MAX_WIDTH};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }
`

export default Footer
