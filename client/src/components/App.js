import React from "react"
import { useExample } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route path="/" exact component={Main} />
        <Route path="/community" component={Community} />
        <Route path="/housing" component={Housing} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/services" component={Services} />
        <Route path="/for-sale" component={For - Sale} />
        <Route path="/discussion-forums" component={D - Forums} />
        <Route path="/gigs" component={Gigs} />
        <Route path="/resumes" component={Resumes} />
        <Route path="/nearby-CL" component={Nearby} />
      </div>
    </Router>
  )
}
