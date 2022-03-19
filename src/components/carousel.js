import React from 'react'
import Project from './project'
import { dprojects } from "../data/dprojects";
import { Typography } from '@mui/material';
import projects from './projects';
export const carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    {dprojects.map(project=>( <li data-target="#carouselExampleIndicators" data-slide-to={dprojects.indexOf(project)}></li>))}
  </ol>
  <div class="carousel-inner">
  <div class="carousel-item active"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaFhp0fn9_dwmGMRgRvdjMyRCHf772gJmeQ&usqp=CAU' alt='Image number 1' class="img-fluid"/></div>
  {dprojects.map(project=>(  <div key={dprojects.indexOf(project)} class="carousel-item"><img src={project.image} alt= { 'Image number ' + dprojects.indexOf(project)} class="img-fluid"/></div>))}
    
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}
export default carousel