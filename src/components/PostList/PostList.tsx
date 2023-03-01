import Post from "../Post/Post";
import classes from "./PostList.module.css";
import NewPost from "../NewPost/NewPost";

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post richPerson="Elon Musk" companyName="Tesla" />
                <Post richPerson="Jeff Bezos" companyName="Amazon" />
            </ul>
        </>
    );
}

export default PostList;
