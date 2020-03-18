import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Main from "./Main"
import Post from "./Post"
import createPost from "./createPost"
import Category from "./Category"
export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route path="/" exact component={Main} />
        <Route exact path="/posting/:id" component={Post} />
        <Route path="/:slug/create" exact component={createPost} />
        <Route path="/:slug" exact component={Category} />
      </div>
    </Router>
  )
}
