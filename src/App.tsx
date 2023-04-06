import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Post from "./components/post/post";
import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function hideModalHandler(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("hideModalHandler is being called");
        setModalIsVisible(false);
    }

    function showModalHandler() {
        setModalIsVisible(true);
    }
    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostList
                    isPosting={modalIsVisible}
                    onStopPosting={hideModalHandler}
                />
            </main>
        </>
    );
}

export default App;
