import { Link, Outlet } from "react-router-dom";

const Support = () => {
  return (
    <div style={{ marginBottom: "550px" }}>
      <div>
        <h2
          style={{
            borderStyle: "groove",
            borderColor: " gold",
            padding: "7px",
            marginBottom: "10px",
            display: "inline-block",
          }}
        >
          Support
        </h2>
      </div>
      <Link to="/support/app">
        <button
          type="button"
          class="btn btn-info"
          style={{ marginRight: "7px", marginBottom: "5px" }}
        >
          Support From App
        </button>
      </Link>
      <Link to="/support/restaurant">
        <button
          type="button"
          class="btn btn-secondary"
          style={{
            marginRight: "7px",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          Support From Restaurant
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Support;
