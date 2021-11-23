import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getCategories } from "./CategoryManager"
// import "./Categories.css"


export const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    return(
        <div className='categories'>
            <h2 className='categories_title'>Categories</h2>
            <ul className='categories_list'>
                {
                categories.map(category => {
                    return (
                        <li>{category.label}</li>
                    )
                })
                }
            </ul>

        </div>
    )


}