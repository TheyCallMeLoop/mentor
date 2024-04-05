import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Progresschart from '../charts/progresschart'

export default function ProgressSection({refUser}) {
  return (
    <div ref={refUser} className="progressSection mt-5">
    <h1 className="fs_32 text_gery font_bold text_grey text-center ">
      Problem We are Trying to Solve
    </h1>
    <p className="fs_18 text_light_grey font_regular text-center mt-2 ">
      We are dedicated to addressing the underrepresentation and lack of
      diversity within the legal profession.
    </p>
    <div className="d-flex justify-content-center align-items-center mt-3">
      <button className="transparent_btn">Explore More</button>
    </div>

    <Container>
      <Row className="mt-5 d-flex align-items-start">
        <Col
          xxl={4}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <h3 className="fs_22 font_semibold text_grey  mt-2">
              Lawyers by Race and Ethnicity: 2023
            </h3>
            <p className="fs_16  font_regular text_light_grey  mt-1 ">
              Our legal community should be a reflection of the diverse
              population we serve in our courtrooms and client meetings.
            </p>
            <div className="mt-3 mb-3">
              <Progresschart />
            </div>
          </div>
        </Col>
        <Col
          xxl={4}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <h3 className="fs_22 font_medium text_grey mt-2">
              LGBTQ+ Partners and Associates
            </h3>
            <p className="fs_16  font_medium text_light_grey mt-1 ">
              Our legal community should reflect those who bring unique
              cultural perspectives and competence to legal matters.
            </p>
            <div className="mt-3 mb-3">
              <Progresschart />
            </div>
          </div>
        </Col>
        <Col
          xxl={4}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <div className="">
            <h3 className="fs_22 font_medium text_grey  mt-2">
              First Generation Law Students
            </h3>
            <p className="fs_16  font_regular text_light_grey  mt-1 ">
              Our legal community should reflect the resilience and
              perspective that first-generation lawyers bring to legal
              matters..
            </p>
            <div className="mt-3 mb-3">
              <Progresschart />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
