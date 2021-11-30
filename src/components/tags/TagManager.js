export const getTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(res => res.json())
}

export const addTag = tag => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(tag)
    })
        .then(res => res.json())
}

export const deleteTag = (tag_id) => {
    return fetch(`http://localhost:8088/tags/${tag_id}`, {
        method: "DELETE"
    })
        .then(getTags)
}
  
export const editTags = (tag) => {
    return fetch(`http://localhost:8088/tags/${tag.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        // .then(res => res.json())  204--server didn't sent anything back
}