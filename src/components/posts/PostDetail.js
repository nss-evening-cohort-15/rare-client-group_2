import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getPosts } from "./PostManager"
// import { CommentList } from "./comments"


export const PostDetail = () => {

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({user:{username:''}})
    const {postId} = useParams()

    useEffect(() => {
        getPosts().then((data) => {setPosts(data)})
    }, [])

    useEffect(() => {
        const thePost = posts.find(post => post.id === parseInt(postId)) 
        || {image_url:'', user_id:'', publication_date:'', content:'', user:{username:''}}
        setPost(thePost)
    }, [postId, posts])

    return (
        <div className='post_detail'>
            <h3>{post.title}</h3>
            <img src={post.image_url} alt='post_image' className='post_detail_title'/>
            <p className='post_detail_date'>Posted on {post.publication_date}</p>
            <p className='post_detail_user'>Posted by user {post.user.username}</p>
            {/* <div className='post_detail_comments'>
                <CommentList postId = {parseInt(postId)}/>
            </div> */}
        </div>
    )
}