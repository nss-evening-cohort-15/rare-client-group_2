import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { getCommentById } from "./CommentManager"

export const CommentDetail = () => {
    const [comment, setComment] = useState({ comment: {} })
    const { commentId } = useParams()
    const history = useHistory()
    
    useEffect(() => {
        getCommentById(commentId)
            .then(setComment)
    }, [])

    return (
        <section className="comment">
            <h3 className="comment__postId">{comment.post_id}</h3>
            <div className="comment_authorId">{comment.author_id}</div>
            <div className="comment__content">Comment: {comment.content}</div>

            {/* <button onClick={() => deleteComment(comment.id).then(() => history.push("/comments"))} >Delete</button> */}

            {/* <button onClick={() => {
                history.push(`/comments/edit/${comment.id}`)
            }}>Edit</button> */}
        </section>
    )
}