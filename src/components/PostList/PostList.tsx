import { useState } from "react";

import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";

function PostList() {
    const [enteredBody, setEnteredBody] = useState("");

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEnteredBody(event.target.value);
    }

    return (
        <>
            <NewPost
                onBodyChange={changeBodyHandler}
                enteredBody={enteredBody}
            />
            <ul className={classes.posts}>
                <Post richPerson="Elon Musk" companyName={enteredBody} />
                <Post richPerson="Jeff Bezos" companyName="Amazon" />
            </ul>
        </>
    );
}

export default PostList;
