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
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) {
        setEnteredAuthor(event.target.value);
    }

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("hideModalHandler is being called");
        onStopPosting();
    }

    return (
        <>
            <button className={classes.closeButton} onClick={hideModalHandler}>
                X
            </button>
            {isPosting && (
                <Modal isOpen={modalIsVisible} onClose={onStopPosting}>
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
