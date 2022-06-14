import React from 'react';
import Post from './Post';
import './css/Posts.css';
const posts = [
    {
        id: 1,
        likes: 45223,
        caption: 'Welcome to the Golden Halls of Mysore Palace.',
        image: 'image01.jpg',
    },
    {
        id: 2,
        likes: 34567,
        caption: 'At world’s highest Shiva Temple.',
        image: 'image02.jpg',
    },
    {
        id: 3,
        likes: 562117,
        caption: 'The story of each stone leads back to a mountain',
        image: 'image03.jpg',
    },
    {
        id: 4,
        likes: 75313,
        caption: 'Leave the road, take the trails.',
        image: 'image04.jpg',
    },
    {
        id: 5,
        likes: 67542,
        caption: 'Nature is the best artist afterall.',
        image: 'image05.jpg',
    },
    {
        id: 6,
        likes: 6754231,
        caption:
            'Two roads diverged in a wood, and I - \nI took the one less traveled by, \nAnd that has made all the difference.',
        image: 'image06.jpg',
    },
    {
        id: 7,
        likes: 97423,
        caption:
            'A mosque located inside the Srirangapatna Fort built during the reign of Tipu Sultan. The mosque has three inscriptions that mentions the nine names of Prophet Mohammad. The walls and ceiling are decorated with intricate motifs and paintings.',
        image: 'image07.jpg',
    },
];

function Posts() {
    return (
        <div className='posts__scroll'>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    likeCount={post.likes}
                    caption={post.caption}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default Posts;
