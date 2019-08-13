import React from "react"
import "./index.css"
import headShot from "../images/headShot.jpg"
// import { Link } from "gatsby"

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
    <main id="home-page-main">
      <section id="contact-section">
        <div>
          <a href="mailto:andrewmichaelzamora@gmail.com">
            <img id="contact-icon" src="assets/img/send.svg" alt="Send Message Paper Airplane"></img>
            <span>Get in touch</span>
          </a>
        </div>
      </section>
      <section id="about-section">
        <img id="headShot" src={headShot} alt="Andrew Zamora"></img>
        <div class="about-text">
          <h1>Hello,</h1>
          <p>My name is</p>
          <h1>Andrew<br></br> Zamora.</h1>
          <p>I build websites.</p>
        </div>
      </section>
      <nav>
        <div class="github slant">
          <p>See my code on
                <a href="https://github.com/AndrewZamora" target="_blank" rel="noopener noreferrer">Github</a>
          </p>
        </div>
        <div class="projects">
          <a href="/projects">Projects</a>
        </div>
        <div class="linkedin">
          <a href="https://www.linkedin.com/in/andrew-zamora-21058116" target="_blank" rel="noopener noreferrer"><img src="assets/img/linkedinSquare.svg"
            alt="linkedin logo"></img></a>
        </div>
      </nav>
    </main>
  </>
)

export default IndexPage
