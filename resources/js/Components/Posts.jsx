import { Link } from '@inertiajs/react'
import React from 'react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Posts = ({ post }) => {
    const route = useRoute();
    return (
        <div className="p-4 border-b-2">
            <div className="text-sm text-gray-500">
                <span>Posted On: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <div className="">
                {/* <Link href={`/posts/${post.id}`} className="">
                    <h5 className="text-lg font-semibold text-slate-900">{post.title}</h5>
                </Link> */}
                <Link href={route('posts.show', post.id)} className="">
                    <h5 className="text-lg font-semibold text-slate-900">{post.title}</h5>
                </Link>
            </div>
        </div >
    )
}

export default Posts
