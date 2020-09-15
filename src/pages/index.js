import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Dashboard from "./dashboard"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Home = () => {
  return (
    <div>
      <h1>Hi Fastly people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Router basepath="/">
        <Dashboard path="/dashboard" />
        <Home path="/" />
      </Router>
    </Layout>
  )
}

export default IndexPage
