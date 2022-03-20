import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

export default function appabar() {
  return (
    
    <div md={{position :"absolute",width: "66%"}}>
     
      
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand " href="#" >YK <span style={{color : "purple"}}>•</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item active">
          <a className="nav-link " style={{color : "purple" }} href="#intro" >Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color : "purple"}} href="#skills" >Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color : "purple"}} href="#projects">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color : "purple"}} href="#t">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color : "purple"}} href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </nav></div>
  )
}
