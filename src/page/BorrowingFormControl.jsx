import React from "react";
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import "../css/Dashbroad.css";
import BorrowingForm from "../components/BorrowingForm";

function BorrowingFormControl() {
  return (
    <div>
      <Navbar />
      <BorrowingForm />
      
    </div>
  );
}

export default BorrowingFormControl;
