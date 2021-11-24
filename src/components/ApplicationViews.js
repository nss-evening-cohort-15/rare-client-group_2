import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path='/categories'>
                <CategoryList />
            </Route>

            <Route path='/categories/edit/:categoryId(\d+)'>
                <CategoryForm />
            </Route>

            

            
        </main>
    </>
}
