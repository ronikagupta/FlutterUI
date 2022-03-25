import React from 'react'
import FooterLogo from'../../image/footer-logo.png'
import phone from "../../image/phone.png";
import email from "../../image/email.png";
import playStore from "../../image/playstore.png";
// import appStore from "../../image/app-store.png";

export default function Footer() {
  return (
    <div className="fotter-main">
    <footer className="section">
    <div className="container">
            <div className="footer-box">
            <div className="footer-logo">
                <img src={FooterLogo}/>
                </div>
                <div className="info">
                <ul>
                <li>                <img src={phone}/>
<a href="#">+91-9999 000 000</a></li>
                <li>                <img src={email}/>
<a href="#">info@pa@gmail.com</a></li>
                </ul>
                </div>
            </div>
        <div className="footer-box">
        <h3 className="footer-title">Information</h3>
            <ul>
            <li><a href="#">Home </a></li>
            <li><a href="#">Services  </a></li>
            <li><a href="#">Order Tracking  </a></li>
            <li><a href="#">News </a></li>
            <li><a href="#">Contact Us </a></li>
            </ul>
        </div>
       <div className="footer-box">
        <h3 className="footer-title">Helpfull Links</h3>
            <ul>
            <li><a href="#">Service  </a></li>
            <li><a href="#">Support   </a></li>
            <li><a href="#">Privacy   </a></li>
            <li><a href="#">Terms &amp; Conditions </a></li>

            </ul>
        </div>
        <div className="footer-box">
         <h3 className="footer-title">Available on:</h3>
            <div className="download-btn">
            <img src={playStore}/>
            {/* <img src={appStore}/> */}
            </div>
            <div className="follow-fotter">
        <span className="text">Follow us on:</span>
        <ul>
        <li><a href="#!" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-twitter"></i></a></li>
        </ul>
    </div>
        </div>
        </div>
    </footer>
    <div className="copyright">
    <div className="container">
    <p>All right reserved @ codiantbiztech.com</p>
    </div>
    </div>
    </div>
  )
}
