import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "../../public/assets/picFi/export.jpg",

    "../../public/assets/picFi/cargo.jpg",
    "../../public/assets/picFi/about.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  const sliderStyles = {
    height: "100vh", // Set hero section to 100vh
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    color: "#fff",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark opacity overlay
  };

  const textStyles = {
    position: "absolute",
    top: "60%", // Move the text down by adjusting the percentage
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff", // White text color
    zIndex: 1, // Ensure text appears on top of overlay
    textAlign: "center",
  };

  return (
    <div style={{ marginBottom: "70px" }}>
      <AwesomeSlider style={sliderStyles} selected={currentIndex}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img src={image} alt={`Slide ${index}`} />
            <div style={overlayStyles}></div> {/* Dark opacity overlay */}
            <div style={textStyles}>
              <h3 style={{ color: "#fff" }}>Welcome To Kegeberew Export And Import</h3>
              <h1 style={{ color: "#fff" }}>Empowering Global Trade, Enhancing Lives</h1>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default HeroSection;
