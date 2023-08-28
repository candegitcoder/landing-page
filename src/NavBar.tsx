import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary barrita">
      <div className="container-fluid barrita">
        <div className='inicio'>
        <img className='logo' src="src\assets\img\icon.jpeg" alt="" />
        <a className="navbar-brand titulo" href="#">LaslesVPN</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse nombresnav" id="navbarNav">
        <ul className="navbar-nav nombres">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item nombres">
            <a className="nav-link" href="#features">Features</a>
          </li>
          <li className="nav-item nombres">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item nombres">
            <a className="nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item nombres">
            <a className="nav-link" href="#help">Help</a>
          </li>
          <div className='botonesinicio'>
          <li className="nav-item nombres signin">
            <a className="nav-link" href="#">Sign In</a>
          </li>
          <li className="nav-item nombresboton">
            <button type="button" className="btn btn-outline-danger nombresboton">Sign Up</button>
          </li>
          </div>
        </ul>
        </div>
     </div>
    </nav>
  )
};



export default NavBar;