import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { PostList } from "./posts/PostList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route path='/categories'>
                <CategoryList />
            </Route>

            <Route exact path='/'>
                <PostList />
            </Route>

            
        </main>
    </>
}
