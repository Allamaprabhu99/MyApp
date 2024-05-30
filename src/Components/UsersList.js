const UsersList = ({ user }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "5px", borderColor: "lightblue" }}
    >
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          {user.name}
        </h5>
        <h6
          className="card-text"
          style={{ color: "blue", marginBottom: "5px" }}
        >
          {user.email}
        </h6>
        <div style={{ textAlign: "left" }}>
          <p
            className="card-text"
            style={{ fontWeight: "bold", marginBottom: "2px" }}
          >
            Address:
          </p>
          <p className="card-text" style={{ marginBottom: "2px" }}>
            Street: {user.address.street}
          </p>
          <p className="card-text" style={{ marginBottom: "2px" }}>
            Suite: {user.address.suite}
          </p>
          <p className="card-text" style={{ marginBottom: "2px" }}>
            City: {user.address.city}
          </p>
          <p className="card-text" style={{ marginBottom: "2px" }}>
            Zipcode: {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
