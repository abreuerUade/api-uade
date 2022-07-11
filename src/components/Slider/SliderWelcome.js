import React, { useState} from 'react'
import './SliderWelcome.css'
import BtnSlider from './BtnSlider'
import { useNavigate } from 'react-router-dom'


export default function Slider(props) {

    const dataSlider = props.img
    
    const [slideIndex, setSlideIndex] = useState(1)
    let navigate = useNavigate(); 

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    
    function stopPropagation(e) {
        e.stopPropagation();
     }
     
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    const routeChange = () =>{ 
        let path = `/home`; 
        navigate(path);
      }

    return (
        <div>
        <div className="container-slider2" onClick={routeChange} >
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    
                    >
                    <img 
                        src={process.env.PUBLIC_URL + `/images/${obj.src}`} 
                        alt=""
                    />
                    </div>
                )
            })}
            <div onClick={stopPropagation}>
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </div>
       

            <div className="container-dots" >
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div
                    key={index} 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
  
        </div>
        
    )
}
