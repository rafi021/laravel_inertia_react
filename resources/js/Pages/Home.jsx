import { Link } from '@inertiajs/react'
import Pagination from '@/Components/Pagination';
import Posts from '@/Components/Posts';

const Home = ({ posts }) => {

    return (
        <>
            <h1 className='title'>Hello </h1>
            <div className="">
                {posts.data.map(post => (
                    <Posts key={post.id} post={post} />
                ))}
            </div>
            <Pagination posts={posts} />
        </>
    )
}

export default Home;
