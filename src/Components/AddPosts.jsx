import React, { useState } from 'react'
import MyButton from './Items/MyButton'
import MyInput from './Items/MyInput'

export default function AddPosts({createPost}) {

    const [post, setPost] = useState({ id: 6, title: '', body: '' })

    const addPost = (e) => {
        e.preventDefault()
        if (post.title.trim().length > 6 && post.title.trim().length < 40) {
            const newPost = {
                ...post, id: Date.now()
            }
            createPost(newPost)
            setPost({ title: '', body: '' })
        } else {
            console.log('Заголовок не може бути меншим за 6 символів і більшим за 40')
        }
    }

    return (
        <form className='addPostForm' action="">
            <div>Add new post</div>
            <MyInput placeholder='Name' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
            <MyInput placeholder='Content' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />
            <MyButton name='Add post' onClick={addPost} />
        </form>
    )
}
