import React, { useState } from "react";
import General from "../assets/img/General.png";
import Changing from "../assets/img/Changing.png";
import Absence from "../assets/img/Absence.png";
import ExamReview from "../assets/img/ExamReview.png";
import Equipment from "../assets/img/Equipment.png";
import MakeUpExam from "../assets/img/MakeUpExam.png";
import Tracking from "./Tracking";
import Modal from "./ModalSelect";

const Content = () => {
  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isAbsenceOpen, setIsAbsenceOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [isExamReviewOpen, setIsExamReviewOpen] = useState(false);
  const [isMakeUpExamOpen, setIsMakeUpExamOpen] = useState(false);

  const getRoutePath = (title) => {
    const routeMap = {
      'General': '/general',
      'Changing': '/section', // Make sure the path is correctly cased
      'Absence': '/absence',
      'ExamReview': '/exam',
      'Equipment': '/equipment',
      'MakeUpExam': '/makeup', // Assuming you have a route for Equipment
      // ...other mappings
    };
    return routeMap[title] || '/';
  };

  const openModal = (title) => {
    const routePath = getRoutePath(title);
    if (title === 'General') setIsGeneralOpen(true);
    else if (title === 'Changing') setIsSectionOpen(true);
    else if (title === 'Absence') setIsAbsenceOpen(true);
    else if (title === 'Equipment') setIsEquipmentOpen(true);
    else if (title === 'ExamReview') setIsExamReviewOpen(true);
    else if (title === 'MakeUpExam') setIsMakeUpExamOpen(true);
  };

  const closeModal = (modalType) => {
    if (modalType === 'General') setIsGeneralOpen(false);
    else if (modalType === 'Changing') setIsSectionOpen(false);
    else if (modalType === 'Absence') setIsAbsenceOpen(false);
    else if (modalType === 'Equipment') setIsEquipmentOpen(false);
    else if (modalType === 'ExamReview') setIsExamReviewOpen(false);
    else if (modalType === 'MakeUpExam') setIsMakeUpExamOpen(false);
  };

  return (
    <div className="main-content">
      <h2>Choose Your Document from</h2>
      <div className="blog">
        <div className="box" onClick={() => openModal("General")}>
          <div className="content">
            <img id="one" src={General} />
            <h4>General</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Changing")}>
          <div className="content">
            <img id="two" src={Changing} />
            <h4>Changing</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Absence")}>
          <div className="content">
            <img id="three" src={Absence} />
            <h4>Absence</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("ExamReview")}>
          <div className="content">
            <img id="four" src={ExamReview} />
            <h4>ExamReview</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Equipment")}>
          <div className="content">
            <img id="five" src={Equipment} />
            <h4>Equipment</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("MakeUpExam")}>
          <div className="content">
            <img id="six" src={MakeUpExam} />
            <h4>MakeUpExam</h4>
          </div>
        </div>
      </div>
      <Modal 
        isOpen={isGeneralOpen}
        closeModal={() => closeModal('General')}
        title="General"
        imageSrc={General}
        routePath="/general"
      />
      <Modal 
        isOpen={isSectionOpen}
        closeModal={() => closeModal('Changing')}
        title="Section"
        imageSrc={Changing}
        routePath='/section'
      />
      <Modal 
        isOpen={isEquipmentOpen}
        closeModal={() => closeModal('Equipment')}
        title="Equipment"
        imageSrc={Equipment}
        routePath='/borrowing'
      />
      <Modal 
        isOpen={isAbsenceOpen}
        closeModal={() => closeModal('Absence')}
        title="Absence"
        imageSrc={Absence}
        routePath='/absence'
      />
      <Modal 
        isOpen={isExamReviewOpen}
        closeModal={() => closeModal('ExamReview')}
        title="ExamReview"
        imageSrc={ExamReview}
        routePath='/exam'
      />
      <Modal 
        isOpen={isMakeUpExamOpen}
        closeModal={() => closeModal('MakeUpExam')}
        title="MakeUpExam"
        imageSrc={MakeUpExam}
        routePath='/makeup'
      />
      <h2>Recent Tracking Timeline</h2>
      <Tracking />
      <div className="btn">
        <button>more</button>
      </div>
    </div>
  );
};

export default Content;
