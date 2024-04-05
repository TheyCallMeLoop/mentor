import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import swiper1 from "../../assets/images/mantor.jpeg";
import swiper2 from "../../assets/images/mantor2.jpeg";
import swiper3 from "../../assets/images/mantor3.jpeg";
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
