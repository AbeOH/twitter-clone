import { useState } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostList({ isPosting, onStopPosting }) {
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
            <button className={classes.closeButton} onClick={hideModalHandler}>
                X
            </button>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    {/* isOpen={modalIsVisible} onClick={showModalHandler} */}
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}
                        enteredBody={enteredBody}
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
