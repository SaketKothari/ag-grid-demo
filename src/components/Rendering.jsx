import '../index.css';

function MyRenderer(params) {
  return (
    <span className="my-renderer">
      <img
        src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif"
        className="my-spinner"
      />
      {params.value}
    </span>
  );
}

export default MyRenderer;
