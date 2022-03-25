import React from 'react'
import mohan from "../../image/mohan.png";
import judan from "../../image/judan.png";
import ashutosh from "../../image/ashutosh.png";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import quotes from '../../image/quotes.png';



export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      };
          const testimonial=[
                {id:1, image:mohan, name:"Mohani Ram", designation:"Milakpur, Rajsthan", text:"Comprehensive list of synonyms for tasting good. Comprehensive list of synonyms for tasting good."},
                {id:2, image:judan, name:"Judan Coachi", designation:"California, US", text:"Comprehensive list of synonyms for tasting good. Comprehensive list of synonyms for tasting good."},
                {id:3, image:ashutosh, name:"Ashutosh Rana", designation:"Milakpur, Rajsthan", text:"Comprehensive list of synonyms for tasting good. Comprehensive list of synonyms for tasting good."},
                {id:4, image:ashutosh, name:"Ashutosh Rana", designation:"Milakpur, Rajsthan", text:"Comprehensive list of synonyms for tasting good. Comprehensive list of synonyms for tasting good."},




            ]
        return (
            <div className='section testimonial'>
                <div className='container'>
                    <h2 className='title'>What our <span>customer says</span></h2>
                    <ul className=''>
                    <Slider {...settings}>
                        {testimonial.map((testimonial)=> {
                            return(
                                <li key={testimonial.id}>
                                    <div className="testimonial_inner">
                                        <img src={quotes} alt=""/>
                                        <div className="testinomial_text">
                                        <p>{testimonial.text}</p></div>
                                        <div className='testinimial_image'>
                                            <img src={testimonial.image} alt={testimonial.name}/>
                                            <div className='testi_name'>
                                                <h4>{testimonial.name}</h4>
                                                <span>({testimonial.designation})</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                         </Slider>
                    </ul>
                </div>
            </div>

        )

}




