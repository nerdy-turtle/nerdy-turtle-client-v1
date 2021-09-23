import { createGlobalStyle } from 'styled-components'
import themes from './themes'

export const { xxxs, xxs, xs, sm, md, lg, xl, xxl, _4xl } = {
  xxxs: '@media (max-width: 20rem)', // 320px
  xxs: '@media (max-width: 32rem)', // 512px
  xs: '@media (max-width: 38rem)', // 608px
  sm: '@media (max-width: 48rem)', // 768px
  md: '@media (max-width: 64rem)', // 1024px
  lg: '@media (max-width: 80rem)', // 1280px
  xl: '@media (max-width: 90rem)', // 1440px
  xxl: '@media (max-width: 120rem)', // 1920px
  _4xl: '@media (max-width: 160rem)', // 2560px
}

type LightnessName =
  | 'background'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'default'
  | 'accent8'
  | 'foreground'
  | 'grey'

export const defaultPalette: Record<LightnessName, string> = {
  /** Default */
  background: '#FFFFFF',
  accent1: '#D6D6D6',
  accent2: '#BCBCBC',
  accent3: '#A3A3A3',
  accent4: '#8A8A8A',
  accent5: '#707070',
  accent6: '#58595b',
  default: '#3D3D3D',
  accent8: '#242424',
  foreground: '#000000',
  grey: '#888888',
}

/**
 * key: _xx(%) percent
 * value: convert to hex
 */
export const opacityHex = {
  _0: '00',
  _10: '16',
  _20: '32',
  _30: '48',
  _40: '64',
  _50: '80',
  _60: '96',
  _70: 'aa',
  _80: 'cc',
  _90: 'ee',
}

export type TypeOfTheme = keyof typeof themes

export type styleMode = {
  toggleStyle: (mode: TypeOfTheme) => void
  theme: TypeOfTheme
}

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    *::placeholder {
      color: #C5C5C5 !important;
    }
    body {
        overscroll-behavior: auto;
        user-select: none;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        /* transition: background 0.2s ease-in, color 0.2s ease-in; */
    }
    /* 모든 폰트가 'Noto Sans KR'에서 영문과 숫자만 'Roboto'로 적용 */
    /* @font-face {
      font-family: 'Roboto';
      font-style: normal;
      src: local('*'),
      url('/static/font/Roboto-Regular.ttf') format('truetype'),
      url('/static/font/Roboto-Bold.ttf') format('truetype'),
      url('/static/font/Roboto-Thin.ttf') format('truetype');
      unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    } */
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: inherit;
    }
    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }
`
