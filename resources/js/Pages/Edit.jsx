import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Edit = ({ post }) => {
    const route = useRoute();
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content
    })

    const submit = (e) => {
        e.preventDefault()
        put(route('posts.update', post), data)
    }
    return (
        <>
            <Head title="Edit" />
            <h1 className='title'>Update Post</h1>
            <div className="w-1/2 mx-auto">
                <form action="" onSubmit={submit}>
                    <div className="">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} id="title" placeholder="Enter title" />
                        {errors.title && <div className='text-sm text-red-500'>{errors.title}</div>}
                    </div>
                    <div className="">
                        <label htmlFor="content">Content</label>
                        <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} id="content" rows="3" placeholder="Enter content" />
                        {errors.content && <div className='text-sm text-red-500'>{errors.content}</div>}
                    </div >
                    <button type="submit" disabled={processing} className="mt-4 primary-btn">Submit</button>
                </form >
            </div >
        </>
    )
}

export default Edit
