import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { deleteTag, getTags } from "./TagManager"



export const TagList = () => {

    const [tags, setTags] = useState([])
    
    const handleDelete = (id) => {
        deleteTag(id)
        .then(() => {
            const remainingTags = tags.filter( tag => tag.id !== id )
            setTags(remainingTags)
        })
    }

    useEffect(() => {
        getTags().then((data) => setTags(data))
    }, [])

    const history = useHistory()

    return(
        <>
        <div className='tags'>
            <h2 className='tags_title'>Tags</h2>
            <button onClick={() => history.push("/tags/create")}>
                Create Tag
            </button>
            <ul className='tags_list'>
                {
                tags.map(tag => {
                    return (
                        <li>
                          {tag.label}
                          <button className='tags_edit' 
                          onClick={() => {history.push(`/tags/edit/${tag.id}`)}}>Edit</button>
                          <button onClick={() => {handleDelete(tag.id)}}>Delete Tag</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    </>
    )
}