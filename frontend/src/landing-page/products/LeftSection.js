import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  tryDemoText,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        <div className="col-5 ps-5">
          <img src={imgURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-5 ps-5">
          <h1 className="fs-2 pb-4">{productName}</h1>
          <p
            className="pb-2 me-5 text-muted"
            style={{ wordSpacing: "3px", letterSpacing: "0.1px" }}
          >
            {productDescription}
          </p>
          {(tryDemo || learnMore) && (
            <div className="pb-4 mb-2">
              {tryDemo && (
                <a
                  href={tryDemo}
                  className="fw-medium"
                  style={{
                    textDecoration: "none",
                    color: "rgb(56, 126, 209)",
                    cursor: "pointer",
                  }}
                >
                  {tryDemoText || "Try Demo"}{" "}
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {learnMore && (
                <a
                  href={learnMore}
                  className="fw-medium"
                  style={{
                    textDecoration: "none",
                    color: "rgb(56, 126, 209)",
                    cursor: "pointer",
                    marginLeft: "50px",
                  }}
                >
                  Learn More <i class="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
