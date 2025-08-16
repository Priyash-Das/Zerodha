import React from "react";

function Hero() {
  const handleSignupClick = () => {
    // Navigate to the dashboard application
    window.location.href = "http://localhost:3001";
  };
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Image"
          className="d-block mx-auto mb-5"
          style={{ width: "90%", height: "auto" }}
        />
        <h1 className="mt-2 fs-2">Invest in everything</h1>
        <p
          className="fs-5 text-muted"
          style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 mt-4 mb-5 btn btn-primary fs-5"
          style={{ width: "18%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
