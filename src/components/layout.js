/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box, Header, Heading, Footer, Text, Anchor } from "grommet"
import { Run, Bike, Accessibility } from "grommet-icons"

const lightTheme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  return (
    <Grommet theme={theme} full>
      <Box background="brand" align="center">
        <Box
          direction="row"
          justify="center"
          gap="small"
          margin={{ top: "large" }}
          fill
        >
          <Run size="large" />
          <Bike size="large" />
          <Accessibility size="large" />
        </Box>
        <Heading>You Got This!!!</Heading>
      </Box>

      <Box align="center" pad="small">
        <main>{children}</main>
      </Box>
      <Footer background="brand" pad="medium">
        <Anchor label="About" />
        <Text>Built by Ramsey</Text>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
