import React from 'react';

export default function Modal({ setIsModal }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, height: '100svh', width: '100svw' }}>
      <div style={styles.container}>
        <div style={styles.title}>
          <svg onClick={() => setIsModal(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} style={{ cursor: 'pointer' }}>
            <title>close</title>
            <path fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </div>
        <div style={styles.body}>
          <h3 style={styles.body_text}>Please ensure that your information is complete and accurate before submitting.</h3>
          <button onClick={() => setIsModal(false)} style={styles.body_btn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    backgroundColor: '#7C7C7C',
    width: '100%',
    maxWidth: '400px',
    // height: '500px',
    padding: '20px',
    borderRadius: '20px',
  },
  title: {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
  },
  body: {
    textAlign: 'center',
  },
  body_text: {
    margin: '20px 0',
    fontSize: '24px',
    color: '#fff',
  },
  body_btn: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 40px',
    borderRadius: '8px',
    margin: '20px 0',
    fontSize: '18px',
    cursor: 'pointer',
  },
};
