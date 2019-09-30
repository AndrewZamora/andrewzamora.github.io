import React from "react"
import { Link } from "gatsby"
import "./projects.css"

// import Layout from "../components/layout"  Later you should add this
import SEO from "../components/seo"
import Card from "../components/card"
import Layout from "../components/layout"

import whaleSightingsMap from "../images/whaleSightingsMap.png"
import whosOnWhat from "../images/whosOnWhat.jpg"
import codePenProjects from "../images/codePenProjects.jpg"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div className="projects-container">
      <Card url="https://whalesightingsmap.netlify.com/" img={whaleSightingsMap}></Card>
      <Card img={whosOnWhat}></Card>
      <Card img={codePenProjects}></Card>
    </div>
    {/* <main id="projects-main">
    <h1 id="projects-title">Projects</h1>
      <div className="project">
        <h2>Whale-Sightings-Map</h2>
        <img src={whaleSightingsMap} alt="project-img" />
        <h3>Description:</h3>
        <p>
          This is a map of recent whale sightings in the Seattle Area. It's was built with React.js, Google Maps API,
          and
          google-map-react. Whale sightings data was provided by The Whale Museum's API. The project is not live yet
          but
            the code is posted on Github and can be viewed <a href="https://github.com/AndrewZamora/Whale-Sightings-Map"
            target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
      <div className="project">
        <h2>Who's On What?</h2>
        <img src={whosOnWhat} alt="project-img" />
        <h3>Description:</h3>
        <p>
          Who's On What? is a web app that takes a picture of a celebrity, identifies them, and lists the movies
            where they have appeared. This web app is live <a href="https://whosonwhat.netlify.com/" target="_blank" rel="noopener noreferrer">here </a>
          and its code can be viewed on <a href="https://github.com/AndrewZamora/Whos-On-What" target="_blank" rel="noopener noreferrer">Github</a>.
        </p>
      </div>
      <div className="project">
        <h2>CodePen Projects</h2>
        <img src={codePenProjects} alt="project-img" />
        <h3>Description:</h3>
        <p>
          I'm also very active on CodePen.io where I like to create mini web projects. You can view my profile
            <a href="https://codepen.io/Supra_01/" target="_blank" rel="noopener noreferrer"> here</a>.
        </p>
      </div>
      <Link to="/" id="project-back-button">Back</Link>
    </main> */}
  </Layout>


)

export default Projects
