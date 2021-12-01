import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getComments, editComment, deleteComment, createNewComment } from "./CommentManager"

export const CommentForm = () => {
    const history = useHistory()
    
    const [comments, setComments ] = useState([])
    const [comment, setComment] = useState([])
    const [theComment, setTheComment] = useState({comment: ''})
    

    const { commentId } = useParams()

    useEffect(() => {
        getComments().then((data) => setComments(data))
    }, [])

    useEffect(() => {
        const theComment = comments.find(comment=> comment.id === parseInt(commentId)) || {content: ''}
        setTheComment(theComment)
    }, [comments, commentId])


    const handleControlledInputChange = (event) => {
        const newComment = { ...comment }
        newComment[event.target.id] = event.target.value
        setComment(newComment)
    }

}
    const handleDelete = (id) => {
        deleteComment(id)
        .then(() => {
        const remainingComments = comments.filter( comment => comment.id !== id )
        setComments(remainingComments)
        })
    }

    return (
        <>
        <div className='comment'>
            <form className='comment_form'>
                <fieldset>
                    <div className="comment_form_group">
                            <label htmlFor="comment">Comment: </label>
                            <input type="text" name="label" required autoFocus className="form-control"
                                placeholder="add comment here"
                                defaultValue={comment.content}
                                onChange={handleControlledInputChange}/>
                    </div>
                    <button type="submit"
         onClick={event => { event.preventDefault()
                            handleSaveComment()
                            }}
                            className="btn btn-primary" >
       {commentId ? <>Save Comment</> : <>Add Comment</>}
       </button>
                
                </fieldset>
            </form>
            <button className="delete__button" onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
        </>
    )
