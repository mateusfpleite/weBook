import Carousel from "react-multi-carousel"

function BookCarousel({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2
    }
  }
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      transitionDuration={500}
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  )
}

export default BookCarousel
