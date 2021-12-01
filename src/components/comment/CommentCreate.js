import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getComments } from "./CommentManager";
import { createNewComment } from "./CommentManager";

export const CommentCreate = () => {
    const label = useRef()

    const history = useHistory()
    const {comment_id} = useParams()
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComments().then((data) => setComment(data))
    }, [])

    const handleControlledInputChange = (event) => {
        const newComment = { ...comment }
        newCategory[event.target.id] = event.target.value
        setComment(newComment)
    }

    const handleSaveComment= () => {

        if (comment_id === 0) {
            window.alert("Please enter comment")
        } else {
            createNewComment({
                id: comment.id,
                post_id: comment.post_id,
                author_id: comment.author_id,
                content: comment.content,
                created_on: Date.now()
                
            })
            .then(() => history.push("/comments"))
        }
    }

    return(
        <form className="commentForm">
            <h2 className="commentForm_title">New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Comment: </label>
                    <input type="text" id="label" ref={label} required autoFocus className="form-control" placeholder="Comment" onChange={handleControlledInputChange} defaultValue={comment.content} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    handleSaveComment()
                }}
                className="btn btn-primary">
                    Save Comment
                </button>
        </form>
    )


}