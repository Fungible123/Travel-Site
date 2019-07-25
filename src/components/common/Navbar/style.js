import styled from "styled-components"
import { Container } from "@components/global"

export const Nav = styled.nav`
  padding: 28px 0;
  background-color: none;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
            flex-direction: column;
            margin-top: 1em;

            > ${NavItem} {
                margin: 0;
                margin-top: .75em;
            }
        `}
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.regular};
  a {
    text-decoration: none;
    text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme.color.light};
    &:hover {
      color: ${props => props.theme.color.colorful.orange};
    }
  }

  &.active {
    a {
      color: ${props => props.theme.color.colorful.flesh};
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  background: transparent;
`

export const Logo = styled.div`
  font-family: ${props => props.theme.font.primary};
  background: -webkit-linear-gradient(90deg, #00cdb4 0%, #00a4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  ${props => props.theme.font_size.xlarge};
`

export const Mobile = styled.div`
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  transition: 0.2s ease-in;

  @media (max-width: ${props => props.theme.screen.md}) {
    visibility: visible;
    opacity: 1;
    z-index: 1000;
  }

  ${props =>
    props.hide &&
    `
    visibility: visible;
    opacity: 1;
    z-index: 1000;

     @media (max-width: ${props.theme.screen.md}) {
        visibility: hidden;
        opacity: 0;
        z-index: -1;
        transition: 0.2s ease-in;
     }
    `}
`
