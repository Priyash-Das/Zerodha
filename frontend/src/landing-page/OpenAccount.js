import React from "react";

function OpenAccount() {
  const handleSignupClick = () => {
    // Navigate to the dashboard application
    window.location.href = "http://localhost:3001";
  };
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-2 fs-2">Open a Zerodha account</h1>
        <p
          className="fs-5 mt-3 text-muted"
          style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 mt-3 mb-5 btn btn-primary fs-5"
          style={{ width: "18%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
