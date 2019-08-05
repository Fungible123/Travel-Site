import React, { Component } from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Container } from "@components/global"
import {
  Transition,
  Nav,
  NavItem,
  Logo,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from "./style"
import { ReactComponent as MenuIcon } from "@images/menu.svg"

const NAV_ITEMS = ["Gallery", "Activities", "Rooms", "Contact"]

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    show: true,
    scrollPos: 0,
  }

  handleScroll = () => {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Transition>
        <Nav {...this.props} className={this.state.show ? "active" : "hidden"}>
          <StyledContainer>
            <Logo>
              <Link to="/">Akaw Resort</Link>
            </Logo>
            <Mobile>
              <button
                onClick={this.toggleMobileMenu}
                style={{
                  color: "white",
                  background: "none",
                  border: "none",
                }}
              >
                <MenuIcon />
              </button>
            </Mobile>
            <Mobile hide>{this.getNavList({})}</Mobile>
          </StyledContainer>
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        </Nav>
      </Transition>
    )
  }
}

export default Navbar
