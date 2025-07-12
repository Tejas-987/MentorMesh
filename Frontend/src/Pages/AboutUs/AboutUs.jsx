import React from "react";
import "./AboutUs.css";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  backgroundColor: "#2D2D2D",
  justifyContent: "center",
};

const contentContainerStyle = {
  maxWidth: "50vw",
  margin: "60px",
  justifyContent: "center",
};

const titleStyle = {
  fontFamily: "Oswald, sans-serif",
  color: "#FBF1A4",
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "left",
};

const descriptionStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#f2efdb",
  fontSize: "1rem",
  lineHeight: "1.6",
  textAlign: "left",
  maxHeight: "100vh",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
};

const AboutUs = () => {
  return (
    <div className="content1-container">
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About MentorMesh</h2>
        <p style={descriptionStyle}>
          <i>
            As a student, I often struggled to find the right mentor. That's why I built MentorMesh — to make mentorship accessible and personal.
          </i>
        </p>
        <p style={descriptionStyle}>
          MentorMesh connects learners with experienced mentors in tech, design, and more. The goal is simple: make it easy to schedule a session and grow through real conversations.
        </p>
        <p style={descriptionStyle}>
          It’s a platform where people help people. No fluff, just skills, feedback, and honest progress — together.
        </p>
      </div>
      <img src={"/assets/images/about us.png"} style={{ maxWidth: "50vw", maxHeight: "100vh" }} alt="About MentorMesh" />
    </div>
  );
};

export default AboutUs;

