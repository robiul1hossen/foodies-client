import Error from "../components/Error";

const ErrorPage = () => {
  return (
    <div>
      <Error title="404 — Not found" subtitle="Oops" homeHref="/" />
    </div>
  );
};

export default ErrorPage;
