import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { deleteCategory, getCategories } from "./CategoryManager"
// import "./Categories.css"


export const CategoryList = () => {

    const [categories, setCategories] = useState([])
    const history = useHistory()
    const {category_id} = useParams()
    const [category, setCategory] = useState([])
    
    const handleDelete = (id) => {
        deleteCategory(id)
        .then(() => {
            const remainingCategories = categories.filter( category => category.id !== id )
            setCategories(remainingCategories)
        })
    }

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    

    return(
        <div className='categories'>
            <h2 className='categories_title'>Categories</h2>
            <button onClick={() => history.push("/categories/create")}>
                Create Category
            </button>
            <ul className='categories_list'>
                {
                categories.map(category => {
                    return (
                        <li>{category.label}
                        <button onClick={() => {handleDelete(category.id)}}>
                            Delete Category
                        </button></li>
                    )
                })
                }
            </ul>
        </div>
    )


}