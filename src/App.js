import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
// import CakeGallery from "./Components/CakeGallery";
// import ClassComponent from "./Components/ClassComponent";
// import Conditional from "./Components/Conditional";
// import Home from "./Components/Home";
// import Increment from "./Components/Increment";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <div
        style={{
          backgroundImage:
            'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zODAtMDcta255Z2FwNmouanBn.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "100%",
          height: "447px",
          /* You can adjust the height as needed */
        }}
      >
        <h2 style={{ color: "gold", paddingTop: "160px" }}>
          ReactJS Learnings😍
        </h2>
        <h3 style={{ color: "gold" }}>Welcome to My App</h3>
        <i
          style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}
          className="Home"
        >
          Hello, I am Allamaprabhu
        </i>
      </div>

      <footer
        style={{
          backgroundColor: "#333 rgba(255, 255, 255, 0.5)",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          backgroundImage:
            'url("https://png.pngtree.com/background/20210710/original/pngtree-purple-ray-light-strip-minimalist-banner-background-picture-image_1051495.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50px",
        }}
      >
        <h6 style={{ color: "gold", textAlign: "left" }}>
          © 2024 MyApp. All rights reserved.
        </h6>
      </footer>

      {/* <Home />
      <Conditional />
      <Increment />
      <CakeGallery />
      <ClassComponent /> */}
    </div>
  );
}

export default App;
