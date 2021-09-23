import React from 'react'
import styled from 'styled-components'
import { styleMode } from '../styles/styles'

interface StyleProps {
  width?: string | number
  height?: string | number
}
type Element = React.HTMLAttributes<HTMLInputElement>
interface Props extends Element, styleMode, StyleProps {}

const DarkModeToggle: React.FC<Props> = (props) => {
  const { toggleStyle, theme, width, height } = props
  const onChangeToggle = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      toggleStyle('dark')
    } else {
      toggleStyle('light')
    }
  }

  return (
    <Toggle
      type="checkbox"
      width={width}
      height={height}
      onChange={onChangeToggle}
      checked={theme === 'dark'}
    />
  )
}

const Toggle = styled.input<StyleProps>`
  cursor: pointer;
  position: relative;
  width: ${({ width }) => (width ? width : '4rem')};
  height: ${({ height }) => (height ? height : '2rem')};
  outline: none;
  appearance: none;
  background-color: rgba(224, 224, 224, 1);
  transition: all 0.5s;
  border: 1.5px solid rgba(40, 40, 40, 1);
  border-radius: 1.25rem;

  &:checked {
    background-color: rgba(40, 40, 40, 1);
    border-color: rgba(224, 224, 224, 1);
    transition: all 0.5s;
  }

  &::before {
    content: '';
    background: url('/static/svg/sun.svg') no-repeat center/cover;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: ${({ height }) => (height ? height : '1.5rem')};
    height: ${({ height }) => (height ? height : '1.5rem')};
    top: 2px;
    left: 2px;
    background-color: transparent;
    border-radius: 2rem;

    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
    transition: all 0.25s;
  }

  &:checked::before {
    content: '';
    background: url('/static/svg/moon.svg') no-repeat center/cover;
    left: ${({ height }) => (height ? height : '2rem')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`

export default DarkModeToggle
