import { useState } from "react";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState([]);
  const [technology, setTechnology] = useState([]);

  const emailHandler = (event) => setEmail(event.target.value);

  const addLang = (e) => {
    if (e.target.checked) setLang([...lang, e.target.value]);
    else setLang(lang.filter((language) => language !== e.target.value));
  };

  const techHandler = (event) => {
    if (event.target.checked)
      setTechnology([...technology, event.target.value]);
    else
      setTechnology(technology.filter((tech) => tech !== event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, gender, lang, technology });
  };

  return (
    <div
      style={{ marginBottom: "550px", marginTop: "10px", marginLeft: "8px" }}
    >
      <h1 style={{ textAlign: "left" }}>Controlled Forms :</h1>
      <form
        style={{ width: "50%", textAlign: "left" }}
        onSubmit={submitHandler}
      >
        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label htmlFor="exampleInputEmail1" style={{ fontWeight: "bold" }}>
            Email address: {email}
          </label>
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailHandler}
            value={email}
            placeholder="Please provide vaild email.."
            required
          />
          {email === "" && (
            <div id="emailHelp" className="form-text" style={{ color: "red" }}>
              Email can't be empty
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ fontWeight: "bold" }}>
            Password: {password}
          </label>
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Please provide strong password.."
            required
          />
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>
          Select Gender: {gender}
        </h3>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          >
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexRadioDefault2"
          >
            Female
          </label>
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>
          Select Languages : {lang.join(", ")}
        </h3>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="checkbox"
            value="English"
            id="flexCheckDefault"
            onChange={(e) => addLang(e)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            English
          </label>
        </div>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="checkbox"
            value="Hindi"
            id="flexCheckChecked"
            onChange={(e) => addLang(e)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexCheckChecked"
          >
            Hindi
          </label>
        </div>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="checkbox"
            value="Marathi"
            id="flexCheckChecked"
            onChange={(e) => addLang(e)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexCheckChecked"
          >
            Marathi
          </label>
        </div>
        <div className="form-check">
          <input
            style={{
              borderStyle: "solid",
              borderColor: "gold",
              borderWidth: "1.5px",
            }}
            className="form-check-input"
            type="checkbox"
            value="Kannada"
            id="flexCheckChecked"
            onChange={(e) => addLang(e)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexCheckChecked"
          >
            Kannada
          </label>
        </div>
        <h5 style={{ marginTop: "15px" }}>
          I like Technolgy : {technology.join(", ")}
        </h5>
        <div
          style={{
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
        </div>
        <button
          style={{ marginTop: "15px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
