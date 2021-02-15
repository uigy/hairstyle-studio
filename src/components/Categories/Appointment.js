import React, { useRef, useEffect } from "react";

const Appointment = ({ sendData }) => {
  const categoryTitle = "Make an appointment";
  const section = useRef("INITIAL_VALUE");
  useEffect(() => {
    sendData(section, categoryTitle);
  });

  return <section ref={section} className="category appointment"></section>;
};

export default Appointment;
