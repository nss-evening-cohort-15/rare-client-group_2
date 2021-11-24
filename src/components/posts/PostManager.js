
export const getPost = () => {
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
    .then(getPost)
}