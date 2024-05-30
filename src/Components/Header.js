import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ fontSize: "15px" }}
    >
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/background/20210710/original/pngtree-purple-ray-light-strip-minimalist-banner-background-picture-image_1051495.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link
              class="nav-link"
              to="/"
              style={{ color: "gold", fontWeight: "bold" }}
            >
              MyApp <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/home" style={{ color: "gold" }}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/classcomp" style={{ color: "gold" }}>
              Class Component
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/cake" style={{ color: "gold" }}>
              Cake Gallery
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/increment" style={{ color: "gold" }}>
              Increment
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/conditional" style={{ color: "gold" }}>
              Conditional
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/lifecycle" style={{ color: "gold" }}>
              Life Cycle
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products" style={{ color: "gold" }}>
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/users" style={{ color: "gold" }}>
              Users
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/forms" style={{ color: "gold" }}>
              Forms
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/support" style={{ color: "gold" }}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
