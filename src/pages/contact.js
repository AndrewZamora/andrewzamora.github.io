import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMedia from "../components/socialMedia"
import "./contact.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="title">Contact</h1>
    <div className="contact-container">
      <h2>Trying to get in touch?</h2>
      <p>You can find me on Github, Linkedin, Twitter, or Codepen:</p>
      <SocialMedia />
      <p>You can also email me at </p>
    </div>

  </Layout>
)

export default Contact