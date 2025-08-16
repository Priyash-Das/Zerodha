import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <div className="text-center p-3">
        <h1 className="display-1 fw-bold text-dark m-0">404</h1>
        <h2 className="fs-3 fw-medium text-dark mt-3 mb-2">
          Kiaan couldn’t find that page
        </h2>
        <p className="text-secondary mb-4">
          We couldn’t find the page you were looking for. Visit Zerodha’s home
          page.
        </p>
        <Link to="/" className="link-primary fw-medium text-decoration-none">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
