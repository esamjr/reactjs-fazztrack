import "./navbar.css";

function Navbar() {
return (
  <nav className="navbar navbar-expand-lg bg-transparent round">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/src/assets/logo.png" alt="" width="100" className="d-inline-block align-text-top" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-primary me-2">Login</button>
        <button className="btn btn-outline-secondary">Register</button>
      </div>
    </div>
  </nav>

);
}

export default Navbar;
