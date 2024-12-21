import { useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post("/posts")
    }
    return (
        <>
            <h1 className='title'>Create New Post</h1>
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

export default Create
