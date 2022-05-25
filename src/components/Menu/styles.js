import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 0 .75rem;
  li{
    list-style: none;
    a, span{
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      color: #000000;
    }
  }
`