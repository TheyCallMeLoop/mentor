import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import swiper1 from "../../assets/NewMentors/06F91F79-FEC0-4FDB-A061-158C2D4E7689.jpeg";
import swiper2 from "../../assets/NewMentors/26940879-783B-4C08-A29F-CD5B3D679023.png.jpeg";
import swiper3 from "../../assets/NewMentors/AE83896D-D899-452D-9486-3913F90D2343.jpeg";
import swiper4 from "../../assets/NewMentors/C34165B1-58E7-4E0C-991E-32ABA69E1ECA.jpeg";

import basket from "../../assets/icons/bag-2.svg";

import "swiper/css";

export default function MentorSection({refUser}) {
  return (
    <Container ref={refUser}>
        <h3 className="font_bold text_dark mt-5 mb-5">
          Meet Some of Our Mentors
        </h3>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{ position: "relative", maxWidth: 300 }}>
            <div>
              <img
                src={swiper1}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "relative",
                }}
                width={300}
                height={350}
                alt=""
              />
              <div className="swiper_absolute">
                <p className="text_white fs_16 font_regular">Tamia Dean</p>
                <div className="d-flex gap-2">
                  <img src={basket} alt="" />
                  <p className="text_white fs_12 font_regular">
                    Corporate Associate, New York
                  </p>
                </div>
                <p className="text_white fs_12 font_regular">
                  University of Houston School of Law
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", maxWidth: 300 }}>
            <div>
              <img
                src={swiper2}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "relative",
                }}
                width={300}
                height={350}
                alt=""
              />
              <div className="swiper_absolute">
                <p className="text_white fs_16 font_regular">Tamia Dean</p>
                <div className="d-flex gap-2">
                  <img src={basket} alt="" />
                  <p className="text_white fs_12 font_regular">
                    Corporate Associate, New York
                  </p>
                </div>
                <p className="text_white fs_12 font_regular">
                  University of Houston School of Law
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", maxWidth: 300 }}>
            <div>
              <img
                src={swiper3}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "relative",
                }}
                width={300}
                height={350}
                alt=""
              />
              <div className="swiper_absolute">
                <p className="text_white fs_16 font_regular">Tamia Dean</p>
                <div className="d-flex gap-2">
                  <img src={basket} alt="" />
                  <p className="text_white fs_12 font_regular">
                    Corporate Associate, New York
                  </p>
                </div>
                <p className="text_white fs_12 font_regular">
                  University of Houston School of Law
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", maxWidth: 300 }}>
            <div>
              <img
                src={swiper4}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "relative",
                }}
                width={300}
                height={350}
                alt=""
              />
              <div className="swiper_absolute" style={{paddingTop: 22}}>
                <p className="text_white fs_16 font_regular">Barrister Joseph Dean</p>
                <div className="d-flex gap-2">
                  <img src={basket} alt="" />
                  <p className="text_white fs_12 font_regular">
                  Legal Advisor at Spotify
                  </p>
                </div>
                <p className="text_white fs_12 font_regular">
                  Years of Experience             
                </p>
                <p className="text_white fs_15 font_medium">11yr</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative", maxWidth: 300 }}>
            <div>
              <img
                src={swiper1}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "relative",
                }}
                width={300}
                height={350}
                alt=""
              />
              <div className="swiper_absolute">
                <p className="text_white fs_16 font_regular">Tamia Dean</p>
                <div className="d-flex gap-2">
                  <img src={basket} alt="" />
                  <p className="text_white fs_12 font_regular">
                    Corporate Associate, New York
                  </p>
                </div>
                <p className="text_white fs_12 font_regular">
                  University of Houston School of Law
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
  )
}
