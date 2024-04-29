import React from "react";
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import "../css/Dashbroad.css";
import AbsenceForm from "../components/AbsenceForm";

function AbsenceFormControl() {
  return (
    <div>
      <Navbar />
      <AbsenceForm />
    </div>
  );
}

export default AbsenceFormControl;