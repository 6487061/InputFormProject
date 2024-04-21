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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (title, imageSrc) => {
    setSelectedItem({ title, imageSrc });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-content">
      <h2>Choose Your Document from</h2>
      <div className="blog">
        <div className="box" onClick={() => openModal("General", General)}>
          <div className="content">
            <img id="one" src={General} />
            <h4>General</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Changing", Changing)}>
          <div className="content">
            <img id="two" src={Changing} />
            <h4>Changing</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Absence", Absence)}>
          <div className="content">
            <img id="three" src={Absence} />
            <h4>Absence</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("ExamReview", ExamReview)}>
          <div className="content">
            <img id="four" src={ExamReview} />
            <h4>ExamReview</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("Equipment", Equipment)}>
          <div className="content">
            <img id="five" src={Equipment} />
            <h4>Equipment</h4>
          </div>
        </div>
        <div className="box" onClick={() => openModal("MakeUpExam", MakeUpExam)}>
          <div className="content">
            <img id="six" src={MakeUpExam} />
            <h4>MakeUpExam</h4>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        title={selectedItem.title}
        imageSrc={selectedItem.imageSrc}
      />
      <h2>Recent Tracking Timeline</h2>
      <Tracking />
      <Tracking />
      <div className="btn">
        <button>more</button>
      </div>
    </div>
  );
};

export default Content;
