import { Link } from '@inertiajs/react'
import React from 'react'

const Home = ({ name }) => {
    return (
        <>
            <div className='title'>Hello {name} </div>
            <Link preserveScroll href="/" className='block mt-[1000px] title'>
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    )
}

export default Home
