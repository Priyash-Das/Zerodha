import React from "react";

function TechBlog() {
  return (
    <div className="container">
      <p className="d-flex justify-content-center align-items-center text-muted fs-5 px-5 pt-5">
        Want to know more about our technology stack? Check out the &nbsp;
        <a
          href="#"
          className="fw-medium"
          style={{
            textDecoration: "none",
            color: "rgb(56, 126, 209)",
            cursor: "pointer",
          }}
        >
          Zerodha.tech
        </a>
        &nbsp; blog.
      </p>
    </div>
  );
}

export default TechBlog;
