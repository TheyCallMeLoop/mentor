import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phoneImg from "../../assets/images/mobileView.svg";

export default function PlaystoreSection() {
  return (
    <Container style={{ marginTop: "5rem" }}>
    <Row>
      <Col lg={6} xxl={6}>
        <div className="d-flex gap-5  ">
          <div className="d-flex justify-content-end flex-column align-items-center">
            <div className="eclipses">
              <p className="text_dark">1</p>
            </div>
            <div className="line_dots mt-3 mb-3"></div>
          </div>
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">
              Create Account
            </h2>
            <p className="fs_14 text_light font_regular ">
              Kickstart your mentorship journey today!
            </p>
            <p className="fs_14 text_light font_regular mt-3 ">
              Download the App and answer a few simple questions to unlock a
              tailored mentorship experience.
            </p>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="eclipses">
              <p className="text_dark">2</p>
            </div>
            <div className="line_dots mt-3 mb-3"></div>
          </div>
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">Get Matched</h2>
            <p className="fs_14 text_light font_regular ">
              We’ll find your perfect mentor match based on the questions
              answered.
            </p>
            <p className="fs_14 text_light font_regular mt-3">
              Think of it as having a personalized matchmaking service, but
              for your career!
            </p>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div className="eclipses">
            <p className="text_dark">3</p>
          </div>
          <div>
            <h2 className="fs_18 tex_dark font_semibold ">
              Build & Grow Connection
            </h2>
            <p className="fs_14 text_light font_regular  ">
              Connect with your mentor in variety of ways, directly on the
              App!
            </p>
            <p className="fs_14 text_light font_regular mt-3 ">
              Together, you’ll meet milestones, conquer <br /> challenges
              and celebrate wins as you propel <br /> forward on your
              mentorship journey .
            </p>
          </div>
        </div>
      </Col>
      <Col className="d-flex justify-content-end align-content-center">
        <img className="phone_with" src={phoneImg} alt="" />
      </Col>
    </Row>
  </Container>
  )
}
