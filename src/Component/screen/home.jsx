/* eslint-disable react/jsx-no-undef */
import React, { useState, useRef, useEffect } from "react";
import bars from "../../assets/images/home_bars.png";


import apple from "../../assets/icons/apple.svg";
import google from "../../assets/icons/google.svg";


import Serve from "../weServe";
import ProgressSection from "../prgresssection";
import MentorSection from "../MentorSection";
import PlaystoreSection from "../PlayStoreSection";
import FaQ from "../FaQ";
import { useLocation, useSearchParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Index = () => {
  const [show, setShow] = useState(false);
  const [showMentee, setShowMentee] = useState(false);

  const handleClose = () => setShow(false);
  const handleMenteeClose = () => setShowMentee(false)
  const handleShow = () => setShow(true);
  const  handleMentee = () => setShowMentee(true)
  const location = useLocation();

  let [search, setSearch] = useSearchParams();
  const searchValue = search?.get('selected')
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get("selected");

    if (scrollTo) {
      let targetRef;
      switch (scrollTo) {
        case "serve":
          targetRef = sectionRef;
          break;
        case "mission":
          targetRef = sectionRef2;
          break;
        case "mentor":
          targetRef = sectionRef3;
          break;
        case "faq":
          targetRef = sectionRef4;
          break;
        default:

          // Handle default case or error condition
          break;
      }

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);


  return (
    <>

      <Modal aria-labelledby="contained-modal-title-vcenter"
        centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font_bold">Find a Mentor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="font_regular">Connect with experienced professionals who can provide guidance, advice, and support as you navigate your journey towards success in the legal field.
        </Modal.Body>

      </Modal>

      <Modal aria-labelledby="contained-modal-title-vcenter"
        centered show={showMentee} onHide={handleMenteeClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font_bold">Find a Mentee

          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="font_regular">
        Connect with mentees seeking guidance, support, and mentorship and contribute to their professional development journey as they navigate the legal field.
        </Modal.Body>
      </Modal>
      <div className="carved-background">
        <div className="heading_top div_empty">
          <h1 className="fs_60 fs_responsive font_bold text_white text-center text_size ">
            The Mentorship Platform
          </h1>
          <span className=" ps-1  d-flex  justify-content-start align-items-start text_white fs_20 font_regular">
            &#174;
          </span>
        </div>
        <div className="heading_top div_empty_tm">
          <h1 className="fs_60 fs_responsive font_bold text_white text-center text_size ">
            The Mentorship Platform
          </h1>
          <span className=" ps-1  d-flex  justify-content-end align-items-end text_white fs_20 font_regular">
            &#8482;
          </span>
        </div>

        <p className="fs_16 pading_resposive margin_top_responsive fs_responsive_des font_regular text_white text-center  pading-desgin" >
          Download our App to Book one-on-one sessions with a mentor to guide
          you  through your legal education and career.
        </p>
       
        <div className="d-flex mt-3 justify-content-center align-items-center gap-3">
          <button onClick={handleShow} className="black_btn">Find a Mentor</button>
          <button onClick={handleMentee} className="primary_btn">Find a Mentee</button>
        </div>
        <div className="d-flex pt-5 pb-5 justify-content-center align-items-center ">
          <img src={bars} className="imgae_width" width={500} alt="" />
        </div>
      </div>

      <Serve refUser={sectionRef} />

      <ProgressSection refUser={sectionRef2} />

      <MentorSection refUser={sectionRef3} />

      <h1 className="fs-48 download_text text_primary font_bold text-center mt-5">
        Download Mobile App
      </h1>
      <p className="text-center fs_16  text_light_grey font_medium mt-2">
        Start your journey with A Push Forward today!
      </p>
      <div className="d-flex mt-3 justify-content-center align-items-center gap-3">
        <button className="black_btn_play">
          <img src={apple} alt="" />
          <div>
            <p className="text_white fs_8 font_semibold ">Download from</p>
            <p className="text_white fs_12 font_medium ">App Store</p>
          </div>
        </button>
        <button className="black_btn_play">
          <img src={google} alt="" />
          <div>
            <p className="text_white fs_8 font_semibold ">Download from</p>
            <p className="text_white fs_12 font_medium ">Google Play</p>
          </div>
        </button>
      </div>

      <PlaystoreSection />

      <h1 className="font_bold fs_32  text-center mt-5">
        Frequently Asked Questions
      </h1>

      <FaQ refUser={sectionRef4} />

    </>
  );
};

export default Index;
