import React, { useState, useEffect, useContext } from "react"
import { createNewComment } from "./CommentManager"
import { useParams, useHistory } from 'react-router-dom'

export const CommentForm = () => {
   
    const { addComment, newComment, getComments, getUserById } = useContext
    const [ isLoading, setIsLoading ] = useState(false);
    const [user, setUser] = useState({});

    const [comment, setComment ] = useState({
        post_id: 2,
        author_id: 1,
        content: "",
        created_on: null,
    });
    const {commentId} = useParams();
    const history = useHistory()
    

    useEffect(() => {
        getComments()
      }, [])


    const handleControlledInputChange = (event) => {

        const newComment = { ...comment }

        newComment[event.target.id] = event.target.value

        setComment(newComment)
    }

    const createNewComment = (event) => {
        event.preventDefault()
        setIsLoading(false)
        if (!comment === 0 || !comment === 0) {

            window.alert("Create New Comment")
        }   
            else {
                // POST
                const newComment = {
                    post_id: comment.post_id,
                    author_id: comment.author_id,
                    content: comment.text,
                    created_on: Date.now()
                }

                addComment(newComment)
                    .then(() => {
                        history.push('/comments')
                        setIsLoading(false)
                    })
            
        }
    }

    return (
        <form className="comment">
            <h1 className="comment_title">Comments</h1>
            
            <fieldset className="comment__form">
          <label htmlFor="text">
              <input type="text" id="text" required autoFocus className="form-control" Textarea
              placeholder="type comment here" style= {{ minHeight:50}} value={comment.text} 
              onChange={handleControlledInputChange} />
              </label>
          </fieldset>
          <button className="btn btn-primary" 
             disabled={isLoading}
             onClick={event => createNewComment(event)}>
           {commentId ? <>Save Comment</> : <>Add Comment</>}
           </button>
          </form>
    )
            }
