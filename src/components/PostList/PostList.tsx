import { useState } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";

function PostList() {
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
            <NewPost
                onBodyChange={changeBodyHandler}
                onAuthorChange={changeAuthorHandler}
                enteredBody={enteredBody}
            />
            <ul className={classes.posts}>
                <Post richPerson={enteredAuthor} companyName={enteredBody} />
                <Post richPerson="Jeff Bezos" companyName="Amazon" />
            </ul>
        </>
    );
}

export default PostList;
