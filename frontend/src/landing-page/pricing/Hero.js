import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row px-5 pb-5">
        <div className="col text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "75%", height: "auto", marginTop: "2rem" }}
          />
          <h1 className="fs-3">Free equity delivery</h1>
          <p
            className="px-4 text-muted"
            style={{ fontSize: "16px", marginTop: "1.5rem" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free - ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "75%", height: "auto", marginTop: "2rem" }}
          />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p
            className="px-4 text-muted"
            style={{ fontSize: "16px", marginTop: "1.5rem" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Image"
            className="d-block mx-auto mb-4"
            style={{ width: "75%", height: "auto", marginTop: "2rem" }}
          />
          <h1 className="fs-3">Free direct MF</h1>
          <p
            className="px-4 text-muted"
            style={{ fontSize: "16px", marginTop: "1.5rem" }}
          >
            All direct mutual fund investments are absolutely free - ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
