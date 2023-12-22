import React from "react"
import "./normalize.css"
import "./index.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
// import Layout from "../components/layout"
// import Image from "../components/image"

const IndexPage = () => (
  <>
    <SEO title="Experienced Web Developer" />
    <main>
      <section className="description">
        <h1>Andrew Zamora</h1>
        <h2>Web Developer</h2>
        <nav>
          <ul>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </nav>
      </section>
      <section className="content">
        <h2 id="experience">Experience</h2>
        <h2 id="projects">Projects</h2>
      </section>
    </main>
  </>
)

export default IndexPage
