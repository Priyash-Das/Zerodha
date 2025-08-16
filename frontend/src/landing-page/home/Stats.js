import React from "react";

function Stats() {
  return (
    <div className="container px-5">
      <div className="row p-5">
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4 text-muted">Customer-first always</h2>
          <p
            className="mb-5 text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br></br>{" "}
            lakh crores of equity investments, making us India’s <br></br>{" "}
            largest broker; contributing to 15% of daily retail <br></br>{" "}
            exchange volumes in India.
          </p>
          <h2 className="fs-4 text-muted">No spam or gimmicks</h2>
          <p
            className="mb-5 text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            No gimmicks, spam, "gamification", or annoying push <br></br>{" "}
            notifications. High quality apps that you use at your <br></br>{" "}
            pace, the way you like.{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Our philosophies.
            </a>
          </p>
          <h2 className="fs-4 text-muted">The Zerodha universe</h2>
          <p
            className="mb-5 text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            Not just an app, but a whole ecosystem. Our investments <br></br> in
            30+ fintech startups offer you tailored services <br></br> specific
            to your needs.
          </p>
          <h2 className="fs-4 text-muted">Do better with money</h2>
          <p
            className="text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            With initiatives like{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Nudge
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Kill Switch
            </a>
            , we don't just <br></br> facilitate transactions, but actively help
            you do better <br></br> with your money.
          </p>
        </div>
        <div className="col-6 mt-5">
          <img
            src="media/images/ecosystem.png"
            alt="Image"
            className=""
            style={{ width: "100%" }}
          />
          <div className="text-center mt-5">
            <a
              href="#"
              className="mx-5 fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
