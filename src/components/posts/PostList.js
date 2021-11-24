import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {getPost} from "./PostManager";

export const PostList = () => {
  const [ posts, setPosts] = useState([])
  // const history = useHistory()

  useEffect(() => {
    getPost().then(postsData => setPosts(postsData))
  }, [])

  return(
    <div>
      <h2>Posts</h2>
      <article>
        {
          posts.map(post => {
            return <section key={post.id}>
              <ul>
              {/* <Link to={`/posts/${post.id}`}> */}
                <h3>{post.title}</h3>
                <p>Posted by user #{post.user_id}</p>
              {/* </Link> */}
              </ul>
            </section>
          })
        }
      </article>
      <button>Random Button</button>
    </div>
  )
}