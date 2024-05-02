import React from "react";
import Slider from "react-slick";
import './Slider.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black",color:"black",width:"50px",textAlign:'center',
            height:'50px',lineHeight:"70px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black",color:"black",width:"50px",textAlign:'center',
                height:'50px',lineHeight:"70px"
            }}
            onClick={onClick}
        />
    );
}

export default function SliderComponent({detailItem}) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container w-100">
            <Slider {...settings} >
                {detailItem.images.map(item=>(
                    <div>
                        <img src={`http://localhost:8000/${item.image}`}  className={'mx-auto '} height={300} alt=""/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

