import React from "react";
import { logomentor } from "../icons/icon";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="d-flex w-full align-items-center justify-content-between py-5"
      style={{ backgroundColor: "#0066f5" }}
    >
      <div className="container d-flex justify-content-center justify-content-md-between w-100 flex-wrap align-items-center gap-4">
        <div className="d-flex gap-3 align-items-center">
          <img
            src={logomentor}
            style={{ width: "3rem", height: "3rem", objectFit: "contain" }}
            alt=""
          />
          <span className=" text_white font_regular">
            Together, let's shape the future of mentorship
          </span>
        </div>
        <div className="d-flex  gap_space  items-center">
          <a
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            rel="noreferrer"
            href="https://www.linkedin.com/company/apfwrd/"
            target="_blank"
            className="bg_white radius_24 p-2 d-flex justify-content-center align-items-center"
          >
            <FiLinkedin />
          </a>
          <a
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            rel="noreferrer"
            href="https://www.instagram.com/apfwrd/"
            target="_blank"
            className="bg_white  radius_24 p-2  d-flex justify-content-center align-items-center"
          >
            <FiInstagram />
          </a>
          <a
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            rel="noreferrer"
            href="https://youtube.com/@APushForward?si=fH1sMdVuwxzRKuz_"
            target="_blank"
            className="bg_white  radius_24 p-2  d-flex justify-content-center align-items-center"
          >
            <FiYoutube />
          </a>
          <a
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=61556519092826&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            className="bg_white  radius_24  p-2  d-flex justify-content-center align-items-center"
          >
            <FiFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
