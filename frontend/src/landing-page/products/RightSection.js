import React from "react";

function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore,
  learnMoreText,
}) {
  return (
    <div className="container">
      <div className="row px-5 align-items-center">
        <div className="col-5 ps-5">
          <h1 className="fs-2 pb-4">{productName}</h1>
          <p
            className="pb-2 me-5 text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.1px" }}
          >
            {productDescription}
          </p>
          {learnMore && (
            <div className="pb-4 mb-2">
              {learnMore && (
                <a
                  href={learnMore}
                  className="fw-medium"
                  style={{
                    textDecoration: "none",
                    color: "rgb(56, 126, 209)",
                    cursor: "pointer",
                  }}
                >
                  {learnMoreText || "Learn more"}{" "}
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-5 pe-5">
          <img src={imgURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
