import React from 'react'
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import Dropzone from "../components/Dropzone";

export default function UploadPdf() {
  return (
    <div>
        <Navbar />
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 60px",
        }}
      >
        <div style={styles.container}>
          <Dropzone />
        </div>
      </div>
    </div>
  )
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px 20px",
      maxWidth: "1400px",
      width: "100%",
    },
  };
  
