import { useState } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

interface PostListProps {
    isPosting: boolean;
    onStopPosting: () => void;
}

function PostList({ isPosting, onStopPosting }: PostListProps) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal isOpen={isPosting} onClose={onStopPosting}>
                    {/* isOpen={modalIsVisible} onClick={showModalHandler} */}
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}
                        enteredBody={enteredBody}
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}

            <ul className={classes.posts}>
                <Post richPerson={enteredAuthor} companyName={enteredBody} />
                <Post richPerson="Jeff Bezos" companyName="Amazon" />
            </ul>
        </>
    );
}

export default PostList;
