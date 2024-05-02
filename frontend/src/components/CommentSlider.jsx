import React from "react";
import Slider from "react-slick";

function CommentSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Shama</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Rating: 5</h6>
                            <p className="card-text">supercar</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Shama</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Rating: 5</h6>
                            <p className="card-text">supercar</p>
                        </div>
                    </div>
                </div>
               
            </Slider>
        </div>
    );
}

export default CommentSlider;
