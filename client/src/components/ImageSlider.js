import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const slides = [
    {
      text: "Silence Breakers' Sanctuary: Where Truth Finds a Voice",
      backgroundImg:
        "url('https://silencebreakers.com/wp-content/uploads/2019/08/Silence-Breakers-Header-Rip-Off-Tape.jpg')",
    },
    {
      text: "Anonymity: Your Shield, Truth: Your Weapon",
      backgroundImg:
        "url('https://media.licdn.com/dms/image/C5612AQGhyA6Y-51Jrg/article-cover_image-shrink_600_2000/0/1572446525152?e=2147483647&v=beta&t=lRNlFsXln1ab6xmP0gIgDzZd5kRNGl-_zZK-wO9tyiU')",
    },
    {
      text: "Identity in Shadows, Impact in Light: Your Secret is Safe with Us",
      backgroundImg:
        "url('https://lonerwolf.com/wp-content/uploads/2014/05/embracing-shadow-self-min.jpg')",
    },
    {
      text: "From Whistle to Ear: Ensuring Secure, Encrypted Communication",
      backgroundImg:
        "url('https://miro.medium.com/v2/resize:fit:1400/1*KwEjHCWWkNLZPcSsSWGPpQ.jpeg')",
    },
    {
      text: "From Bits to Bytes, From Anonymity to Action: Encrypt Your Truth, Submit with Confidence",
      backgroundImg:
        "url('https://static.endpointprotector.com/blog/2023/02/blog-Five-key-benefits-of-data-encryption-for-security1200x628px-en.jpg')",
    },
  ];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={true}
      interval={1200}
      showThumbs={false}
      className="carouselSlider"
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          height="500px"
          backgroundImage={slide.backgroundImg}
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            padding="1rem"
            borderRadius="md"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="white"
          >
            {slide.text}
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
