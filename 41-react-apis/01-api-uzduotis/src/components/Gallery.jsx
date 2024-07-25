import useAxiosGet from "./useAxiosGet";

const Gallery = () => {
  const { data: pics, loading, error } = useAxiosGet("photos");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div id="gallery">
      <h1>My gallery:</h1>
      <div className="gallery-grid">
        {pics.slice(0, 20).map((pic) => (
          <div
            key={pic.id}
            className="gallery-item">
            <h3>{pic.title}</h3>
            <img
              src={pic.url || "https://placehold.co/600x600"}
              alt={pic.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
