import React from "react";
import VirtualCard from "./VirtualCard";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const Body = () => {
  return (
    <>
      <main className="main">
        <section className="first-row-body">
          <div className="row-content left">
            <VirtualCard />
          </div>

          <div className="row-content right">
            <div className="top-section">
              <div className="payment-gateway-logo">
                <div className="visa-and-discover-flexed">
                  <div className="visa-logo-container">
                    <img
                      src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/flat/visa.svg"
                      alt="visa"
                      className="visa-logo"
                      // width="10px"
                    />
                  </div>

                  <div className="discover-logo-container">
                    <img
                      src="http://vectorlogo4u.com/wp-content/uploads/2020/10/discover-01.png"
                      alt="discover"
                      width="72px"
                      className="discover-logo"
                    />
                  </div>
                </div>

                <div className="paypal-logo-container">
                  <InputComponent type="radio" value="paypal" name="paypal" />
                  <img
                    src="data:image/png;base64,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"
                    alt="paypal"
                    className="paypal-logo"
                    width="72px"
                  />
                </div>
              </div>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-flexed">
                <div className="left-input">
                  <label htmlFor="ccCard" className="cc-label">
                    Credit card number
                  </label>
                  <InputComponent
                    placeholder="4324   5433  9382  1030"
                    type="number"
                    id="ccCard"
                    className="cc-input"
                  />

                  <label
                    htmlFor="securityCode"
                    className="cc-security-code-label"
                  >
                    Security code
                  </label>
                  <InputComponent
                    placeholder="420"
                    type="number"
                    className="cc-security-code-input"
                  />
                </div>

                <div className="right-input">
                  <label htmlFor="expDate" className="cc-exp-date-label">
                    Expiration date
                  </label>
                  <InputComponent
                    placeholder="03/24"
                    className="cc-exp-date-input"
                  />

                  <label htmlFor="postalCode" className="cc-postal-code-label">
                    Postal code
                  </label>
                  <InputComponent
                    placeholder="10119"
                    className="cc-postal-code-input"
                    type="number"
                  />
                </div>
              </div>

              <div className="save-card-container">
                <InputComponent
                  type="radio"
                  id="saveCard"
                  className="save-card-input"
                />
                <label htmlFor="saveCard" className="save-card-label">
                  Use this card for next time purchase
                </label>
              </div>

              <ButtonComponent className="add-card-btn" innertext="Add card" />
            </form>
          </div>
        </section>

        <section className="second-row-body">
          <div className="purchase-summary">
            <div className="summary-name">
              <p className="name">Subtotal</p>
              <p className="name">Estimated Tax</p>
              <p className="name">
                Promotional Code: <span className="promo-code">Z4KXLM9A</span>
              </p>
            </div>

            <div className="summary-value">
              <p className="value">₦2,497.00</p>
              <p className="value">₦119.64</p>
              <p className="value">₦-60.00</p>
            </div>
          </div>
        </section>

        <section className="third-row-body">
          <div className="complete-payment-container">
            <ButtonComponent
              innertext="Complete payment"
              className="complete-payment-btn"
            />
            <p className="total">TOTAL: ₦2556.64</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Body;
