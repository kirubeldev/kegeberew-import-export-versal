import React, { useState } from "react";
import Introd from "./introd";
import dr from "./assets/picFi/dr.jpg";
import Vision from "./vision";
import CardWithImageExample from "./carrd";
import WithHeaderAndQuoteExample from "./topCard";
import Headd from "./topCard2";
import Card2 from "./card2";
import CardWithImageExampleee from "./card2";
import Membersip from "./membersip";
import HeroSection from "./HeroSection";
import { Motion, spring } from "react-motion";

import { motion } from "framer-motion";
const Home = () => {
  const [showTeamDetails, setShowTeamDetails] = useState(false);

  const toggleTeamDetails = () => {
    setShowTeamDetails(!showTeamDetails);
  };

  return (
    <div>
      {!showTeamDetails && (
        <i
          className="bi bi-arrow-bar-left"
          style={{
            fontSize: "50px",
            position: "fixed",
            top: "50%",
            right: 0,
            zIndex: "99",
            color: "#d7a222",
            cursor: "pointer",
          }}
          onClick={toggleTeamDetails}
        ></i>
      )}
      <HeroSection />
      <Vision />
      <Introd />
      <WithHeaderAndQuoteExample />
      <CardWithImageExample />
      <CardWithImageExampleee />
      <Membersip />
      <br />
      <br />
      <br />

      {showTeamDetails && (
        <Motion>
          {(interpolatingStyle) => (
            <motion.div
              className="popup"
              initial={{ opacity: 0.7, translateX: 1000, translateY: 0 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 1.3 }}
            >
              <div className="overlay" onClick={toggleTeamDetails}></div>
              <section className="team-details">
                <div className="responsive-container">
                  <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                      <div className="blog-slider__img">
                        <img src={dr} alt="" />
                      </div>
                      <div className="blog-slider__content">
                        <span className="blog-slider__code"></span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <div
                            className="blog-slider__title"
                            style={{ display: "flex" }}
                          >
                            CEO Message
                          </div>
                          <div
                            className="myex"
                            onClick={toggleTeamDetails}
                            style={{
                              fontSize: "30px",
                              color: "#000",
                              marginTop: "-30px",
                              marginRight: "-40px",
                            }}
                          >
                            {" "}
                            <i className="bi bi-x-lg"></i>
                          </div>
                        </div>
                        <div className="blog-slider__text justify">
                          <div
                            className="back"
                            style={{
                              position: "fixed",
                              zIndex: 100,
                              top: "50%",
                              right: 0,
                              fontSize: "42px",
                              color: "#d7a222",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <i
                              className="bi bi-arrow-bar-right"
                              onClick={toggleTeamDetails}
                            ></i>{" "}
                          </div>
                          <p className="des">
                          <div className="dont">
                        <img src={dr} alt="" style={{marginBottom:"30px"}} />
                      </div>
                            As we navigate the ever-evolving landscape of global
                            commerce, it is imperative that we focus our efforts
                            on expanding our presence in African markets. Africa
                            represents a wealth of untapped potential and
                            presents a multitude of opportunities for growth and
                            collaboration. Integrating economic ties within the
                            African continent is not only beneficial for our
                            company but also for the communities and economies
                            we serve. By fostering strong partnerships and
                            alliances, we can create a network that thrives on
                            mutual respect, cooperation, and shared prosperity.
                            At the heart of our expansion strategy lies the
                            introduction of AfriBunna to African markets and
                            beyond. Afribunna represents more than just a coffee
                            brand – it embodies the spirit of Africa, its rich
                            heritage, and its vibrant culture. Through
                            Afribunna, we aim to showcase the finest Ethiopian
                            coffee to coffee enthusiasts across the continent
                            and around the world. As we embark on this journey,
                            let us remain steadfast in our commitment to
                            excellence, innovation, and sustainability.
                            Together, we have the opportunity to make a lasting
                            impact, not only on the coffee industry but on the
                            lives of countless individuals across Africa and
                            beyond. <br /> Thank you for your dedication and
                            hard work. Let us continue to push boundaries,
                            challenge norms, and shape the future of African
                            commerce together.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-slider__pagination"></div>
                </div>
              </section>
            </motion.div>
          )}
        </Motion>
      )}
    </div>
  );
};

export default Home;
