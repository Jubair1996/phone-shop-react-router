import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div  className="flex justify-center items-center h-screen">
      <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
      <button className="bg-black px-4 py-2 rounded text-white font-bold text-xl">Go to Hom</button>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
