import React from 'react';
import Relevantz from '../../assets/Images/Relevantz.png';
import '../../Styles/Navbar.css'; // Adjust the path as needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)"><img src={Relevantz} alt="Relevantz Logo" /></a>
        <div><h5>Learning Management System</h5></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <form className="d-flex">
            <div className="input-group ms-5">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="btn btn-light" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Course</a>
            </li>
           
          </ul>
          <div className="user-profile">
            {/* <img src="https://www.example.com/profile.png" alt="Profile" /> */}
            <span>Priya</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;