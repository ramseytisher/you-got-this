import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const stretches = [
  "Reach for Toes with a Flat Back (Hamstring)",
  "Calf Stretch",
  "Hip flexor stretch",
  "Butterfly stretch",
]
const endurances = [
  "Run",
  "Stairs",
  "Bike",
  "Swim",
  "Trampoline",
  "Yoga",
  "Elliptical",
  "Boxing",
]
const strengths = [
  "Push-ups",
  "Squats",
  "Sit-ups",
  "Pull-ups",
  "Jump-ups",
  "Up-Downs",
  "Superman",
  "Planks",
  "Lunges",
  "Walking with your arms over the ball",
  "Reverse Superman",
  "Spiderman",
]
const coordinations = [
  "Jumping Jack",
  "Jump Rope",
  "Cross Marching",
  "All 4's exercise",
  "Play Catch",
  "Tetherball",
  "Dead bug",
  "Grapevine",
  "Dribble Ball with Hands",
  "Dribble Ball with Feet",
  "Windmills",
  "Balloon Tap",
  "Karate chop Exercise",
  "Ball activity",
  "Reverse Dead bug",
]
const balances = [
  "Stand on One Leg with Eyes Closed",
  "Standing balancing with one foot on a ball",
  "Leg Windmills",
  "Toe Touch Step Downs",
  "Over a Line Side-to-Side Hops (1 Leg)",
  "Walk on a line backwards (heels touching toes)",
  "Throwing/bouncing ball standing with feet on a line touching heel to toe",
]
const coolDowns = [
  "Mediation",
  "5 Deep Breaths (smell the roses...blow out the candles)",
  "Wall Crashes",
  "Think of a Good Memory (the feel, smells, sounds, taste, visual)",
  "Tighten the whole body for 5 Seconds then RELAX",
  "Pray",
  "Weighted blanket",
  "Visualize Stresses Going AWAY (in a car or sail boat)",
]

const IndexPage = () => {
  const stretch = Math.floor(Math.random() * stretches.length)
  const endurance = Math.floor(Math.random() * endurances.length)
  const strength = Math.floor(Math.random() * strengths.length)
  const cooridnation = Math.floor(Math.random() * coordinations.length)
  const balance = Math.floor(Math.random() * balances.length)
  const coolDown = Math.floor(Math.random() * coolDowns.length)

  return (
    <Layout>
      <SEO title="Home" />
      <h3>Stretching (1-2 minutes): {stretches[stretch]}</h3>
      <h3>Endurance (5-15 minutes): {endurances[endurance]}</h3>
      <h3>Strength: {strengths[strength]}</h3>
      <h3>Coordination: {coordinations[cooridnation]}</h3>
      <h3>Balance: {balances[balance]}</h3>
      <h3>Mental Cool Down: {coolDowns[coolDown]}</h3>
    </Layout>
  )
}

export default IndexPage
