import React, { useRef, useState } from "react";
import "../css/SectionForm.css";
import "../css/Footer.css";
import Footer from "../components/Footer";

const Section = () => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const remarksRef = useRef();

  const [descList, setDescList] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [fromSection, setFromSection] = useState("");
  const [toSection, setToSection] = useState("");
  const [reason, setReason] = useState("");

  const [subjectID, setSubjectID] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");
  const [gr, setGr] = useState("");
  const [aj, setAj] = useState("");

  const [assignSection, setAssignSection] = useState("");
  const [assignInstructor, setAssignInstructor] = useState("");

  const [switchWithName1, setSwitchWithName1] = useState("");
  const [switchWithName2, setSwitchWithName2] = useState("");
  const [switchWithID, setSwitchWithID] = useState("");

  const handleAddDescription = () => {
    const descriptionVal = descriptionRef.current.value;
    const amountVal = amountRef.current.value;
    const remarksVal = remarksRef.current.value;

    if (!fromSection || !toSection || !reason) return;
    setDescList((prev) => [
      ...prev,
      { fromSection, toSection, reason },
    ]);

    if (!descriptionVal || !amountVal || !remarksVal) return;
    setDescList((prev) => [
      ...prev,
      { description: descriptionVal, amount: amountVal, remarks: remarksVal },
    ]);

    if (!subjectID || !subjectTitle || !gr || !aj || !reason) return;
    setDescList((prev) => [
      ...prev,
      { subjectID, subjectTitle, gr, aj, reason },
    ]);

    if (!assignSection || !assignInstructor || !reason) return;
    setDescList((prev) => [
      ...prev,
      { assignSection, assignInstructor, reason },
    ]);

    if (!switchWithName1 || !switchWithName2 || !switchWithID || !fromSection || !toSection || !reason) return;
    setDescList((prev) => [
      ...prev,
      { switchWithName1, switchWithName2, switchWithID, fromSection, toSection, reason },
    ]);

  };

  const handleRadioChange = (id) => {
    setSelectedRadio(id);
    setShowDropdown(true);
  };

  return (
    <div className="request-form">
      <div className="container">
        <header className="header">
          <h1>Section/English Group Changing/Inform Schedule' Request Form</h1>
        </header>
        <form className="form">
          <section className="personal-info">
            <h2>Personal Information</h2>

            <div className="input-field">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" placeholder="First name" id="fullname" />
              <input type="text" placeholder="Last name" />
              <span>Branch</span>
              <input type="radio" id="ICT" name="branch" />
              <label htmlFor="ict">ICT</label>
              <input type="radio" id="DST" name="branch" />
              <label htmlFor="dst">DST</label>
            </div>

            <div className="input-field">
              <label htmlFor="studentID">Student ID</label>
              <input type="text" id="studentID" placeholder="6487001" />
              <label htmlFor="track">Track</label>
              <select name="track" id="track" defaultValue={""}>
                <option value="" disabled hidden></option>
                <option value="CS">CS</option>
                <option value="DB">DB</option>
                <option value="CN">CN</option>
                <option value="SE">SE</option>
                <option value="EB">EB</option>
                <option value="MM">MM</option>
                <option value="MS">MS</option>
                <option value="HT">HT</option>
              </select>
              <label htmlFor="years">Year</label>
              <select name="years" id="years" defaultValue={""}>
                <option value="" disabled hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label htmlFor="sections">Section</label>
              <select name="sections" id="sections" defaultValue={""}>
              <option value="" disabled hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="mu-email">MU Email</label>
              <input
                type="text"
                id="mu-email"
                placeholder="Firstname.sur@student.maidol.ac.th"
              />
              <label htmlFor="mobile-phone">Mobile Phone</label>
              <input type="text" id="mobile-phone" placeholder="000-000-0000" />
            </div>

            <form className="form">
              <section className="personal-info">
                <h2>Would like to request as followings</h2>
                <div className="input-field">
                  <input
                    type="radio"
                    id="switch-section"
                    name="branch"
                    onChange={() => handleRadioChange("switch-section")}
                  />
                  <label htmlFor="switch-section">Switch my(current) section</label><br></br>
                </div>

                <div className="input-field">
                  <input
                    type="radio"
                    id="switch-eng"
                    name="branch"
                    onChange={() => handleRadioChange("switch-eng")}
                  />
                  <label htmlFor="switch-eng">Switch/Change group of English subject</label><br></br>
                </div>

                <div className="input-field">
                  <input
                    type="radio"
                    id="retake"
                    name="branch"
                    onChange={() => handleRadioChange("retake")}
                  />
                  <label htmlFor="retake">Retake/Regrade student informs their registered subject(write down subject(s) on the backed page table)</label><br></br>
                </div>

                <div className="input-field">
                  <input
                    type="radio"
                    id="assign"
                    name="branch"
                    onChange={() => handleRadioChange("assign")}
                  />
                  <label htmlFor="assign">Student requests to be assigned to subject group</label><br></br>
                </div>

                <div className="input-field">
                  <input
                    type="radio"
                    id="person"
                    name="branch"
                    onChange={() => handleRadioChange("person")}
                  />
                  <label htmlFor="person">Switch person part (Request with no swapped persons will be considered based on the reason given)</label><br></br>
                </div>

                {showDropdown && selectedRadio === "switch-section" && (
                  <div className="input-field">
                    <label htmlFor="fromSection">From Section</label>
                    <select
                      id="fromSection"
                      value={fromSection}
                      onChange={(e) => setFromSection(e.target.value)}
                    >
                      <option value="section-1">1</option>
                      <option value="section-2">2</option>
                    </select>

                    <label htmlFor="toSection">To Section</label>
                    <select
                      id="toSection"
                      value={toSection}
                      onChange={(e) => setToSection(e.target.value)}
                    >
                      <option value="section-1">1</option>
                      <option value="section-2">2</option>
                    </select>

                    <label htmlFor="reason">Reason</label>
                    <input
                      type="text"
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                )}

                {showDropdown && selectedRadio === "switch-eng" && (
                  <div className="input-field">
                    <label htmlFor="subjectID">(Subject ID) ITGL</label>
                    <input
                      type="text"
                      id="subjectID"
                      value={subjectID}
                      onChange={(e) => setSubjectID(e.target.value)}
                    />

                    <label htmlFor="subjectTitle">Subject Title</label>
                    <input
                      type="text"
                      id="subjectTitle"
                      value={subjectTitle}
                      onChange={(e) => setSubjectTitle(e.target.value)}
                    /><br></br>

                    <label htmlFor="gr">From (current)</label>
                    <label htmlFor="gr">Gr.</label>
                    <select
                      id="gr"
                      value={gr}
                      onChange={(e) => setGr(e.target.value)}
                    >
                      <option value="group-1">1</option>
                      <option value="group-2">2</option>
                    </select>

                    <label htmlFor="aj">Aj.</label>
                    <input
                      type="text"
                      id="aj"
                      value={aj}
                      onChange={(e) => setAj(e.target.value)}
                    /><br></br>

                    <label htmlFor="gr">To</label>
                    <label htmlFor="gr">Gr.</label>
                    <select
                      id="gr"
                      value={gr}
                      onChange={(e) => setGr(e.target.value)}
                    >
                      <option value="group-1">1</option>
                      <option value="group-2">2</option>
                    </select>

                    <label htmlFor="aj">Aj.</label>
                    <input
                      type="text"
                      id="aj"
                      value={aj}
                      onChange={(e) => setAj(e.target.value)}
                    /><br></br>

                    <label htmlFor="reason">Reason</label>
                    <input
                      type="text"
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                )}

                {showDropdown && selectedRadio === "assign" && (
                  <div className="input-field">
                    <label htmlFor="subjectID">I would like to be assigned to Subject ID</label>
                    <input
                      type="text"
                      id="subjectID"
                      value={subjectID}
                      onChange={(e) => setSubjectID(e.target.value)}
                    />

                    <label htmlFor="subjectTitle">Subject Title</label>
                    <input
                      type="text"
                      id="subjectTitle"
                      value={subjectTitle}
                      onChange={(e) => setSubjectTitle(e.target.value)}
                    /><br></br>

                    <label htmlFor="assignSection">Section/Group</label>
                    <select
                      id="assignSection"
                      value={assignSection}
                      onChange={(e) => setAssignSection(e.target.value)}
                    >
                      <option value="group-1">1</option>
                      <option value="group-2">2</option>
                    </select>

                    <label htmlFor="assignInstructor">Instructor (Aj.)</label>
                    <input
                      type="text"
                      id="assignInstructor"
                      value={assignInstructor}
                      onChange={(e) => setAssignInstructor(e.target.value)}
                    />

                    <label htmlFor="reason">Reason</label>
                    <input
                      type="text"
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                )}

                {showDropdown && selectedRadio === "person" && (
                  <div className="input-field">
                    <label htmlFor="switchWithName1">Switch with (First name)</label>
                    <input
                      type="text"
                      id="switchWithName1"
                      value={switchWithName1}
                      onChange={(e) => setSwitchWithName1(e.target.value)}
                      placeholder="First name"
                    />

                    <input
                      type="text"
                      id="switchWithName2"
                      value={switchWithName2}
                      onChange={(e) => setSwitchWithName2(e.target.value)}
                      placeholder="Last name"
                    /><br></br>

                    <label htmlFor="switchWithID">Student ID</label>
                    <input
                      type="text"
                      id="switchWithID"
                      value={switchWithID}
                      onChange={(e) => setSwitchWithID(e.target.value)}
                    />

                    <label htmlFor="switchWithName2">I acknowledged this switch request and I will switch my current</label>
                    <label htmlFor="fromSection">Section</label>
                    <select
                      id="fromSection"
                      value={fromSection}
                      onChange={(e) => setFromSection(e.target.value)}
                    >
                      <option value="section-1">1</option>
                      <option value="section-2">2</option>
                    </select>

                    <label htmlFor="toSection">To Section</label>
                    <select
                      id="toSection"
                      value={toSection}
                      onChange={(e) => setToSection(e.target.value)}
                    >
                      <option value="section-1">1</option>
                      <option value="section-2">2</option>
                    </select><br></br>
                  </div>
                )}
              </section>
            </form>
            
            <button type="submit" className="Confirm-btn">
              Confirm
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Section;