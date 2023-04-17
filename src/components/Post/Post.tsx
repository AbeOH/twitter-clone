import classes from "./post.module.css";

interface PostProps {
    author: string;
    body: string;
}

function Post(PostProps: PostProps) {
    return (
        <div className={classes.post}>
            <p className={classes.author}> {PostProps.author}</p>
            <p className={classes.body}>{PostProps.body} </p>
        </div>
    );
}

export default Post;
