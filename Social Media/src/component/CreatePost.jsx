import { useContext, useRef } from "react";
import { PostList } from "../store/postListStore";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const useridelement = useRef();
  const titleelement = useRef();
  const contentelement = useRef();
  const reactionelement = useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = useridelement.current.value;
    const Title = titleelement.current.value;
    const Content = contentelement.current.value;
    const reactions = reactionelement.current.value;
    const Tags = tagselement.current.value.split(" ");

    useridelement.current.value = "";
    titleelement.current.value = "";
    contentelement.current.value = "";
    reactionelement.current.value = "";
    tagselement.current.value = "";
    navigate("/");
    addPost(userId, Title, Content, reactions, Tags);
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User Id
        </label>
        <input
          type="Text"
          ref={useridelement}
          className="form-control"
          id="user_id"
          aria-describedby="emailHelp"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleelement}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Hello how are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <input
          type="Text"
          ref={contentelement}
          className="form-control"
          id="content"
          aria-describedby="emailHelp"
          placeholder="Tell us about youself"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="Text"
          ref={reactionelement}
          className="form-control"
          id="reaction"
          aria-describedby="emailHelp"
          placeholder="Enter your reaction here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="Text"
          ref={tagselement}
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="please enter your tags here using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
