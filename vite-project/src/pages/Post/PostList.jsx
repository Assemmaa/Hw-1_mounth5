import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PostList = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => setPosts(resp.data))
    }, [])
        return (
            <div>PostList

                <ul>
                    {posts && posts.map( p =>
                        <li key = {p.id}>
                            <Link to={`/posts/${p.id}`}> {p.title}</Link>
                    </li>
                    )}
                </ul>
            </div>
        );
}

export default PostList;