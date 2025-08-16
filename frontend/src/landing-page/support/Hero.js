import React from "react";

function Hero() {
  return (
    <div
      className="pb-2 pt-4"
      style={{
        background: "#f5f5f5",
      }}
    >
      <div className="container px-5">
        <div className="d-flex justify-content-between align-items-center pt-2 mb-4">
          <h1 className="fw-medium fs-2">Support Portal</h1>
          <a href="#" className="btn btn-primary">
            My tickets
          </a>
        </div>
        <div className="mb-5">
          <div className="position-relative">
            <i
              className="fa-solid fa-magnifying-glass text-muted"
              style={{
                position: "absolute",
                left: "30px",
                top: "54%",
                transform: "translateY(-50%)",
              }}
            ></i>
            <input
              type="text"
              className="form-control"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              style={{
                background: "#fff",
                border: "1px solid #e0e0e0",
                fontSize: "1rem",
                height: "48px",
                paddingLeft: "60px",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
