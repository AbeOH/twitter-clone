import classes from "./post.module.css";

interface PostProps {
    richPerson: string;
    companyName: string;
}

function Post(PostProps: PostProps) {
    return (
        <div className={classes.post}>
            <p className={classes.richPerson}> {PostProps.richPerson}</p>
            <p className={classes.companyName}>{PostProps.companyName} </p>
        </div>
    );
}

export default Post;
