import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard(id, featuredImage, title) {
    return (
        <div className='width-full'>
            <Link to={`/post/${id}`}>
                <div className='w-full #bg-gray-100 rounded-xt p-4'>
                    <div className='w-full justify-center mb-4'>
                        <img src={appwriteService.getFilePreview
                            (featuredImage)}
                            alt={title}
                            className=' rounded-xl'/>
                    </div>
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default PostCard