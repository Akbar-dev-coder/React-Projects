import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Postlist from "./component/Postlist";
import CreatePost from "./component/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/postListStore";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <PostListProvider>
        <div className="main">
          <Sidebar></Sidebar>
          <div className="section">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
