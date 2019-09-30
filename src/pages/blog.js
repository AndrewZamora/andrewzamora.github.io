import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import "./blog.css"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <div className="projects-container">
    <Card url="https://www.google.com/"></Card>
    <Card></Card>
    <Card></Card>
    </div>
  </Layout>
)

export default Blog