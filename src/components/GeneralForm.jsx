import React, { useRef, useState } from "react";
import "../css/GeneralForm.css";

const GeneralForm = () => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const remarksRef = useRef();
  const [descList, setDescList] = useState([]);

  const handleAddDescription = () => {
    const descriptionVal = descriptionRef.current.value;
    const amountVal = amountRef.current.value;
    const remarksVal = remarksRef.current.value;

    if (!descriptionVal || !amountVal || !remarksVal) return;
    setDescList((prev) => [
      ...prev,
      { description: descriptionVal, amount: amountVal, remarks: remarksVal },
    ]);
  };
  return (
    <div className="general-form">
        <div className="container">
            <header className="header">
                <h1>General Request Form</h1>
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
        </section>
        
        <section className="request-detail">
            <h2>Requst Detail</h2>
            <div className="input-field first">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="input-field">
              <label htmlFor="from">Reasons</label>
              <input type="text" id="reasons"/>

            </div>
          </section>
          <button type="Confirm" className="Confirm-btn">
          Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default GeneralForm;
