import { Link, usePage } from '@inertiajs/react'
import Pagination from '@/Components/Pagination';
import Posts from '@/Components/Posts';
import { useState } from 'react';

const Home = ({ posts }) => {
    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message);
    console.log(flashMsg);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <h1 className='title'>Hello </h1>
            {
                flashMsg &&
                <div className='absolute p-2 text-sm text-white rounded-md shadow-lg right-6 top-24 bg-rose-500'>{flashMsg}</div>
            }
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
