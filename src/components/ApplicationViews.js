import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryCreate } from "./categories/CategoryCreate" 
import { CategoryForm } from "./categories/CategoryForm"
import { PostList } from "./posts/PostList"
import { PostDetail } from './posts/PostDetail'
import { TagList } from "./tags/TagList"
import { TagForm } from "./tags/TagForm"
import { TagDetail } from "./tags/TagDetail"
import { MyPosts } from './posts/MyPosts'


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

            <Route exact path='/posts'>
                <PostList />
            </Route>

            <Route path='/posts/:postId(\d+)'>
                <PostDetail />
            </Route>

            <Route path='/myposts'>
                <MyPosts />
            </Route>
            
            <Route exact path='/tags'>
                <TagList />
            </Route>
            <Route path='/tags/create'>
                <TagDetail />
            </Route>
            <Route path='/tags/edit/:tagId(\d+)'>
                <TagForm />
            </Route>
        </main>
    </>
}
