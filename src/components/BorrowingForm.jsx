import React, { useRef, useState } from "react";
import "../css/RequestForm.css";

const BorrowingForm = () => {
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

    <div className="request-form">
      <div className="container">
        <header className="header">
          <h1>Request form for Borrowing ICT's Equipment</h1>
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
            <h2>List of equipment you would like to borrow</h2>
            <div className="list-equipment-input">
              <div className="input-field one">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  ref={descriptionRef}
                  placeholder="The name of the equipment you want to use, such as a chair in the lecture room."
                />
              </div>

              <button
                type="button"
                className="add-equip-btn"
                onClick={handleAddDescription}
              >
                +<br />
                ADD
              </button>
              <div className="input-field two">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  ref={amountRef}
                  placeholder="20"
                />
                <label htmlFor="remarks">Remarks</label>
                <input
                  type="text"
                  id="remarks"
                  ref={remarksRef}
                  placeholder="Additional information or Comment"
                />
              </div>
            </div>
          </section>

          <div className="show-description-list">
            <div className="row first">
              <div className="number">No.</div>
              <div className="descrip">Description</div>
              <div className="amount">Amount</div>
              <div className="remarks">Remarks</div>
            </div>

            {descList?.map((desc, index) => (
              <div className="row">
                <div className="number">{index + 1}</div>
                <div className="descrip">{desc.description}</div>
                <div className="amount">{desc.amount}</div>
                <div className="remarks">{desc.remarks}</div>
              </div>
            ))}
          </div>
          <section className="request-detail">
            <h2>Requst Detail</h2>
            <div className="input-field first">
              <label htmlFor="for-use">For use in the case of</label>
              <input type="text" id="for-use" />
            </div>
            <div className="input-field">
              <label htmlFor="date">On the date</label>
              <input type="date" id="date" />
              <label htmlFor="from">From</label>
              <input type="text" id="from" placeholder="Place / Room" />
              <label htmlFor="to">To</label>
              <input type="text" id="to" placeholder="Place / Room" />
            </div>

            <div className="input-field">
              <label htmlFor="amount-students">
                The number of students in this activity
              </label>
              <input type="text" id="amount-students" />
            </div>
          </section>
          <button type="Confirm" className="Confirm-btn">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowingForm;