import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

export default function appabar() {
  return (
    
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link text-secondary" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#" >Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </nav></div>
  )
}
