import React from "react";

function Universe() {
  const handleSignupClick = () => {
    // Navigate to the dashboard application
    window.location.href = "http://localhost:3001";
  };
  return (
    <div className="container">
      <div className="text-center p-3">
        <h1 className="fs-3 pb-1 mt-3 pt-5">The Zerodha Universe</h1>
        <p
          className="text-muted"
          style={{ wordSpacing: "3px", letterSpacing: "0.1px" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-muted">
        <div className="col-1"></div>
        <div className="col text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "2rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/streakLogo.png"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "5rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "2rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, an
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "5rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/tijori.svg"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "2rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "55%", height: "12%", marginTop: "5rem" }}
          />
          <p className="px-5" style={{ fontSize: "12px", fontWeight: "500" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="pb-5">
        <button
          className="d-flex text-center justify-content-center align-items-center p-2 mt-3 mb-5 btn btn-primary fs-5"
          style={{ width: "18%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
