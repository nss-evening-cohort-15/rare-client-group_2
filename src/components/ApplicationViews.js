import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryCreate } from "./categories/CategoryCreate" 

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path='/categories'>
                <CategoryList />
            </Route>
            <Route path='/categories/create'>
                <CategoryCreate />
            </Route>

            
        </main>
    </>
}
