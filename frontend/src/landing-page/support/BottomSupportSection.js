import React, { useState } from "react";

// Accordion data matching the structure and icons from your example
const sections = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-plus",
    items: [
      { label: "• Resident individual", href: "#" },
      { label: "• Minor", href: "#" },
      { label: "• Non Resident Indian (NRI)", href: "#" },
      { label: "• Company, Partnership, HUF and LLP", href: "#" },
      { label: "• Glossary", href: "#" },
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-regular fa-user",
    items: [
      { label: "• Your Profile", href: "#" },
      { label: "• Account modification", href: "#" },
      {
        label: "• Client Master Report (CMR) and Depository Participant (DP)",
        href: "#",
      },
      { label: "• Nomination", href: "#" },
      { label: "• Transfer and conversion of securities", href: "#" },
    ],
  },
  {
    title: "Kite",
    icon: "fa-solid fa-chart-line",
    items: [
      { label: "• IPO", href: "#" },
      { label: "• Trading FAQs", href: "#" },
      { label: "• Margin Trading Facility (MTF) and Margins", href: "#" },
      { label: "• Charts and orders", href: "#" },
      { label: "• Alerts and Nudges", href: "#" },
      { label: "• General", href: "#" },
    ],
  },
  {
    title: "Funds",
    icon: "fa-solid fa-indian-rupee-sign",
    items: [
      { label: "• Add money", href: "#" },
      { label: "• Withdraw money", href: "#" },
      { label: "• Add bank accounts", href: "#" },
      { label: "• eMandates", href: "#" },
    ],
  },
  {
    title: "Console",
    icon: "fa-regular fa-window-maximize",
    items: [
      { label: "• Portfolio", href: "#" },
      { label: "• Corporate actions", href: "#" },
      { label: "• Funds statement", href: "#" },
      { label: "• Reports", href: "#" },
      { label: "• Profile", href: "#" },
      { label: "• Segments", href: "#" },
    ],
  },
  {
    title: "Coin",
    icon: "fa-regular fa-circle",
    items: [
      { label: "• Mutual funds", href: "#" },
      { label: "• National Pension Scheme (NPS)", href: "#" },
      { label: "• Fixed Deposit (FD)", href: "#" },
      { label: "• Features on Coin", href: "#" },
      { label: "• Payments and Orders", href: "#" },
      { label: "• General", href: "#" },
    ],
  },
];

// Data for the notices section
const notices = [
  {
    text: "Exclusion of F&O contracts on 8 securities from August 29, 2025",
    href: "#",
  },
  {
    text: "Revision in expiry day of Index and Stock derivatives contracts",
    href: "#",
  },
];

// Data for the quick links section
const quickLinks = [
  { label: "Track account opening", href: "#" },
  { label: "Track segment activation", href: "#" },
  { label: "Intraday margins", href: "#" },
  { label: "Kite user manual", href: "#" },
];

function BottomSupportSection() {
  const [open, setOpen] = useState(-1); // First accordion item is open by default

  return (
    <div className="container pt-5 pb-3 px-5">
      <div className="row">
        {/* Accordions Section */}
        <div className="col-lg-8">
          <div>
            {sections.map((section, i) => (
              <div className="mb-2" key={section.title}>
                <div
                  className="card"
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    boxShadow: "none",
                    background: "#fff",
                    marginBottom: "35px",
                  }}
                >
                  <div
                    className="card-header d-flex align-items-center p-3"
                    style={{
                      cursor: "pointer",
                      background: "#fff",
                      fontSize: "1rem",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => setOpen(open === i ? -1 : i)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f8faff"; // Light blue background
                      e.currentTarget.style.transform = "scale(1.04)"; // Slightly bigger
                      e.currentTarget.style.fontWeight = "600"; // Bolder text
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff"; // Back to white
                      e.currentTarget.style.transform = "scale(1)"; // Normal size
                      e.currentTarget.style.fontWeight = "500"; // Normal weight
                    }}
                  >
                    <span
                      className="me-3 d-flex justify-content-center align-items-center"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "#f8faff",
                        borderRadius: "4px",
                        color: "#3771c8",
                        fontSize: "1rem",
                      }}
                    >
                      <i className={section.icon}></i>
                    </span>
                    <span
                      className="fw-semibold"
                      style={{ fontSize: "1.2rem", color: "#444" }}
                    >
                      {section.title}
                    </span>
                    <span className="ms-auto">
                      <i
                        className={
                          open === i
                            ? "fa-solid fa-chevron-up"
                            : "fa-solid fa-chevron-down"
                        }
                        style={{ fontSize: "1rem", color: "#3771c8" }}
                      ></i>
                    </span>
                  </div>
                  {open === i && section.items.length > 0 && (
                    <div className="card-body py-3 ps-5">
                      <ul className="list-unstyled mb-0">
                        {section.items.map((item) => (
                          <li
                            key={item.label}
                            style={{ marginBottom: "0.75rem" }}
                          >
                            <a
                              href={item.href}
                              className="fw-medium"
                              style={{
                                color: "#3771c8",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices and Quick links Section */}
        <div className="col-lg-4">
          {/* Notices */}
          <div
            className="mb-4"
            style={{
              background: "#fff7e3",
              borderLeft: "4px solid #f69c2b",
              borderRadius: "4px",
              padding: "1rem 1rem 0.5rem 1.3rem",
            }}
          >
            <ul className="list-unstyled mb-2">
              {notices.map((notice) => (
                <li key={notice.text} style={{ marginBottom: "0.8rem" }}>
                  <a
                    href={notice.href}
                    style={{
                      color: "#3771c8",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {notice.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "#f8f8f8",
                borderBottom: "1px solid #e0e0e0",
                padding: "0.8rem 1rem",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Quick links
            </div>

            {/* Links */}
            <ul className="list-unstyled mb-0">
              {quickLinks.map((link, idx) => (
                <li
                  key={link.label}
                  style={{
                    borderBottom:
                      idx !== quickLinks.length - 1
                        ? "1px solid #e0e0e0"
                        : "none",
                  }}
                >
                  <a
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "0.8rem 1rem",
                      color: "#3771c8",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {idx + 1}. {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSupportSection;
