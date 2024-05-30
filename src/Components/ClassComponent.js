import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Prabhu",
      place: "Belagavi",
    };
  }
  updateName = () => {
    const newName = prompt("Enter new name:");
    if (newName !== null) {
      this.setState({ name: newName });
    }
  };

  updatePlace = () => {
    const newPlace = prompt("Enter new place:");
    if (newPlace !== null) {
      this.setState({ place: newPlace });
    }
  };
  render() {
    return (
      <div style={{marginBottom:"450px"}}>
        <h1>User Details</h1>
        <h4>
          Name: {this.state.name} 📍Place: {this.state.place}
        </h4>

        <button
          style={{ marginLeft: "5px" }}
          class="btn btn-primary"
          onClick={this.updateName}
        >
          Update Name
        </button>
        <button
          style={{ marginLeft: "5px" }}
          class="btn btn-secondary"
          onClick={this.updatePlace}
        >
          Update Place
        </button>
      </div>
    );
  }
}
export default ClassComponent;
