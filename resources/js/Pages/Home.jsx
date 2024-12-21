import { Link } from '@inertiajs/react'

const Home = ({ posts }) => {
    return (
        <>
            <h1 className='title'>Hello </h1>
            <div className="">
                {posts.map(post => (
                    <div key={post.id} className="p-4 border-b-2">
                        <div className="text-sm text-gray-500">
                            <span>Posted On: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <div className="">
                            <h5 className="text-lg font-semibold">{post.title}</h5>
                            <p className="text-sm">{post.content}</p>
                            {/* <Link href={route('post.show', post.id)} className="btn btn-primary">View</Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;
