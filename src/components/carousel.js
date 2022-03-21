import React from 'react'
import Project from './project'
import { dprojects } from "../data/dprojects";
import { Typography } from '@mui/material';
import projects from './projects';
export const carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{margin:0,
      padding:0,
      overflowX:"hidden"}}>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    {dprojects.map(project=>( <li data-target="#carouselExampleIndicators" data-slide-to={dprojects.indexOf(project)}></li>))}
  </ol>
  <div class="carousel-inner">
  <div class="carousel-item active"><img src='https://pngimage.net/wp-content/uploads/2018/06/resim-yok-png-.png' alt='Image number 1' class="img-fluid"/></div>
  {dprojects.map(project=>(  <div key={dprojects.indexOf(project)} class="carousel-item"><img src={project.image} alt= { 'Image number ' + (dprojects.indexOf(project)+1)} class="img-fluid"/></div>))}
    
    
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