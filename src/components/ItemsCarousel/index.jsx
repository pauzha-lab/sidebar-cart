import Slider from "react-slick";

const ItemCarousel = ({ settings, children }) => {
  return (
    <Slider {...settings}>
        {children}
    </Slider>
  );
};

export default ItemCarousel;
