import classes from "./NewPost.module.css";

interface NewPostProps {
    onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    enteredBody: string;
    onAuthorChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function NewPost({
    onBodyChange,
    enteredBody,
    onAuthorChange,
    onCancel,
}: NewPostProps) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} onChange={onBodyChange} />
            </p>
            {/* <p>{props.enteredBody}</p> */}
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={onAuthorChange}
                />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>
                    {" "}
                    Cancel
                </button>
                <button> Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
