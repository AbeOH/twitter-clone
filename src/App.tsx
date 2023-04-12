import { useState } from "react";
import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isPosting, setIsPosting] = useState(true);

    function hideModalHandler(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("hideModalHandler is being called");
        setIsPosting(false);
    }

    function showModalHandler() {
        setIsPosting(true);
    }
    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostList
                    isPosting={isPosting}
                    onStopPosting={hideModalHandler}
                />
            </main>
        </>
    );
}

export default App;
