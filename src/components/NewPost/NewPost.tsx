import classes from "./NewPost.module.css";
import { useState } from "react";

interface NewPostProps {
    // onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    // enteredBody: string;
    // onAuthorChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function NewPost({
    // enteredBody,
    onCancel,
}: // onChange,
NewPostProps) {
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
        console.log(postData);
        onCancel();

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
}

export default NewPost;
