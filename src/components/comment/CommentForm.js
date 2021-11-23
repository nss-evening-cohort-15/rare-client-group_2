import React, { useState, useEffect } from "react"
import { addComment } from "./CommentManager"
import { useParams, useHistory } from 'react-router-dom'

export const CommentForm = () => {
    // Use the required context providers for data
    const { commentId } = useParams()
    // Component state
    const [comment, setComment] = useState({})
    const history = useHistory()

    // Is there a a URL parameter??
    const editMode = commentId ? true : false  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newComment = Object.assign({}, comment)          // Create copy
        newComment[event.target.id = event.target.value]    // Modify copy
        setComment(newComment)                               // Set copy as new state
    }

    // Get comments from API when component initializes
    useEffect(() => {
        if (editMode) {
            getCommentById(commentId).then((res) => {
                setComment(res)
            })
        

    const createNewComment = () => {
        const userId = parseInt(comment.id)

        if (userId === 0) {
            window.alert("Please select a user")
        }
            else {
                // POST
                addComment({
                    id: comment.id,
                    post_id: comment.post_id,
                    author_Id: comment.author_id,
                    content: comment.content
                })
                    .then(() => history.push("/comments"))
            }
        }
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Comment: </label>
                    <input type="text" name="comment" required autoFocus className="form-control"
                        placeholder="add comment here"
                        defaultValue={comment.content}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="comment">Comment: </label>
                    <textarea type="text" name="comment" className="form-control"
                        value={comment.content}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewComment()
                }}
                className="btn btn-primary">
                {/* {editMode ? "Save Updates" : "Add Comment"} */}
            </button>
        </form>
    )
})}
