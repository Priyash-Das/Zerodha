import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(251, 251, 251)" }}
    >
      <div className="container">
        <div className="row p-5">
          <div className="col-3" style={{ paddingRight: "60px" }}>
            <Link to="/">
              <img
                src="media/images/logo.svg"
                alt="Logo"
                className=""
                style={{ width: "70%", height: "auto" }}
              />
            </Link>
            <p
              className="mt-3 text-muted fw-medium"
              style={{ fontSize: "14px" }}
            >
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br></br> All rights
              reserved.
            </p>
            <div className="d-flex border-bottom border-light-subtle pb-3 gap-3 fs-5 text-muted">
              <i class="fa-brands fa-x-twitter link-hover"></i>
              <i class="fa-brands fa-square-facebook link-hover"></i>
              <i class="fa-brands fa-instagram link-hover"></i>
              <i class="fa-brands fa-linkedin-in link-hover"></i>
            </div>
            <div className="d-flex pt-3 gap-3 fs-5 text-muted">
              <i class="fa-brands fa-youtube link-hover"></i>
              <i class="fa-brands fa-whatsapp link-hover"></i>
              <i class="fa-brands fa-telegram link-hover"></i>
            </div>
          </div>
          <div className="col">
            <p
              className="fw-medium d-block mb-4 text-muted"
              style={{ fontSize: "20px" }}
            >
              Account
            </p>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Open demat account
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Minor demat account
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              NRI demat account
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Commodity
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Dematerialisation
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Fund transfer
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              MTF
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Referral program
            </a>
          </div>
          <div className="col">
            <p
              className="fw-medium d-block mb-4 text-muted"
              style={{ fontSize: "20px" }}
            >
              Support
            </p>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Contact us
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Support portal
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              How to file a complaint?
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Status of your complaints
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Bulletin
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Circular
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Z-Connect blog
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Downloads
            </a>
          </div>
          <div className="col">
            <p
              className="fw-medium d-block mb-4 text-muted"
              style={{ fontSize: "20px" }}
            >
              Company
            </p>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              About
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Philosophy
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Press & media
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Careers
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Zerodha Cares (CSR)
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Zerodha.tech
            </a>

            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Open source
            </a>
          </div>
          <div className="col">
            <p
              className="fw-medium d-block mb-4 text-muted"
              style={{ fontSize: "20px" }}
            >
              Quick links
            </p>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Upcoming IPOs
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Brokerage charges
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Market holidays
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Economic calendar
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Calculators
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Markets
            </a>
            <a
              href="#"
              className="d-block mb-2 text-muted link-hover"
              style={{ textDecoration: "none" }}
            >
              Sectors
            </a>
          </div>
        </div>
        <div className=" px-5 " style={{ fontSize: "12px", color: "#9b9b9b" }}>
          <p className="text-justify">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a
              href="mailto:complaints@zerodha.com"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a
              href="mailto:dp@zerodha.com"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p className="text-justify">
            Procedure to file a complaint on{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="text-justify">
            {" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              Grievances Redressal Mechanism
            </a>{" "}
          </p>
          <p className="text-justify">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="text-justify">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="text-justify">
            India's largest broker based on networth as per NSE.{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              NSE broker factsheet
            </a>
          </p>
          <p className="text-justify">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a
              href="#"
              className="fw-medium"
              style={{
                textDecoration: "none",
                color: "rgb(56, 126, 209)",
                cursor: "pointer",
              }}
            >
              create a ticket here
            </a>
            .
          </p>
        </div>
        <div className="d-flex px-5 mx-5 mb-4 justify-content-center gap-4">
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            NSE
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            BSE
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            MCX
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            Terms & conditions
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            Policies & procedures
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            Disclosure
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            For investor's attention
          </a>
          <a
            href="#"
            className="link-hover fw-medium"
            style={{
              fontSize: "14px",
              color: "#9b9b9b",
              textDecoration: "none",
            }}
          >
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
