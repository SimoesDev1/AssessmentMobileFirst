import React from "react";
import styles from "./Button.module.css";

const Button = ({ primary, size, children, onClick }) => {
  const className = `
    ${styles.button} 
    ${primary ? styles.primary : ""} 
    ${size === "medium" ? styles.medium : ""}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
