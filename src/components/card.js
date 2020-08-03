import React, { useState } from "react"

import {
  Grommet,
  Box,
  Button,
  Header,
  Heading,
  Footer,
  Text,
  Anchor,
} from "grommet"

export default ({ exercise }) => (
  <Box direction="row" justify="between" pad={{ vertical: "small" }}>
    <Box>
      <Text>{exercise.description}</Text>
      <Text size="small">{exercise.detail}</Text>
    </Box>
    <Button label="Start" />
  </Box>
)
