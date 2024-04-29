import React, { useRef, useState } from "react";
import "../css/AbsenceForm.css";

const AbsenceForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [selectedAbsenceType, setSelectedAbsenceType] = useState("");
  const [reason, setReason] = useState("");
  const [document, setDocument] = useState(null);
  const [descList, setDescList] = useState([]);
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [isICTFacultyConfirmed, setIsICTFacultyConfirmed] = useState(false);
  const [isUniversityConfirmed, setIsUniversityConfirmed] = useState(false);
  const [isAdvisorConfirmed, setIsAdvisorConfirmed] = useState(false);
  const [makeUpSubject, setMakeUpSubject] = useState({
    subjectCode: '',
    subjectName: '',
    year: '',
    section: '',
    instructor: ''
  });

  const handleRadioChange = (event) => {
    setSelectedAbsenceType(event.target.value);
    // Reset other states if needed
    setEvent('');
    setLocation('');
    setDocumentType('');
  };

  const handleEventChange = (event) => {
    setEvent(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleAddDescription = () => {
    const descriptionVal = descriptionRef.current.value;
    const amountVal = amountRef.current.value;
    const remarksVal = remarksRef.current.value;
    const subjectVal = subjectRef.current.value;
    setLeaveType(event.target.value);

    if (!descriptionVal || !amountVal || !remarksVal || !subjectVal) return;
    setDescList((prev) => [
      ...prev,
      { description: descriptionVal, amount: amountVal, remarks: remarksVal },
    ]);

    if (!fromSection || !toSection || !reason) return;
    setDescList((prev) => [
      ...prev,
      { fromSection, toSection, reason },
    ]);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleDocumentChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const handleAbsenceTypeChange = (e) => {
    setSelectedAbsenceType(e.target.value);
  };

  const handleFileSelect = (event) => {
    // Handle file selection
    console.log(event.target.files[0]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    const handleMakeUpSubjectChange = (e) => {
      setMakeUpSubject(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    };
    // Here you will define your conditions for checking the checkboxes.
    // This is just a dummy condition, you will replace it with your actual conditions.
    if (file) {
      setIsICTFacultyConfirmed(file.name.includes('ICT Faculty'));
      setIsUniversityConfirmed(file.name.includes('University'));
      setIsAdvisorConfirmed(file.name.includes('Advisor'));
    }
  };
  return (
    <div className="request-form">
      <div className="container">
        <header className="header">
          <h1>Request for In-Class Absence form</h1>
        </header>
        <form className="form">
          <section className="personal-info">
            <h2>Personal Information</h2>

            <div className="input-field">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" placeholder="First name" id="fullname" />
              <input type="text" placeholder="Last name" />
              <span>Branch</span>
              <input type="radio" id="ict" name="branch" />
              <label htmlFor="ict">ICT</label>
              <input type="radio" id="dst" name="branch" />
              <label htmlFor="dst">DST</label>
            </div>

            <div className="input-field">
              <label htmlFor="studentID">Student ID</label>
              <input type="text" id="studentID" placeholder="6487001" />
              <label htmlFor="track">Track</label>
              <input type="text" id="track" />
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
            <div className="input-field">
              <label htmlFor="Guardian-num">Guardian’s contact number</label>
              <input type="text" id="mobile-phone" placeholder="000-000-0000" />
              <label htmlFor="mobile-phone">Relationship</label>
              <input type="text" id="relationship" />
            </div>
          </section>

          <section className="list-equipment">
            <h2>Absence Information</h2>
            <div className="list-equipment-input">
            
            <div className="absence-information">
              <label className="instructor-text" htmlFor="courseInstructor">The course instructor</label>
              <input className="instructor-input" type="text" id="courseInstructor" />
            </div>
            <div className="input-group">
              <label htmlFor="academicYear1">Academic Year: </label>
              <input type="text" id="academicYear1"/>
              <span> / </span>
              <input type="text" id="academicYear2"/>
            </div>
            <div className="input-field SubCode">
              <label htmlFor="for-use">Subject Code</label>
              <input type="text" id="for-use" />
            </div>
            <div className="input-field Subject">
              <label htmlFor="for-use">Subject</label>
              <input type="text" id="for-use" />
            </div>
            </div>

            <div className="input-field">
              <label htmlFor="Instructor">Instructor</label>
              <input type="text" id="Instructor"/>      
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
              </select>
            </div>

            <div className="input-field">
            <label htmlFor="date">Leave date</label>
              <input type="date" id="date" />
            <label htmlFor="time">Time</label>
              <input type="time" id="time"/>
              <span>-</span>
              <input type="time" id="time2"/>
            </div>
            
          </section>
          <section className="a">
            <h2>Absence Types</h2>
            <div>
            <div className="radio-group">
            <label>
          <input
            type="radio"
            name="absenceType"
            value="sickLeave"
            checked={selectedAbsenceType === 'sickLeave'}
            onChange={handleRadioChange}
          />
          Sick Leave <span className="red_text">*Your request must be submitted to the Instructor 3 working days in advance.</span>
        </label>

        {selectedAbsenceType === 'sickLeave' && (
          <div className="additional-info">
            <label htmlFor="reason" className="reason">Reason </label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={handleReasonChange}
            />
            <div className="attached_doc">
            <label htmlFor="document">Attached document </label>
            <input
              type="file"
              id="document"
              onChange={handleDocumentChange}
            /></div>
          </div>
        )}</div>
        
            <label>
          <input
            type="radio"
            name="absenceType"
            value="businessLeave"
            checked={selectedAbsenceType === 'businessLeave'}
            onChange={handleRadioChange}
          />
          Business Leave (Faculty / University representative) 
          <span className="red_text">*Your request must be submitted to the Instructor 3 working days in advance.</span>
        </label>

        {selectedAbsenceType === 'businessLeave' && (
          <div className="additional-info">
            <div>
            <label htmlFor="event">Event </label>
            <input
              type="text"
              id="event"
              value={event}
              onChange={handleEventChange}
            />
            </div>
            <div>
            <label htmlFor="location">Location </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
            </div>
            <div>
            <div className="attachment-section">
              <label htmlFor="document">Attached document</label>
                <div className="checkbox-section">
                  <div>
                    <input type="checkbox" id="ictFaculty" checked={isICTFacultyConfirmed} readOnly />
                    <label htmlFor="ictFaculty">Confirmation letter by ICT Faculty</label>
                  </div>
                  <div>
                      <input type="checkbox" id="university" checked={isUniversityConfirmed} readOnly />
                      <label htmlFor="university">Confirmation letter by University</label>
                  </div>
                  <div>
                    <input type="checkbox" id="advisor" checked={isAdvisorConfirmed} readOnly />
                    <label htmlFor="advisor">Confirmation letter by Advisor</label>
                  </div>
                  <div className="file-upload-btn">
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Browse
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileSelect} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
            {selectedAbsenceType === 'makeUpConflict' && (
        <div className="make-up-conflict-section">
          <label className="section-title">
            Please specify the Make-Up subject
          </label>
          <div className="input-group">
            <input
              type="text"
              name="subjectCode"
              placeholder="Subject code"
              value={makeUpSubject.subjectCode}
              onChange={handleMakeUpSubjectChange}
            />
            <input
              type="text"
              name="subjectName"
              placeholder="Subject"
              value={makeUpSubject.subjectName}
              onChange={handleMakeUpSubjectChange}
            />
            <select
              name="year"
              value={makeUpSubject.year}
              onChange={handleMakeUpSubjectChange}
            >
              <option value="">Year</option>
              {/* Populate with options */}
            </select>
            <select
              name="section"
              value={makeUpSubject.section}
              onChange={handleMakeUpSubjectChange}
            >
              <option value="">Section</option>
              {/* Populate with options */}
            </select>
            <input
              type="text"
              name="instructor"
              placeholder="Course instructor"
              value={makeUpSubject.instructor}
              onChange={handleMakeUpSubjectChange}
            />
          </div>
        </div>
      )}
            <label>
              <input
                  type="radio"
                  name="absenceType"
                  value="other"
                  checked={selectedAbsenceType === "other"}
                  onChange={handleAbsenceTypeChange}
              />
              Other (The approval depends on the instructor’s consideration)
            </label>
          </div>

          {selectedAbsenceType === "sickLeave" && (
              <div className="details-group">
                <label htmlFor="reason">Reason</label>
                <input type="text" id="reason" />
                <label htmlFor="document">Attached document</label>
                <input type="file" id="document" />
              </div>
          )}
        </section>
        </form>
      </div>
    </div>
  );
};

export default AbsenceForm;