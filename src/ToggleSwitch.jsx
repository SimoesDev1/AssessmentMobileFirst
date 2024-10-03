import React from "react";

const ToggleSwitch = ({ darkMode, toggleTheme }) => {
  return (
    <div
      onClick={toggleTheme}
      style={{ cursor: "pointer", display: "inline-block", marginLeft: "20px" }}
    >
      <div
        style={{
          width: "50px",
          height: "25px",
          background: darkMode ? "#007bff" : "#ccc",
          borderRadius: "25px",
          position: "relative",
          transition: "background 0.3s",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            background: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: darkMode ? "26px" : "2px",
            transform: "translateY(-50%)",
            transition: "left 0.3s",
          }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
