import React from 'react'

const Show = ({ post }) => {
    return (
        <div className="p-4 border-b-2">
            <div className="text-sm text-gray-500">
                <span>Posted On: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <div className="">
                <h5 className="text-lg font-semibold">{post.title}</h5>
                <p className="text-sm">{post.content}</p>
            </div>
        </div>
    )
}

export default Show
