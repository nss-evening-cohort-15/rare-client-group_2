import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getTags } from "./TagManager";
import { addTag } from "./TagManager";

export const TagDetail = () => {
    const label = useRef()

    const history = useHistory()
    const {tag_id} = useParams()
    const [tag, setTag] = useState([]);

    useEffect(() => {
        getTags().then((data) => setTag(data))
    }, [])

    const handleControlledInputChange = (event) => {
        const newTag = { ...tag }
        newTag[event.target.id] = event.target.value
        setTag(newTag)
    }

    const handleSaveTag= () => {

        if (tag_id === 0) {
            window.alert("Please enter tag")
        } else {
            addTag({
                label: tag.label
            })
            .then(() => history.push("/tags"))
        }
    }

    return(
        <form className="tagForm">
            <h2 className="tagForm_title">New Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Tag: </label>
                    <input type="text" id="label" ref={label} required autoFocus className="form-control" placeholder="Tag" onChange={handleControlledInputChange} defaultValue={tag.label} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    handleSaveTag()
                }}
                className="btn btn-primary">
                    Save Tag
                </button>
        </form>
    )
}