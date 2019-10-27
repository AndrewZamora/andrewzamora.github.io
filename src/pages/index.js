import React from "react"
import "./normalize.css"
import "./index.css"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <p>I'm Andrew Zamora, web developer from California.</p>
    </div>
  </Layout>
    )
    
    export default IndexPage
