import styled from 'styled-components'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by{' '}
        <span className="logo">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

export default Footer
