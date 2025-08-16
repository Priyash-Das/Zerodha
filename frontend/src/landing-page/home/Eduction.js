import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row px-5">
        <div className="col-6 p-5">
          <img
            src="media/images/education.svg"
            alt="Image"
            className=""
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-6 mt-5 py-3">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p
            className="text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            Varsity, the largest online stock market education book in the world{" "}
            <br></br> covering everything from the basics to advanced trading.
          </p>
          <div className="mt-2 mb-4">
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <p
            className="text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
          >
            Trading Q&A, the most active trading and investment community in{" "}
            <br></br> India for all your market related queries.
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
              Trading Q&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
