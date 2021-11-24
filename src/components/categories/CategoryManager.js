export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
}

export const addCategory = category => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(category)
    })
        .then(res => res.json())
}

export const deleteCategory = (category_id) => {
    return fetch(`http://localhost:8088/categories/${category_id}`, {
        method: "DELETE"
    })
        .then(getCategories)
}