import React, {useState, createContext} from "react";

export const CommentContext = createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
            .then(res => res.json())
            .then(setComments)
    }

    const getCommentById = (comment_id) => {
		return fetch(`http://localhost:8088/comments/${comment_id}`)
			.then(res => res.json())
    }

    const addComments = (commentObj) => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
        .then(getComments)
    }

    const updateComment = (comment) => {
        return fetch((`http://localhost:8088//items/${comment.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const deleteComment = (commentId) => {
        return fetch((`http://localhost:8088/posts/${commentId}`), {
            method: "DELETE"
        })
            .then(getComments)
    }

    return (
		<CommentContext.Provider value={{
			comments, setComments, getComments, addComments, getCommentById, updateComment, deleteComment
		}}>
			{props.children}
		</CommentContext.Provider>
	)
}




