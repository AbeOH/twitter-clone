import classes from "./NewPost.module.css";
import { useState } from "react";

interface NewPostProps {
    onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onAddPost: (postData: { body: string; author: string }) => void;
}

function NewPost({ onCancel, onAddPost }: NewPostProps) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(
        event:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    id="body"
                    required
                    rows={3}
                    onChange={changeBodyHandler}
                />
            </p>
            {/* <p>{props.enteredBody}</p> */}
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={changeAuthorHandler}
                />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button> Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
