import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getCategories, editCategories } from "./CategoryManager"

export const CategoryForm = () => {
    const history = useHistory()
    
    const [categories, setCategories] = useState([])
    const [theCategory, setTheCategory] = useState({label: ''})
    const [newCategory, setNewCategory] = useState({})

    const { categoryId } = useParams()

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    useEffect(() => {
        const theCategory = categories.find(category => category.id === parseInt(categoryId)) || {label: ''}
        setTheCategory(theCategory)
    }, [categories, categoryId])


    const handleControlledInputChange = (event) => {
        newCategory[event.target.name] = event.target.value
        setNewCategory(newCategory)
    }

    const handleSaveEdit = (e) => {
        e.preventDefault()

        editCategories({
            id: theCategory.id,
            label: newCategory.label
        }).then(() =>{
           history.push('/categories')
        })
    }

    return (
        <div className='category_edit'>
            <form className='category_edit_form'>
                <fieldset>
                    <div className="category_edit_form_group">
                            <label htmlFor="name">Category Name: </label>
                            <input type="text" name="label" required autoFocus className="form-control"
                                placeholder="Category label"
                                defaultValue={theCategory.label}
                                onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
            </form>
            <button className='category_edit--save' onClick={handleSaveEdit}>Save</button>
            <button className='category_edit--cancel' onClick={() => {history.push('/categories')}}>Cancel</button>
        </div>
    )
}