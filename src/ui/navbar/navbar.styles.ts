import styled from 'styled-components'

export const WrapperNavbar = styled.nav`
  display: flex;
  justify-content: space-around;

  div:nth-child(1) {
    font-family: 'Shadows Into Light', sans-serif;
  }

  div:nth-child(2) {
    li {
      list-style-type: none;
    }
  }
`
