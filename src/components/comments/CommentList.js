import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import  {getComments} from "./CommentManager";

export const CommentList = ({postId}) => {
  const [ comments, setComments] = useState([])
  const [ theComments, setTheComments] = useState([])
  const history = useHistory()

  useEffect(() => {
    getComments().then((data)=> setComments((data)))
  }, [])

  useEffect(() => {
    const relatedComments = comments.filter(comment => comment.post_id === postId )
    setTheComments(relatedComments)
  },[comments, postId])


  return(
    <div>
      <h2>Comments</h2>
      <ul>
        { 
        theComments.length > 0?
          theComments.map(comment => {
            return <section key={comment.id}>
              <li>
                <p>{comment.content}</p>
              </li>
            </section>
          }):""
        }
      </ul>
      <button>Add Comment</button>
    </div>
  )
}