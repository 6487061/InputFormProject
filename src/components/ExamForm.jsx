import React, { useRef, useState } from "react";
import "../css/ExamForm.css";

const ExamForm = () => {
  const subjectnameRef = useRef();
  const subjectidRef = useRef();
  const instructorRef = useRef();
  const reasonsRef = useRef();
  const studentOpinionRef = useRef();



  const [descList, setDescList] = useState([]);

  const handleAddDescription = () => {
    const subjectidVal = subjectidRef.current.value;
    const subjectnameVal = subjectnameRef.current.value;
    const instructorVal = instructorRef.current.value;
    const reasonsVal = reasonsRef.current.value;
    const studentOpinionVal = studentOpinionRef.current.value;

    if (!descriptionVal || !amountVal || !reasonsVal) return;
    setDescList((prev) => [
      ...prev,
      { subjectid: subjectidVal, subjectname: subjectnameVal, instructor: instructorVal, reasons: reasonsVal },
    ]);
  };
  return (
    <div className="request-form">
      <div className="container">
        <header className="header">
          <h1>Request for Make Up Examination Form</h1>
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
          </section>
          <section className="list-equipment">
            <h2>Submit this request for make up the examination of</h2>
            <div className="list-equipment-input">
              <div className="input-field one">
                <label htmlFor="description">Subject ID</label>
                <input
                  type="text"
                  id="description"
                  ref={subjectidRef}
                />
              </div>

              <div className="input-field two">
                <label htmlFor="subjectname">Subject Name</label>
                <input
                  type="text"
                  id="subjectname"
                  ref={subjectnameRef}
                />
              </div>
              <div className="input-field three">
                <label htmlFor="instructor">Instructor</label>
                <input
                  type="text"
                  id="instructor"
                  ref={instructorRef}
                />

              </div>
            </div>
            <div className="input-field four">
              <span>Semester</span>
              <input type="radio" id="midterm" name="semester" />
              <label htmlFor="midterm">Midterm</label>
              <input type="radio" id="final" name="semester" />
              <label htmlFor="final">Final</label>
              <label htmlFor="of">of</label>
              <input
                type="text"
                id="description"
                ref={subjectidRef}
              />
              <label htmlFor="say">Semester, Academic Year</label>
              <select name="years" id="years" defaultValue={""}>
                <option value="" disabled hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="input-field five">
              <label htmlFor="reasons">Reasons</label>
              <textarea
                type="text"
                id="description"
                ref={reasonsRef}
              />
            </div>
            <section className="personal-info">
              <h2>Student's Opinion</h2>

              <div className="input-field">
                <label htmlFor="fullname">After reviewing the examination, I</label>
              </div>
            </section>

            <div className="input-field">
              <input type="radio" id="midterm" name="branch" />
              <label htmlFor="midterm">Midterm</label>
            </div>

            <div className="input-field">
              <input type="radio" id="fianl" name="branch" />
              <label htmlFor="fianl">Fianl</label>
            </div>

            <div className="input-field">
            <label htmlFor="other">Other</label>
              <input type="text"  />
            </div>
          </section>

          <button type="submit" className="submit-btn">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
