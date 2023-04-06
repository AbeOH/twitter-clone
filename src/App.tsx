// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Post from "./components/post/post";
import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    return (
        <>
            <MainHeader />
            <main>
                <PostList />
            </main>
        </>
    );
}

export default App;
