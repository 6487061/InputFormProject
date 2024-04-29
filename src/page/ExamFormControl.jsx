import React from "react";
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import "../css/Dashbroad.css";
import ExamForm from "../components/ExamForm";

function ExamFormControl() {
  return (
    <div>
      <Navbar />
      <ExamForm />
    </div>
  );
}

export default ExamFormControl;