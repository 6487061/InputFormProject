// route/RouteData.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbroad from "../page/Dashbroad";
import BorrowingFormControl from "../page/BorrowingFormControl";
import GeneralFormControl from "../page/GeneralFormControl";
import UploadPdf from "../page/UploadPdf";
import SectionFormControl from "../page/SectionFormControl";
import AbsenceFormControl from "../page/AbsenceFormControl";
import ExamFormControl from "../page/ExamFormControl";
import MakeupFormControl from "../page/MakeupFormControl";

const RouteData = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashbroad />} />
      <Route path="/borrowing" element={<BorrowingFormControl />} />
      <Route path="/upload-file" element={<UploadPdf />} />
      <Route path="/general" element={<GeneralFormControl />} />
      <Route path="/Section" element={<SectionFormControl />} />
      <Route path="/Absence" element={<AbsenceFormControl />} />
      <Route path="/Exam" element={<ExamFormControl />} />
      <Route path="/Makeup" element={<MakeupFormControl />} />
    </Routes>
  </Router>
);

export default RouteData;
