import React from "react"
import "./normalize.css"
import "./index.css"
import headShot from "../images/headShot.jpg"
import sendIcon from "../images/send.svg"
import SEO from "../components/seo"
import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <>
  <SEO title="Andrew Zamora - I'm a freelance web developer." />
      <main id="home-page-main">
        <section id="contact-section">
          <div>
            <a href="mailto:andrewmichaelzamora@gmail.com">
              <img id="contact-icon" src={sendIcon} alt="Send Message Paper Airplane"></img>
              <span>Get in touch</span>
            </a>
          </div>
        </section>
        <section id="about-section">
          <img id="headShot" src={headShot} alt="Andrew Zamora"></img>
          <div className="about-text">
            <h1>Hello,</h1>
            <p>My name is</p>
            <h1>Andrew<br></br> Zamora.</h1>
            <p>I build apps.</p>
          </div>
        </section>
        <nav>
          <div className="github slant">
            <p>See my code on
                <a href="https://github.com/AndrewZamora" target="_blank" rel="noopener noreferrer"> Github</a>
            </p>
          </div>
          <div className="projects">
            <Link to="/projects/">Projects</Link>
          </div>
          <div className="linkedin">
        <a href="https://www.andrewzamora.tech" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </nav>
      </main>
  </>
    )
    
    export default IndexPage
