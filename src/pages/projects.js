import React from "react"
import "./projects.css"

// import Layout from "../components/layout"  Later you should add this
import SEO from "../components/seo"
import Card from "../components/card"
import Layout from "../components/layout"

import whaleSightingsMap from "../images/whaleSightingsMap.png"
import whosOnWhat from "../images/whosOnWhat.jpg"
import codePenProjects from "../images/codePenProjects.jpg"

const whaleSightingsMapInfo = "This is a map of recent whale sightings in the Seattle Area. It's was built with React.js, Google Maps API, and google-map-react. Whale sightings data was provided by The Whale Museum's API."
const whosOnWhatInfo = "Who's On What? is a web app that takes a picture of a celebrity, identifies them, and lists several movies where they have appeared."
const codePenProjectsInfo = "I'm also very active on CodePen.io where I like to create mini web projects."

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 className="title">Projects</h1>
    <div className="projects-container">
      <Card
        title= "Whale Sightings Map"
        url="https://whalesightingsmap.netlify.com/"
        img={whaleSightingsMap}
        info={whaleSightingsMapInfo} />
      <Card
        title= "Who's On What?"
        url="https://whosonwhat.netlify.com/"
        img={whosOnWhat}
        info={whosOnWhatInfo} />
      <Card
        title="CodePen Projects"
        url="https://codepen.io/Supra_01/"
        img={codePenProjects}
        info={codePenProjectsInfo} />
    </div>
  </Layout>


)

export default Projects
