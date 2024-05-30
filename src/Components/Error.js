import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Oopssss, something went wrong.......</h2>
      <h4>
        Status: {err.status} - {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
