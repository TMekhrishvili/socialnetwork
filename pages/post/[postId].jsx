import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetail = () => {
    const router = useRouter();
    const { postId } = router.query;
    const [post, setPost] = useState('');

    useEffect(() => {
        postId && (async function () {
            const data = await axios.get(`http://localhost:3000/api/post/${postId}`);
            setPost(data.data);
        })();
    }, [postId])
    return (
        <div>PostID: {post}</div>
    )
}

export default PostDetail
