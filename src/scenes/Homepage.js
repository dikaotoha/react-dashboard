import React from "react";
import icon_home from "../assets/images/tetew.svg";
import skyscrapper from "../assets/images/sky.png";
export default function Homepage() {
  return (
    <div className="container-main">
      <div className="container-left">
        <div className="contain-head">
          <div className="head-left">
            <img src={icon_home} />
          </div>
          <div className="head-right">
            <nav>
              <a href="">Overview</a>
              <a href="">Reports</a>
            </nav>

            <input type="search" value="Search Rooms" />
          </div>
        </div>
        <div className="contain-body">
          <div className="cb-top">
            <h2>Main Dashboard</h2>
            <h5>Manage</h5>
          </div>
          <div className="cb-mid">
            <nav>
              <a href="">Booking</a>
              <a href="">Amenities</a>
              <a href="">Customization</a>
              <a href="">Locallity</a>
            </nav>
          </div>
          <div className="cb-hero">
            <div className="cb-hero-first">
              <div className="hf-top">
                <div className="hf-satu shadow-box">
                  <p>Today Earning</p>
                </div>
                <div className="hf-dua shadow-box">
                  <p>Demographics</p>
                </div>
              </div>
              <div className="hf-bot shadow-box">
                <h2>20% OFF</h2>
              </div>
            </div>
            <div className="cb-hero-second">
              <img src={skyscrapper} />
            </div>
            <div className="cb-hero-third">
              <div className="cb-ht-first shadow-box">
                <p>Today Earning</p>
              </div>
              <div className="cb-ht-second shadow-box">
                <p>Design Meeting</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contain-foot">
          <div className="cf-top">
            <h2>Active Bookings</h2>
            <h5>Check All</h5>
          </div>
          <div className="cf-hero">
            <div className="cf-hero-first shadow-box">
              <h5>Award Ceremony</h5>
            </div>
            <div className="cf-hero-second shadow-box">
              <h5>Design Discussion</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-right"></div>
    </div>
  );
}
