
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import prelaw from "../../assets/images/preLaw.svg";    
import thumb from "../../assets/videos/thumb.png";
import video from "../../assets/videos/mentoring_video_new.mp4";
import play from "../../assets/icons/play.svg";
import pasue from "../../assets/icons/play-button.png";
export default function Serve({refUser}) {
     
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const togglePlay = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
  
    useEffect(() => {}, [isPlaying]);
    useEffect(() => {}, [isPlaying]);
  return (
    <Container ref={refUser} className="mt-5">
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
        <h3 className="font_16 font_bold text_dark">Who We Serve </h3>
        <div className=" serve mt-5 none_diplay ">
          <div className="d-flex justify-content-end flex-column align-items-center">
            <img src={prelaw} alt="" />
            <div className="line_dots mt-3 mb-3"></div>
          </div>
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">
              Pre Law Students
            </h2>
            <p className="fs_14 text_light font_regular ">
              Connecting law students and mentors to elevate their skills,
              knowledge, <br />
              and achieve their legal aspirations.
            </p>
          </div>
        </div>
        <div className="serve none_diplay">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img src={prelaw} alt="" />
            <div className="line_dots mt-3 mb-3"></div>
          </div>
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">Law Students</h2>
            <p className="fs_14 text_light font_regular ">
              Empowering law students to transform their <br /> potential
              into thriving legal careers.
            </p>
          </div>
        </div>
        <div className="serve none_diplay">
          <img src={prelaw} alt="" />
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">Lawyers</h2>
            <p className="fs_14 text_light font_regular ">
              Connecting law students and mentors to elevate their skills
              knowledge, <br />
              and achieve their legal aspirations.
            </p>
          </div>
        </div>
      </Col>
      <Col>
        <p className="fs_16 font_regular text_light margin_light" style={{    width: "80%"}}>
          We serve the next generation of legal trailblazers: aspiring
          lawyers, dedicated law students, and ambitious young associates eager for 
          A Push Forward.
        </p>

        <div className="w-auto position-relative">
          <video
            className="mt-5"
            loop
            playsInline // Add playsInline attribute here
            autoPlay
            ref={videoRef}
            thumb={thumb}
            style={{ maxHeight: "100%", width: "100%" }}
          >
            <source src={video} type="video/mp4"></source>
          </video>

          <img
            src={isPlaying ? play : pasue}
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              width: "40px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            alt=""
            onClick={togglePlay}
          />
        </div>
      </Col>
    </Row>
  </Container>
 
  )
}
