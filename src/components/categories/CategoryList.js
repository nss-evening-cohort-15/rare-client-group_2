import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getCategories } from "./CategoryManager"
// import "./Categories.css"


export const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    const history = useHistory()

    return(
        <>
        <div className='categories'>
            <h2 className='categories_title'>Categories</h2>
            <ul className='categories_list'>
                {
                categories.map(category => {
                    return (
                        <li>
                            {category.label}
                            <button className='categories_edit' 
                            onClick={() => {history.push(`/categories/edit/${category.id}`)}}>Edit</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    </>
    )


}