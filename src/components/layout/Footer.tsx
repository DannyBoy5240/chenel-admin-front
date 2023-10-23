import React from "react";
import { useNavigate } from "react-router-dom";

import facebookIcon from "../../assets/icons/facebook_ico.png";
import instagramIcon from "../../assets/icons/instagram_ico.png";
import tiktokIcon from "../../assets/icons/ticktok_ico.png";
import twitterIcon from "../../assets/icons/twitter_ico.jpg";
import linkedinIcon from "../../assets/icons/linkedin_ico.png";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white">
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-12 col-md-6 col-lg-3 text-center">
            &copy; Copyright{" "}
            <strong>
              <span>Chenel</span>
            </strong>
            <small>. All Rights Reserved</small>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <strong>Phone:</strong>{" "}
            <a href="tel:+12396577000">+1 239-657-7000</a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <strong>Email:</strong>{" "}
            <a href="mailto:Taxgration@gmail.com">Taxgration@gmail.com</a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <a href="https://chenelsuperservice.com">chenelsuperservice.com</a>
          </div>
        </div>
        <div className="row pb-3 justify-content-center">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="w-100 d-flex justify-content-around">
              <a
                className="px-2r"
                role="button"
                href="https://facebook.com/chenelsuperservice/"
              >
                <img src={facebookIcon} className="icon-social-default-sz" />
              </a>
              <a
                className="px-2r"
                role="button"
                href="https://www.tiktok.com/@chenelsuperservice1"
              >
                <img src={tiktokIcon} className="icon-social-default-sz" />
              </a>
              <a
                className="px-2r"
                role="button"
                href="https://instagram.com/chenelsuperservice1"
              >
                <img src={instagramIcon} className="icon-social-default-sz" />
              </a>
              <a
                className="px-2r"
                role="button"
                href="https://twitter.com/chenelservices"
              >
                <img src={twitterIcon} className="icon-social-default-sz" />
              </a>
              <a
                className="px-2r"
                role="button"
                href="https://LinkedIn.com/in/chenelsuperservice"
              >
                <img src={linkedinIcon} className="icon-social-default-sz" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
