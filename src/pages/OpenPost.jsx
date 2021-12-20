import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PostService } from '../API/PostService'
import Preloader from '../Components/Preloader'
import { useFetching } from '../hooks/useFetching'

export default function OpenPost() {
    const params = useParams()
    const [post, setPost] = useState({})

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <>
            {isLoading
                ? <Preloader />
                : <div>
                    <h2>
                        {post.id + '. '}
                        {post.title}
                    </h2>
                    <div>
                        {post.body}
                    </div>
                </div>
            }
        </>
    )
}
