import Slider from "react-slick";
import {ReactSVG} from "react-svg";

//import style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import constants
import {thumbnails} from "../../constants/thumbnails";

const Swiper = ({setUrl, setAnimate}) => {
    const settings = {
        customPaging: index => (
            <ReactSVG className='pagination-icon' src={thumbnails[index].icon}></ReactSVG>
        ),
        fade: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: index => {
            setUrl(thumbnails[index].url)
            setAnimate(true)
        },
        beforeChange: () => {
            setUrl()
            setAnimate(false)
        }
    };

    return (
        <Slider {...settings}>
            {thumbnails.map((thumbnail, index) => (
                <div className='sp-img-container' key={index}>
                    <img src={thumbnail.src} alt={thumbnail.alt}/>
                </div>
            ))}
        </Slider>
    )
}

export default Swiper
