export const getComments = () => {
    return fetch("http://localhost:8088/comments")
        .then(res => res.json())
}

export const getCommentById = (id) => {
    return fetch(`http://localhost:8088/comments/${id}`)
        .then(res => res.json())
}

export const createNewComment = comment => {
    return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
        .then(getComments)
}

export const editComment = (comment) => {
    return fetch(`http://localhost:8088/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}

export const deleteComment = (comment_id) => {
    return fetch(`http://localhost:8088/comments/${comment_id}`, {
        method: "DELETE"
    })
        .then(getComments)
}










