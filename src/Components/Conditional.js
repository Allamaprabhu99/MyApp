import { useState } from "react";

const Conditional = () => {
  let login = true;
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState([]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const techHandler = (e) => {
    if (e.target.checked) setTechnology([...technology, e.target.value]);
    else setTechnology(technology.filter((tech) => tech !== e.target.value));
  };
  if (login)
    return (
      <div>
        <h2
          style={{
            borderStyle: "groove",
            borderColor: " gold",
            padding: "7px",
            marginBottom: "5px",
            display: "inline-block",
            fontWeight: "bold",
          }}
        >
          Conditional Rendering
        </h2>
        <div>
          <label
            style={{ fontWeight: "bold", fontSize: "20px" }}
            htmlFor="nameInput"
          >
            Enter your name :
          </label>
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
              marginLeft: "4px",
            }}
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <h3>Welcome to ReactJS Learnings {name === "" ? "Guest" : name}...</h3>

        <h5 style={{ marginTop: "15px" }}>
          I like Technolgy : {technology.join(", ")}
        </h5>
        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "5px",
            marginBottom: "550px",
            fontWeight: "bold",
          }}
        >
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="HTML"
                id="defaultCheck1"
                onChange={techHandler}
                style={{ borderWidth: "2px", borderColor: "gold" }}
              />
              <label className="form-check-label" for="defaultCheck1">
                HTML
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="CSS"
                id="defaultCheck1"
                onChange={techHandler}
                style={{ borderWidth: "2px", borderColor: "gold" }}
              />
              <label className="form-check-label" for="defaultCheck1">
                CSS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="JavaScript"
                id="defaultCheck1"
                onChange={techHandler}
                style={{ borderWidth: "2px", borderColor: "gold" }}
              />
              <label className="form-check-label" for="defaultCheck1">
                JavaScript
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="ReactJS"
                id="defaultCheck1"
                onChange={techHandler}
                style={{ borderWidth: "2px", borderColor: "gold" }}
              />
              <label className="form-check-label" for="defaultCheck1">
                ReactJS
              </label>
            </div>
          </div>
        </form>
      </div>
    );
};
export default Conditional;
