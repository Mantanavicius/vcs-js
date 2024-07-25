import useAxiosGet from "./useAxiosGet";
import { Link } from "react-router-dom";

const Forum = () => {
  const { data: posts, loading, error } = useAxiosGet("posts");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div id="forum">
      <h1>Recent posts:</h1>
      {posts.slice(0,5).map((post) => (
        <div
          key={post.id}
          className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/forum/${post.id}`}>Comments</Link>
        </div>
      ))}
    </div>
  );
};

export default Forum;
