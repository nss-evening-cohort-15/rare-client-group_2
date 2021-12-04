import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router";
import { addPost, editPost, getPostById } from "./PostManager";
import { getCategories } from "../categories/CategoryManager";

export const PostForm = () => {
  const [categories, setCategories] = useState([])
  const {postId} = useParams()
  const [post, setPost] = useState({})
  const history = useHistory()

  const editMode = postId ? true : false

  const handleInputChange = (event) => {
    const newPost = Object.assign({}, post)
    newPost[event.target.title] = event.target.value
    setPost(newPost)
  }

  useEffect(() => {
    if (editMode) {
      getPostById(postId).then((res) => {
        setPost(res)
        console.warn('postId',postId)
      })
    }
    getCategories().then(categoriesData => setCategories(categoriesData))
  }, [])

  const createNewPost = () => {
    const category_id = parseInt(post.category_id)

    if (category_id === 0) {
      window.alert("Choose Category Please")
    } else {
      if (editMode) {
        editPost({
          id: post.id,
          title: post.title,
          category_id: post.category_id,
          publication_date: post.publication_date,
          image_url: post.image_url,
          content: post.content,
          approved: post.approved,
          user_id: parseInt(localStorage.getItem("rare_user_id"))
        })
          .then (() => history.push("/posts"))
          
      } else {
        addPost({
          title: post.title,
          category_id: category_id,
          publication_date: new Date(),
          image_url: post.image_url,
          content: post.content,
          approved: false,
          user_id: parseInt(localStorage.getItem("rare_user_id"))

        })
          .then (() => history.push("/posts"))
      }
    }
  }

  return (
    <form className="postForm">
      <h2 className="postForm__title">{editMode ? "Edit Post" : "Add Post"}</h2>
      <fieldset>
        <div className="form_group">
          <label htmlFor="title"> Post Title: </label>
          <input type="text" title="title" required autoFocus className="form-control"
          placeholder="Post title"
          defaultValue={post.title}
          onChange={handleInputChange} 
          />         
        </div>
      </fieldset>
      <fieldset>
        <div className="form_group">
          <label htmlFor="image_url"> Image URL: </label>
          <input type="text" title="image_url" required autoFocus className="form-control"
          placeholder="Image Url"
          defaultValue={post.image_url}
          onChange={handleInputChange} 
          />         
        </div>
      </fieldset>
      <fieldset>
        <div className="form_group">
          <label htmlFor="content"> Content: </label>
          <input type="text" title="content" required autoFocus className="form-control"
          placeholder="Post content"
          defaultValue={post.content}
          onChange={handleInputChange} 
          />         
        </div>
      </fieldset>
      <fieldset>
        <div className="form_group">
          <label htmlFor="category_id"> Category: </label>
          <select label="category_id" title="category_id" className="form-control"
            value={post.category_id}
            onChange={handleInputChange}>
              <option value="0"></option>
              {
                categories.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.label}
                  </option>
                ))
              }
            </select>        
        </div>
      </fieldset>
      <button type="submit" 
        onClick={evt => {
          evt.preventDefault()
          createNewPost()
        }}
        className="bt btn-primary">
        {editMode ? "Save Edit" : "Create Post"}
      </button>
    </form>
  )
}