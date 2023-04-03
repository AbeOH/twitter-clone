import { useState } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);

    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function hideModalHandler() {
        console.log("hideModalHandler is being called");
        setModalIsVisible(false);
    }

    console.log("modalIsVisible:", modalIsVisible);

    function showModalHandler() {
        setModalIsVisible(true);
    }

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
            <button onClick={hideModalHandler}>X</button>

            <Modal isOpen={modalIsVisible} onClose={showModalHandler}>
                <NewPost
                    onBodyChange={changeBodyHandler}
                    onAuthorChange={changeAuthorHandler}
                    enteredBody={enteredBody}
                />
            </Modal>

            <ul className={classes.posts}>
                <Post richPerson={enteredAuthor} companyName={enteredBody} />
                <Post richPerson="Jeff Bezos" companyName="Amazon" />
            </ul>
        </>
    );
}

export default PostList;
