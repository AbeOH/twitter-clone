import classes from "./NewPost.module.css";

interface NewPostProps {
    onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    enteredBody: string;
    onAuthorChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function NewPost(props: NewPostProps) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} onChange={props.onBodyChange} />
            </p>
            {/* <p>{props.enteredBody}</p> */}
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={props.onAuthorChange}
                />
            </p>
        </form>
    );
}

export default NewPost;
