import { useForm } from '@inertiajs/react'
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Show = ({ post }) => {
    const { delete: destory } = useForm();
    const route = useRoute();

    const handleSubmit = (e) => {
        e.preventDefault();
        destory(route('posts.destroy', post.id));
    }

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
            <div className="flex items-center justify-end hap-2">
                <form action="" onSubmit={handleSubmit}>
                    <button type='submit' className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-900">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Show
