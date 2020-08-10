import React, { useState } from "react"

import {
  Grommet,
  Box,
  Button,
  Header,
  Heading,
  Footer,
  Text,
  Layer,
  Clock,
} from "grommet"
import { Achievement, Cycle } from "grommet-icons"

export default ({ exercise, refresh }) => {
  const [showLayer, setShowLayer] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function resetCard() {
    setShowLayer(false)
    setShowSuccess(false)
  }

  return (
    <Box
      key={exercise.description}
      direction="row"
      justify="between"
      pad={{ vertical: "small" }}
    >
      <Box direction="row" flex justify="between">
        <Box justify="center">
          <Text>{exercise.description}</Text>
          {exercise.detail && <Text size="small">{exercise.detail}</Text>}
        </Box>
        <Button icon={<Cycle />} onClick={refresh} key={exercise.description} />
      </Box>

      <Button label="Go" onClick={() => setShowLayer(true)} margin="xsmall" />
      {showLayer && (
        <Layer
          onEsc={() => resetCard()}
          onClickOutside={() => resetCard()}
          position="bottom"
          full="horizontal"
          responsive={false}
        >
          <Box>
            <Box pad="medium">
              <Text size="large">{exercise.description}</Text>
              <Text>{exercise.detail}</Text>
            </Box>
            <Box height="medium" align="center" justify="center">
              {showSuccess ? (
                <Box gap="medium" align="center" animation="fadeIn">
                  <Achievement size="xlarge" />
                  <Text>You did it!! GREAT WORK</Text>
                  <Button label="Close" onClick={() => resetCard()} />
                </Box>
              ) : (
                <Clock
                  type="digital"
                  run="backward"
                  size="xlarge"
                  time={`T00:${exercise.duration}:00`}
                  onChange={time => {
                    if (time === "T0:0:0") {
                      setShowSuccess(true)
                    }
                  }}
                />
              )}
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}
