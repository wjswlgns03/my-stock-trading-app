import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--primary-color);
  color: #F1EFEF;
  padding: 20px 0;
  text-align: center;
`

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`
export default { HeaderContainer, Nav }