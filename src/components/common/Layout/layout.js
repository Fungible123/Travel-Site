import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import SEO from "@common/seo"
import theme from "@styles/theme"
import GlobalStyles from "@styles/GlobalStyles"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
