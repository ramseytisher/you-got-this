import React from "react"
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

  return (
    <Layout>
      <SEO title="Home" />
      <Card exercise={getExercise(0)} />
      <Card exercise={getExercise(1)} />
      <Card exercise={getExercise(2)} />
      <Card exercise={getExercise(3)} />
      <Card exercise={getExercise(4)} />
      <Card exercise={getExercise(5)} />
    </Layout>
  )
}

export default IndexPage
