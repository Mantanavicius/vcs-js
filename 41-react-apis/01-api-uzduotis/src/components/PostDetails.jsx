import { Link, useParams } from "react-router-dom";
import useAxiosGet from "./useAxiosGet";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useAxiosGet(`posts/${id}`);
  const {
    data: comments,
    loading: commentLoading,
    error: commentError,
  } = useAxiosGet(`posts/${id}/comments`);
  return (
    <div className="post-details">
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {post && (
          <div>
            <div className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
            <h2>Comments:</h2>
            {commentLoading && <h1>Loading...</h1>}
            {commentError && <h1>{commentError.message}</h1>}
            {comments && (
              <div>
                {comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <h3>{comment.name}</h3>
                    <h4>created by: {comment.email}</h4>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Link to={"/forum"}>Back</Link>
    </div>
  );
};

export default PostDetails;
