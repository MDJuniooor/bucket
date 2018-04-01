import React, { Component } from 'react';
import './style.scss';
import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                zIndex: 100,
                position: 'absolute',
                display: 'block',
                background: 'transparent'
            }}
            onClick={onClick}></div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                zIndex: 100,
                position: 'absolute',
                display: 'block',
                background: 'transparent'
            }}
            onClick={onClick}>
        </div>
    );
}

class Banner extends Component {
    handleClick = e => {
        e.preventDefault();
        console.log('The link was clicked.');
        
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
    
        return (
            <div className="BannerContainer">
                <Slider {...settings}>
                    <div className="Content"><a href="https://www.patreon.com/"><img className="BannerImage" src={window.location.origin + '/images/1.jpg'} alt="artist" /></a></div>
                    <div className="Content"><a href="https://www.patreon.com/"><img className="BannerImage" src={window.location.origin + '/images/2.jpg'} alt="artist" /></a></div>
                </Slider>
            </div>
        );
    }
}


export default Banner
