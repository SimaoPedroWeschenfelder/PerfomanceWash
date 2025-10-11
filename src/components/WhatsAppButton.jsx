import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-float">
      <a
        href="https://wa.me/+554891450243"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} color="#25D366" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
