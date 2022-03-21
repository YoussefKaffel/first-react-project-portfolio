import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

export default function appabar() {
  return (
    
    <div md={{position :"absolute",width: "66%"}} style={{margin:0,
    padding:0,
    overflowX:"hidden"}}>
     
      
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand " href="#" >YK <span style={{color : "purple"}}>•</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item active">
          <a className="nav-link " style={{
        color: "purple" , display:'flex', flexDirection:'row'}} href="#intro" ><HomeRoundedIcon/>Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " style={{
        color: "purple" , display:'flex', flexDirection:'row'}} href="#about" ><QuestionMarkTwoToneIcon/>About<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{
        color: "purple" , display:'flex', flexDirection:'row'}} href="#skills" ><SettingsIcon/>Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{
        color: "purple" , display:'flex', flexDirection:'row'}}  href="#projects"><LibraryBooksRoundedIcon/>Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{
        color: "purple" , display:'flex', flexDirection:'row'}} href="#t"><MenuBookRoundedIcon/>Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{
        color: "purple" , display:'flex', flexDirection:'row'}} href="#contact"><ContactPageRoundedIcon/>Contact</a>
        </li>
        
      </ul>
    </div>
  </nav></div>
  )
}
