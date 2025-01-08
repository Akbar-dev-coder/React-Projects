import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/postListStore";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card ms-3 mt-4" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDeleteForever />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="text-bg-primary badge hashtags">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary mt-2" role="alert">
          Total reaction is {post.reaction}
        </div>
      </div>
    </div>
  );
}

export default Post;
