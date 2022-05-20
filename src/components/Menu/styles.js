import styled from 'styled-components'

export const HeaderMenu = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MenuItem = styled.ul`
  display: flex;
  gap: 0 .75rem;
  a, span{
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #000000;
  }
`