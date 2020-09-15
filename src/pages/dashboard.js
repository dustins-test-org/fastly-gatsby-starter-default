import React from "react"
import { useLocation } from "@reach/router"

const Dashboard = () => {
  const location = useLocation()
  return (
    <h2>
      Dashboard
      {location.search}
    </h2>
  )
}

export default Dashboard
