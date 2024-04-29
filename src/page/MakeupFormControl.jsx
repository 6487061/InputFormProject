import React from "react";
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import "../css/Dashbroad.css";
import MakeupForm from "../components/MakeupForm";

function MakeupFormControl() {
  return (
    <div>
      <Navbar />
      <MakeupForm />
    </div>
  );
}

export default MakeupFormControl;