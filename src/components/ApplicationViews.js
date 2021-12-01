import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryCreate } from "./categories/CategoryCreate" 
import { CategoryForm } from "./categories/CategoryForm"
import { PostList } from "./posts/PostList"
import { PostDetail } from './posts/PostDetail'
import { PostForm } from "./posts/PostForm"

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

            <Route path='/categories/edit/:categoryId(\d+)'>
                <CategoryForm />
            </Route>


            <Route exact path='/'>
                <PostList />
            </Route>

            <Route path='/posts/create'>
                <PostForm />
            </Route>

            <Route exact path='/posts'>
                <PostList />
            </Route>

            <Route path='/posts/:postId(\d+)'>
                <PostDetail />
            </Route>
            

        </main>
    </>
}
