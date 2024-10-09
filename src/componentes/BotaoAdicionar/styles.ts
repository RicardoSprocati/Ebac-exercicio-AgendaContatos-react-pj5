import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circulo = styled(Link)`
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 700px) {
    height: 36px;
    width: 36px;
    bottom: 20px;
    right: 20px;
  }
`
