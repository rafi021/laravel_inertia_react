import { Link } from '@inertiajs/react'
import React from 'react'

const Pagination = ({ posts }) => {
    return (
        <div className="px-4 py-12">
            {posts.links.map((link, index) => (
                link.url ?
                    <Link key={index} href={link.url}
                        className={`p-1 mx-1 text-sm ${link.active ? ' text-blue-500 font-bold' : ''}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                    : <span
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-sm text-slate-300"
                    >
                    </span>
            ))}
        </div>
    )
}

export default Pagination
