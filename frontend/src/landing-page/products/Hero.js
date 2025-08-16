import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center p-3 mt-3">
        <h1 className="fs-2 pb-1 mt-3 pt-5">Zerodha Products</h1>
        <p
          className="text-muted fs-4"
          style={{ wordSpacing: "3px", letterSpacing: "0.2px" }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-6 mb-3 pb-5 fw-medium text-muted">
          Check out our{" "}
          <a
            href="#"
            className="fw-medium"
            style={{
              textDecoration: "none",
              color: "rgb(56, 126, 209)",
              cursor: "pointer",
            }}
          >
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <div className="mb-5 mt-4 border-top border-light-subtle"></div>
    </div>
  );
}

export default Hero;
