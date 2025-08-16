import React from "react";

function AccSection() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center px-5 pb-5">
        <div className="col-12">
          {/* Account Opening Charges */}
          <div className="mb-5">
            <h2 className="fs-3 mb-4">Charges for account opening</h2>
            <div className="table-responsive px-3">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th className="text-muted py-3">Type of account</th>
                    <th className="text-muted py-3">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted py-3">Online account</td>
                    <td className="text-muted py-3">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">Offline account</td>
                    <td className="text-muted py-3">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">
                      NRI account (offline only)
                    </td>
                    <td className="text-muted py-3">₹ 500</td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">
                      Partnership, LLP, HUF, or Corporate accounts (offline
                      only)
                    </td>
                    <td className="text-muted py-3">₹ 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
          <br></br>
          {/* Demat AMC Section */}
          <div className="mb-5">
            <h2 className="fs-3 mb-4">Demat AMC (Annual Maintenance Charge)</h2>
            <div className="table-responsive px-3">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th className="text-muted py-3">Value of holdings</th>
                    <th className="text-muted py-3">AMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted py-3">Up to ₹4 lakh</td>
                    <td className="text-muted py-3">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">₹4 lakh - ₹10 lakh</td>
                    <td className="text-muted py-3">
                      ₹ 100 per year, charged quarterly*
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">Above ₹10 lakh</td>
                    <td className="text-muted py-3">
                      ₹ 300 per year, charged quarterly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mt-3" style={{ fontSize: "14px" }}>
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA). BSDA account holders cannot hold
              more than one demat account. To learn more about BSDA,{" "}
              <a
                href="#"
                className="fw-medium"
                style={{
                  textDecoration: "none",
                  color: "rgb(56, 126, 209)",
                  cursor: "pointer",
                }}
              >
                click here
              </a>
              .
            </p>
          </div>
          <br></br>
          <br></br>
          {/* Optional Services Section */}
          <div>
            <h2 className="fs-3 mb-4">
              Charges for optional value added services
            </h2>
            <div className="table-responsive px-3">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th className="text-muted py-3">Service</th>
                    <th className="text-muted py-3">Billing Frequency</th>
                    <th className="text-muted py-3">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted py-3">Tickertape</td>
                    <td className="text-muted py-3">Monthly / Annual</td>
                    <td>
                      <span className="d-block text-muted ">Free: ₹0</span>
                      <span className="d-block text-muted ">
                        Pro: ₹249/₹2399
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">Smallcase</td>
                    <td className="text-muted py-3">Per transaction</td>
                    <td>
                      <span className="d-block text-muted ">
                        Buy & Invest More: ₹100
                      </span>
                      <span className="d-block text-muted ">SIP: ₹10</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted py-3">Kita Connect</td>
                    <td className="text-muted py-3">Monthly</td>
                    <td>
                      <span className="d-block text-muted ">Connect: ₹500</span>
                      <span className="d-block text-muted ">
                        Historical: ₹500
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccSection;
