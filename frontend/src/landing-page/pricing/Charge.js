import React, { useState } from "react";

function Charges() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container mb-5">
      <div className="row justify-content-center p-5">
        <div className="col-12">
          {/* Tabs Navigation */}
          <ul
            className="nav nav-tabs justify-content-left"
            id="chargesTab"
            role="tablist"
          >
            <li className="nav-item fs-5 fw-medium mb-2" role="presentation">
              <button
                className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
                onClick={() => setActiveTab("equity")}
              >
                Equity
              </button>
            </li>
            <li className="nav-item fs-5 fw-medium mb-2" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "currency" ? "active" : ""
                }`}
                onClick={() => setActiveTab("currency")}
              >
                Currency
              </button>
            </li>
            <li className="nav-item fs-5 fw-medium mb-2" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "commodity" ? "active" : ""
                }`}
                onClick={() => setActiveTab("commodity")}
              >
                Commodity
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content p-3">
            {/* Equity Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "equity" ? "show active" : ""
              }`}
            >
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th></th>
                      <th className="text-muted py-3">Equity delivery</th>
                      <th className="text-muted py-3">Equity intraday</th>
                      <th className="text-muted py-3">F&O - Futures</th>
                      <th className="text-muted py-3">F&O - Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-muted py-3">Brokerage</td>
                      <td className="text-muted py-3">Zero Brokerage</td>
                      <td className="text-muted py-3">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="text-muted py-3">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="text-muted py-3">
                        Flat Rs. 20 per executed order
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">STT/CTT</td>
                      <td className="text-muted py-3">0.1% on buy & sell</td>
                      <td className="text-muted py-3">
                        0.025% on the sell side
                      </td>
                      <td className="text-muted py-3">
                        0.02% on the sell side
                      </td>
                      <td className="text-muted py-3">
                        • 0.125% of the intrinsic value on options that are
                        bought and exercised
                        <br />• 0.1% on sell side (on premium)
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Transaction charges</td>
                      <td className="text-muted py-3">
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td className="text-muted py-3">
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td className="text-muted py-3">
                        NSE: 0.00173%
                        <br />
                        BSE: 0
                      </td>
                      <td className="text-muted py-3">
                        NSE: 0.03503% (on premium)
                        <br />
                        BSE: 0.0325% (on premium)
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">GST</td>
                      <td className="text-muted py-3" colSpan="4">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">SEBI charges</td>
                      <td className="text-muted py-3" colSpan="4">
                        ₹10 / crore
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Stamp charges</td>
                      <td className="text-muted py-3">
                        0.015% or ₹1500 / crore on buy side
                      </td>
                      <td className="text-muted py-3">
                        0.003% or ₹300 / crore on buy side
                      </td>
                      <td className="text-muted py-3">
                        0.002% or ₹200 / crore on buy side
                      </td>
                      <td className="text-muted py-3">
                        0.003% or ₹300 / crore on buy side
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Currency Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "currency" ? "show active" : ""
              }`}
            >
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th></th>
                      <th className="text-muted py-3">Currency futures</th>
                      <th className="text-muted py-3">Currency options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-muted py-3">Brokerage</td>
                      <td className="text-muted py-3">
                        0.03% or ₹ 20/executed order whichever is lower
                      </td>
                      <td className="text-muted py-3">₹ 20/executed order</td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">STT/CTT</td>
                      <td className="text-muted py-3" colSpan="2">
                        No STT
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Transaction charges</td>
                      <td className="text-muted py-3">
                        NSE: 0.00035%
                        <br />
                        BSE: 0.00045%
                      </td>
                      <td className="text-muted py-3">
                        NSE: 0.0311%
                        <br />
                        BSE: 0.001%
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">GST</td>
                      <td className="text-muted py-3" colSpan="2">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">SEBI charges</td>
                      <td className="text-muted py-3" colSpan="2">
                        ₹10 / crore
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Stamp charges</td>
                      <td className="text-muted py-3" colSpan="2">
                        0.0001% or ₹10 / crore on buy side
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commodity Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "commodity" ? "show active" : ""
              }`}
            >
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th></th>
                      <th className="text-muted py-3">Commodity futures</th>
                      <th className="text-muted py-3">Commodity options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-muted py-3">Brokerage</td>
                      <td className="text-muted py-3">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="text-muted py-3">₹ 20/executed order</td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">STT/CTT</td>
                      <td className="text-muted py-3">
                        0.01% on sell side (Non-Agri)
                      </td>
                      <td className="text-muted py-3">0.05% on sell side</td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Transaction charges</td>
                      <td className="text-muted py-3">
                        MCX: 0.0021%
                        <br />
                        NSE: 0.0001%
                      </td>
                      <td className="text-muted py-3">
                        MCX: 0.0418%
                        <br />
                        NSE: 0.001%
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">GST</td>
                      <td className="text-muted py-3" colSpan="2">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">SEBI charges</td>
                      <td className="text-muted py-3">
                        Agri: ₹1 / crore
                        <br />
                        Non-agri: ₹10 / crore
                      </td>
                      <td className="text-muted py-3">₹10 / crore</td>
                    </tr>
                    <tr>
                      <td className="text-muted py-3">Stamp charges</td>
                      <td className="text-muted py-3">
                        0.002% or ₹200 / crore on buy side
                      </td>
                      <td className="text-muted py-3">
                        0.003% or ₹300 / crore on buy side
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <p
          className="d-flex justify-content-center align-items-center text-muted pt-3 fs-5"
          style={{ wordSpacing: "3px", letterSpacing: "0.1px" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "rgb(56, 126, 209)",
              cursor: "pointer",
            }}
          >
            Calculate your costs upfront
          </a>
          &nbsp;using our brokerage calculator
        </p>
      </div>
    </div>
  );
}

export default Charges;
