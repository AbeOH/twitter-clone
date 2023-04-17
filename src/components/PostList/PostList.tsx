import { useState } from "react";

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
    const [posts, setPosts] = useState<Post[]>([]);

    function addPostHandler(postData: Post) {
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
            {posts.length > 0 && (
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
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Be the first to post!</p>
                </div>
            )}
        </>
    );
}

export default PostList;
