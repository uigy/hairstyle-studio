import React, { useRef, useEffect } from "react";

const Contact = ({ sendData }) => {
  const categoryTitle = "Contact us";
  const section = useRef("INITIAL_VALUE");
  useEffect(() => {
    sendData(section, categoryTitle);
  });
  return <section ref={section} className="category contact"></section>;
};

export default Contact;
