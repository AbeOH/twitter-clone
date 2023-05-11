import { useState, useEffect } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

interface Post {
    body: string;
    author: string;
}

interface PostListProps {
    isPosting: boolean;
    onStopPosting: () => void;
    postData: {
        body: string;
        author: string;
        existingPosts: Post[];
    };
}

function PostList({ isPosting, onStopPosting, postData }: PostListProps) {
    // fetch("http://localhost:8080/posts").then(response => response.json().then(data => {
    //     console.log(data);
    //     setPosts(data.posts);
    // }));
    const [posts, setPosts] = useState<Post[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            console.log(resData);
            setPosts(resData.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData: Post) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
            // }).then(() => {
            //     console.log('New post added!');
        });

        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return (
        <>
            {isPosting && (
                <Modal isOpen={isPosting} onClose={onStopPosting}>
                    <NewPost
                        // enteredBody={enteredBody}
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.body}
                            author={post.author}
                            body={post.body}
                        />
                    ))}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Be the first to post!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: "center", color: "white" }}>
                    Loading posts...
                </div>
            )}
        </>
    );
}

export default PostList;
