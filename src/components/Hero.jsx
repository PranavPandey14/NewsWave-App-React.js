import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h1 style={{ fontsize: "50px", color: "#1877F2" }}>News Wave</h1>
      <h5 style={{ fontsize: "50px", color: "#B2BEB5" }}>
      Stay Informed : <span className="text-danger ">Anytime </span>,<span className="text-danger"> Anywhere</span>
      </h5>
    </div>
  );
};

export default Hero;
