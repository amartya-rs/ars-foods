import React from "react";
import Logo from "../../asset/logo.jpeg";
import PlayStore from "../../asset/play_store.webp";
import AppStore from "../../asset/app_store.webp";
import { COMPANY, CONTACT_US, LEGAL } from "../../utils/constants.js";
import "./footer.css";

export function Footer() {
   const COMPANY_DETAILS = [
      "About",
      "Careers",
      "Team",
      "ARSfoods One",
      "ARSfoods Instamart",
      "ARSfoods Genie",
   ];

   const CONTACT_US_DETAILS = [
      "Help & Support",
      "Partner with us",
      "Ride with us",
   ];

   const LEGAL_DETAILS = [
      "Terms & Conditions",
      "Cookie Policy",
      "Privacy Policy",
   ];

   return (
      <div className="footer">
         <div className="logo-container">
            <div className="logo-wrapper">
               <img src={Logo} alt="brand logo" className="logo" />
               <span>ARS Foods</span>
            </div>
            <div>© 2023 ARSFoods</div>
            <div> Technologies Pvt. Ltd</div>
         </div>
         <div className="footer-container">
            <div className="heading">{COMPANY}</div>
            {COMPANY_DETAILS.map((item) => {
               return <span>{item}</span>;
            })}
         </div>
         <div className="footer-container">
            <div className="heading">{CONTACT_US}</div>
            {CONTACT_US_DETAILS.map((item) => {
               return <span>{item}</span>;
            })}
         </div>
         <div className="footer-container">
            <div className="heading">{LEGAL}</div>
            {LEGAL_DETAILS.map((item) => {
               return <span>{item}</span>;
            })}
         </div>
         <div className="footer-container">
            <img className="store-icons" src={PlayStore} alt="play store" />
            <img className="store-icons" src={AppStore} alt="app store" />
         </div>
      </div>
   );
}
