import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addinitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newpostlist = currPostList;
  if (action.type === "Delete post") {
    newpostlist = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "Add_initial_Post") {
    newpostlist = action.payload.posts;
  } else if (action.type === "Add_Post") {
    newpostlist = [action.payload, ...currPostList];
  }

  return newpostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(postListReducer, []);

  const addPost = (userId, Title, Content, reactions, Tags) => {
    dispachPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: Title,
        body: Content,
        reaction: reactions,
        userid: userId,
        tags: Tags,
      },
    });
  };

  const addinitialPosts = (posts) => {
    dispachPostList({
      type: "Add_initial_Post",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postid) => {
    dispachPostList({
      type: "Delete post",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addinitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
