import React, { useEffect, useState } from "react"
import { getComments } from "../comment/CommentManager";


export const CommentList = () => {
    const [ comments, setComments ] = useState([])
    const [ users, getUsers, setUsers ] = useState([])

    useEffect(() => {
        getComments().then(commentsData => setComments(commentsData))
        getUsers().then(usersData => setUsers(usersData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Comments</h1>
            <article className="comments">
                {
                    comments.map(comment => {
                        users.comments = comments.filter(c => comment.id === c.user_id) || []
                        return <section key={comment.id} className="comment">
                            <h2>{comment.post_id}</h2>
                            <div>{comment.author_id}</div>
                            <div>{comment.text}</div>

                            { comment.users && comment.users.map(c => <div key={`comment--${c.id}`}>{c.post_id} ({c.author_id})</div>)}
                        </section>
                    })
                }
            </article>
        </div>
    )
}
