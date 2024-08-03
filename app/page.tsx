"use client";
import React from "react";

const LINKS = [
  {
    name: "AI Selfie",
    link: "https://photobooth.gokapturehub.com/ai-photo-booth/66ac7ed29698e6da6aaaea27",
  },
  {
    name: "MJ Selfie",
    link: "https://celeb-ai.gokapturehub.com/",
  },
];

function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5dc", // Wheat color
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "Georgia, serif",
          color: "#15151a", // Dark gray color for better contrast
          marginBottom: "2rem",
        }}
      >
        Michael Jordan Face Swap AI
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {LINKS.map((link) => (
          <button
            key={link.name}
            style={{
              fontSize: "1.2rem",
              color: "#fff",
              minWidth: "12rem",
              backgroundColor: "#000", // Darker button background
              padding: "1rem 2rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onClick={() => window.open(link.link)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#555"; // Lighter background on hover
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#333"; // Reset background on mouse leave
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Page;
