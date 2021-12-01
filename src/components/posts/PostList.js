import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {getPosts} from "./PostManager";

export const PostList = () => {
  const [ posts, setPosts] = useState([])
  // const history = useHistory()

  useEffect(() => {
    getPosts().then(postsData => setPosts(postsData))
  }, [])

  return(
    <div>
      <h2>Posts</h2>
      <article>
        {
          posts.map(post => {
            return <section key={post.id}>
              <ul>
                <Link to={`/posts/${post.id}`}>{post.title}</Link><br/>
              </ul>
            </section>
          })
        }
      </article>
      <button>Random Button</button>
    </div>
  )
}