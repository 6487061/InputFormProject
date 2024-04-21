// route/RouteData.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbroad from "../page/Dashbroad";
import BorrowingFormControl from "../page/BorrowingFormControl";
import UploadPdf from "../page/UploadPdf";

const RouteData = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashbroad />} />
      <Route path="/borrowing" element={<BorrowingFormControl />} />
      <Route path="/upload-file" element={<UploadPdf />} />
    </Routes>
  </Router>
);

export default RouteData;
