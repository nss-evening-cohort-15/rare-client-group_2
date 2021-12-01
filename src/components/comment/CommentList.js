import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {getComments} from "./CommentManager";

export const CommentList = () => {
  const [ comments, setComments] = useState([])
  const history = useHistory()

  useEffect(() => {
    getComments().then(commentsData => setComments(commentsData))
  }, [])

  return(
    <div>
      <h2>Comments</h2>
      <article>
        {
          comments.map(comment => {
            return <section key={comment.id}>
              <ul>
                <Link to={`/comments/${comment.id}`}>{comment.content}</Link><br/>
              </ul>
            </section>
          })
        }
      </article>
      <button>Add Comment</button>
    </div>
  )
}