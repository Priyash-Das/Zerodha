import React from "react";

function Signup() {
  const handleSignupClick = () => {
    // Navigate to the dashboard application
    window.location.href = "http://localhost:3001";
  };
  return (
    <div className="container p-5">
      {/* Section 1: Main Header & Signup Form */}
      <div className="row text-center mb-5">
        <h1 className="mt-2 fs-2">
          Open a free demat and trading account online
        </h1>
        <p
          className="fs-5 mb-5 text-muted"
          style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
        >
          Start investing brokerage-free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-md-7">
              {/* Updated image to match the screenshot */}
              <img
                src="media/images/account_open.svg"
                alt="Zerodha Platform - Kite and Console"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <h4 className="mb-3">Signup now</h4>
              <p className="text-muted small">
                Or track your existing application
              </p>
              {/* Updated mobile number input to include country code */}
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ fontSize: "1rem" }}>
                  🇮🇳 +91
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter your mobile number"
                  aria-label="Mobile Number"
                />
              </div>
              <button className="btn btn-primary p-2 px-5">Get OTP</button>
              <p className="text-muted small mt-3">
                By proceeding, you agree to the Zerodha{" "}
                <a href="#">terms & privacy policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Investment Options */}
      <div className="row justify-content-center text-center pt-4 mb-5">
        <h2 className="fs-3 mb-5">
          Investment options with Zerodha demat account
        </h2>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="d-flex text-start align-items-center">
                <img
                  src="media/images/stocks-acop1.svg"
                  alt="Stocks"
                  width="60"
                  className="me-4"
                />
                <div>
                  <h5>Stocks</h5>
                  <p className="text-muted">
                    Invest in all exchange-listed securities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex text-start align-items-center">
                <img
                  src="media/images/mf-acop1.svg"
                  alt="Mutual Funds"
                  width="60"
                  className="me-4"
                />
                <div>
                  <h5>Mutual funds</h5>
                  <p className="text-muted">
                    Invest in commission-free direct mutual funds
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex text-start align-items-center">
                <img
                  src="media/images/ipo-acop1.svg"
                  alt="IPO"
                  width="60"
                  className="me-4"
                />
                <div>
                  <h5>IPO</h5>
                  <p className="text-muted">
                    Apply to the latest IPOs instantly via UPI
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex text-start align-items-center">
                <img
                  src="media/images/fo-acop1.svg"
                  alt="Futures & Options"
                  width="60"
                  className="me-4"
                />
                <div>
                  <h5>Futures & options</h5>
                  <p className="text-muted">
                    Hedge and mitigate market risk through simplified F&O
                    trading
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <button className="btn btn-primary">Explore Investments</button>
          </div>
        </div>
      </div>

      {/* Section 3: Steps to Open Account */}
      <div className="row justify-content-center text-center mb-5 py-5">
        <h2 className="fs-3 mb-5">
          Steps to open a demat account with Zerodha
        </h2>
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="media/images/steps-acop.svg"
                alt="Steps to open account"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 text-start">
              <div className="mb-4 pb-3 border-bottom">
                <h4 className="fw-normal">
                  <span className="text-muted me-3 fs-2">01</span>Enter the
                  requested details
                </h4>
              </div>
              <div className="mb-4 pb-3 border-bottom">
                <h4 className="fw-normal">
                  <span className="text-muted me-3 fs-2">02</span>Complete
                  e-sign & verification
                </h4>
              </div>
              <div className="mb-4 pb-3">
                <h4 className="fw-normal">
                  <span className="text-muted me-3 fs-2">03</span>Start
                  investing!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Benefits of Opening Account */}
      <div className="row justify-content-center mb-5 py-5">
        <h2 className="fs-3 mb-5 text-center">
          Benefits of opening a Zerodha demat account
        </h2>
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="media/images/acop-benefits.svg"
                alt="Benefits"
                className="img-fluid d-block mx-auto"
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <h5>Unbeatable pricing</h5>
                <p className="text-muted">
                  Zero charges for equity & mutual fund investments. Flat ₹20
                  fees for intraday and F&O trades.
                </p>
              </div>
              <div className="mb-4">
                <h5>Best investing experience</h5>
                <p className="text-muted">
                  Simple and intuitive trading platform with an
                  easy-to-understand user interface.
                </p>
              </div>
              <div className="mb-4">
                <h5>No spam or gimmicks</h5>
                <p className="text-muted">
                  Committed to transparency — no gimmicks, spam, "gamification",
                  or intrusive push notifications.
                </p>
              </div>
              <div className="mb-4">
                <h5>The Zerodha universe</h5>
                <p className="text-muted">
                  More than just an app — gain free access to the entire
                  ecosystem of our partner products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Explore Account Types */}
      <div className="row justify-content-center text-center mb-5">
        <h2 className="fs-3 mb-5">Explore different account types</h2>
        <div className="col-lg-10 col-md-12">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-3 text-start shadow-sm border-0">
                <h5 className="card-title">Individual Account</h5>
                <p className="card-text text-muted small">
                  Invest in equity, mutual funds and derivatives
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-3 text-start shadow-sm border-0">
                <h5 className="card-title">HUF Account</h5>
                <p className="card-text text-muted small">
                  Make tax-efficient investments for your family
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-3 text-start shadow-sm border-0">
                <h5 className="card-title">NRI Account</h5>
                <p className="card-text text-muted small">
                  Invest in equity, mutual funds, debentures, and more
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-3 text-start shadow-sm border-0">
                <h5 className="card-title">Minor Account</h5>
                <p className="card-text text-muted small">
                  Teach your little ones about money & invest for their future
                  with them
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-3 text-start shadow-sm border-0">
                <h5 className="card-title">Corporate / LLP/ Partnership</h5>
                <p className="card-text text-muted small">
                  Manage your business surplus and investments easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: FAQs */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <h2 className="fs-3 mb-4 text-center">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is a Zerodha account?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  A Zerodha account is an account that allows you to invest and
                  trade in the stock market.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What documents are required to open a demat account?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  You will need your PAN card, Aadhaar card, a cancelled cheque
                  or bank statement, and your signature on a plain paper.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is Zerodha account opening free?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Yes, the account opening is free.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are there any maintenance charges for a demat account?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  There are no annual maintenance charges for a demat account.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Can I open a demat account without a bank account?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  No, you need a bank account to open a demat account.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Final CTA */}
      <div className="row text-center p-5">
        <h2 className="fs-3">Open a Zerodha account</h2>
        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div className="col-12 mt-4">
          <button
            className="btn btn-primary p-2 px-5"
            onClick={handleSignupClick}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
