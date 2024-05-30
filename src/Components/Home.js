const Home = () => {
  let firstname = "Allamaprabhu";
  let age = 24;

  let person = {
    fname: "Allamaprabhu",
    age: 25,
    place: "Belagavi",
  };

  let person1 = {
    fname: "Akshay",
    age: 26,
    place: "Hubballi",
  };

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>ReactJS Learnings😍</h2>
      <h3
        style={{
          borderStyle: "groove",
          borderColor: " gold",
          padding: "7px",
          marginBottom: "5px",
          display: "inline-block",
        }}
      >
        My Profile
      </h3>
      <h5 className="Home">
        Hello, I am {firstname} and my age is {age}
      </h5>
      <p>
        Hi, I am {person.fname} from {person.place} and age is {person.age}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "550px",
        }}
      >
        <div className="card" style={{ width: "14rem", margin: "7px" }}>
          <img
            src="https://lyonmovers.com/wp-content/uploads/2023/05/male-avatar-profile-picture-vector-10210618-e1685553454907.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">Name: {person.fname}</h6>
            <p className="card-text">Place: {person.place}</p>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "7px" }}>
          <img
            src="https://lyonmovers.com/wp-content/uploads/2023/05/male-avatar-profile-picture-vector-10210618-e1685553454907.jpg"
            className="card-img-top mx-auto"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">Name: {person1.fname}</h6>
            <p className="card-text">Place: {person1.place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
