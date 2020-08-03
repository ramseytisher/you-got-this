/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box, Main, Header, Heading, Footer, Text, Anchor } from "grommet"
import { Run, Bike, Achievement } from "grommet-icons"

const lightTheme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Indie Flower",
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
          <Achievement size="large" />
        </Box>
        <Heading>You Got This!!!</Heading>
      </Box>
      <Main pad="small">{children}</Main>
      <Footer background="brand" pad="medium">
        <Anchor label="About" />
        <Text>Built by Ramsey</Text>
      </Footer>
    </Grommet>
  )
}

export default Layout
