import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Text, Button } from "grommet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import { exercises } from "../data/exercises"

const IndexPage = () => {
  function getExercise(type) {
    const available = exercises.filter(exercise => {
      return exercise.type === type
    })

    const random = Math.floor(Math.random() * available.length)

    return available[random]
  }

  const [stretch, setStretch] = useState(getExercise(0))
  const [endurance, setEndurance] = useState(getExercise(1))
  const [strength, setStrength] = useState(getExercise(2))
  const [coordination, setCoordination] = useState(getExercise(3))
  const [balance, setBalance] = useState(getExercise(4))
  const [coolDown, setCoolDown] = useState(getExercise(5))

  return (
    <Layout>
      <SEO title="You Got This" />
      <Card exercise={stretch} refresh={() => setStretch(getExercise(0))}/>
      <Card exercise={endurance} refresh={() => setEndurance(getExercise(1))}/>
      <Card exercise={strength} refresh={() => setStrength(getExercise(2))}/>
      <Card exercise={coordination} refresh={() => setCoordination(getExercise(3))}/>
      <Card exercise={balance} refresh={() => setBalance(getExercise(4))}/>
      <Card exercise={coolDown} refresh={() => setCoolDown(getExercise(5))}/>
    </Layout>
  )
}

export default IndexPage
