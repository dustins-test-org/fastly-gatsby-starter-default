import React from "react"
import { useLocation } from "@reach/router"

const Dashboard = () => {
  const location = useLocation()
  return (
    <h2>
      Dashboard
      <br />
      {location.pathname}
      {location.search}
    </h2>
  )
}

export default Dashboard
