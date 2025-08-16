import React from "react";

function Pricing() {
  return (
    <div className="container px-5">
      <div className="row p-5">
        <div className="col-6 px-3">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p
            className="text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            We pioneered the concept of discount broking and price <br></br>{" "}
            transparency in India. Flat fees and no hidden charges.
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 mt-5 py-3">
          <img
            src="media/images/Pricing0to20.png"
            alt="Image"
            className=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
