import React, { useEffect } from "react"
import { usecats } from "../hooks"
import moment from "moment"
import { Link } from "react-router-dom"

export default props => {
  const { posts, getPosts, currentCategory } = useEffect

  useEffect(() => {
    getPosts(props.match.params.slug)
  }, [props.match.params])

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{currentCatagory}</h1>
      <Link to={props.match.params.slug + "/create"}>Create Post</Link>
      {posts.map(p => (
        <div key={"c-posting" + p.id}>
          <Link to={`/posting/${p.id}`}>
            {p.name} - {moment(p.time_created).fromNow()}
          </Link>
        </div>
      ))}
    </div>
  )
}
