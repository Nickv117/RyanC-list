import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

const GET_CAT = "cats/GET_CAT"

const GET_CUR = "cats/GET_CUR"

const initialState = {
  cats: [],
  current: "",
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT:
      return { ...state, cats: action.payload }
    case GET_CUR:
      return {
        ...state,
        current: action.payload.category,
        posts: action.payload.posts
      }
    default:
      return state
  }
}

function getCurrent(slug) {
  return dispatch => {
    axios.get("/api/category/" + slug).then(resp => {
      dispatch({
        type: GET_CUR,
        payload: {
          category: resp.data.catName,
          posts: resp.data.posts
        }
      })
    })
  }
}

function getCategories() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      dispatch({
        type: GET_CAT,
        payload: resp.data
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catState.cats)
  const get = () => dispatch(getCategories())
  const getPosts = slug => dispatch(getCurrent(slug))
  const currentCategory = useSelector(appState => appState.catState.current)
  const posts = useSelector(appState => appState.catState.posts)

  return { cats, get, getPosts, currentCategory, posts }
}
