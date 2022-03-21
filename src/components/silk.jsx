import React, { Component } from "react";
import Slider from "react-slick";
import Skill from "./skill";
import { dskills } from "../data/dskills";
import { Typography } from "@mui/material";
export default class Responsive extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        adaptiveHeight:true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{zIndex:"10",margin:0,
    padding:0}} >
        <Slider {...settings}>
        {dskills.map((skill) => (
           <Typography><Skill sx={{ m: 4 }} key={skill.title} skill={skill} /></Typography>
           ))}
        </Slider>
      </div>
    );
  }
}