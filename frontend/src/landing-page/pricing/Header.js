import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="text-center px-3 pt-3 pb-5 mb-5">
        <h1 className="fs-2 pb-1 mt-3 pt-5">Charges</h1>
        <p
          className="text-muted fs-5 mb-5"
          style={{ wordSpacing: "3px", letterSpacing: "0.1px" }}
        >
          List of all charges and taxes
        </p>
      </div>
    </div>
  );
}

export default Header;
