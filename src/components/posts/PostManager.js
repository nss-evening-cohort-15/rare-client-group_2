
export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(res => res.json())
}

export const addPost = post => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(getPosts)
}

export const editPost = post => {
  return fetch(`http://localhost:8088/posts/${post.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
  })
      .then(getPosts)
}

export const deletePost = postId => {
  return fetch(`http://localhost:8088/posts/${postId}`, {
      method: "DELETE"
  })
      .then(getPosts)
}