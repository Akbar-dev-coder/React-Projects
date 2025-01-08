import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/postListStore";
import Welcomemessage from "./welcomemessage";

const Postlist = () => {
  const { postList, addinitialPosts } = useContext(PostListData);
  const handlegetpost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && <Welcomemessage onGetPost={handlegetpost} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
