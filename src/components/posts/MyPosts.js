import React, { useEffect, useState } from "react";
import { getPosts } from "./PostManager";

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const [myPosts, setMyPosts] = useState([])

    const userId = localStorage.getItem('rare_user_id')

    useEffect(() => {
        getPosts().then((data) => {setPosts(data)})
    }, [])

    useEffect(() => {
        const myPosts = posts.filter(post => post.user_id === parseInt(userId))
        setMyPosts(myPosts)
    }, [posts, userId])

    return (
        <div className='myPosts'>
            {
            myPosts.map(post => {
                return (
                    <div className='myPosts_post'>
                        <h3>{post.title}</h3>
                        <img src={post.image_url} alt='post_image'/>
                        <p>Posted on {post.publication_date}</p>
                        <p>Posted by user {post.user.username}</p>
                    </div>
                )
            })
            }
        </div>
    )
}