import React from "react";

const VirtualCard = () => {
  return (
    <>
      <h3 className="payment-info">Payment Information</h3>
      <p className="choose-payment-method">Choose your method of payment</p>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img
              src="https://res.cloudinary.com/clefayomide/image/upload/v1635857410/map.png"
              alt="map"
              className="map"
            />
            <div className="row">
              <p className="card-number">CARD NUMBER</p>
              <p className="number">4324 5433 9382 1030</p>

              <img
                src="https://res.cloudinary.com/clefayomide/image/upload/v1635854959/chip.png"
                alt="chip"
                className="chip"
                width="40px"
              />

              <p className="exp-date">EXPIRATION DATE</p>
              <p className="date">03/24</p>

              <div className="name-logo-container">
                <p className="card-holder">John Doe</p>
                <img
                  src="https://www.mastercard.com.ng/etc/designs/mccom/brandcenter/jcr:content/global/logo.img.png/1616615677797.png"
                  alt="master card"
                  width="50px"
                  className="master-card-logo"
                />
              </div>
            </div>
          </div>

          {/* back card */}
          <div className="card-back">
            <img
              src="https://res.cloudinary.com/clefayomide/image/upload/v1635857410/map.png"
              alt="map"
              className="map"
            />
            <div className="bar"></div>
            <div className="row back-row">
              <div className="pattern-container">
                <img
                  src="https://res.cloudinary.com/clefayomide/image/upload/v1635857431/pattern.png"
                  alt="pattern"
                  className="pattern"
                />
              </div>
              <p className="cvv-text">420</p>
            </div>

            <div className="row">
              <p className="back-text">
                By using this card the holder agrees to all the terms under
                which it was issued
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCard;
