import styled from 'styled-components'

export const WrapperNavbar = styled.nav`
  display: flex;
  justify-content: space-around;

  div:nth-child(1) {
    font-family: 'Shadows Into Light', sans-serif;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      gap: 1rem;
    }

    li {
      list-style-type: none;
    }
  }
`
