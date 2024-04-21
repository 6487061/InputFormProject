import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileDetail from './FileDetail';
import Modal from './Modal';

function MyDropzone({ maxSize, setIsPdf, setIsCorrectFileNameFormat, setIsWithinSizeLimit, setFileName }) {
  const checkFileNameFormat = fileName => {
    const regex = /^Form_[A-Za-z0-9]+_[A-Za-z0-9]+\.pdf$/;
    return regex.test(fileName);
  };

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      let file = acceptedFiles[0] || rejectedFiles[0].file;
      setFileName(file.name);
      if (file.type !== 'application/pdf') {
        setIsPdf(false);
      } else {
        setIsPdf(true);
      }
      if (!checkFileNameFormat(file.name)) {
        setIsCorrectFileNameFormat(false);
      } else {
        setIsCorrectFileNameFormat(true);
      }
      if (file.size > maxSize) {
        setIsWithinSizeLimit(false);
      } else {
        setIsWithinSizeLimit(true);
      }
    },
    [maxSize]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize,
  });

  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={100}>
        <title>file-pdf-box</title>
        <path
          fill="#D9D9D9"
          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z"
        />
      </svg>

      <h1 style={styles.browse}>Browse</h1>
      <p>*Only PDF file with max size of 10 MB</p>
    </div>
  );
}

export default function Dropzone() {
  const [isPdf, setIsPdf] = useState(null);
  const [isCorrectFileNameFormat, setIsCorrectFileNameFormat] = useState(null);
  const [isWithinSizeLimit, setIsWithinSizeLimit] = useState(null);

  const [isModal, setIsModal] = useState(false);
  const [fileName, setFileName] = useState('FileName');

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const clerFile = () => {
    setIsPdf(null);
    setIsCorrectFileNameFormat(null);
    setIsWithinSizeLimit(null);
    setFileName('FileName');
  };
  return (
    <div>
      <MyDropzone
        maxSize={10 * 1024 * 1024}
        setIsPdf={setIsPdf}
        setIsCorrectFileNameFormat={setIsCorrectFileNameFormat}
        setIsWithinSizeLimit={setIsWithinSizeLimit}
        setFileName={setFileName}
      />{' '}
      {/* Max size in bytes, here 10MB */}
      <FileDetail isPdf={isPdf} isCorrectFileNameFormat={isCorrectFileNameFormat} isWithinSizeLimit={isWithinSizeLimit} fileName={fileName} clerFile={clerFile} />
      <div style={{ textAlign: 'center' }}>
        <button onClick={toggleModal} style={styles.confirm}>
          Confirm
        </button>
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
    </div>
  );
}

const styles = {
  dropzone: {
    border: '2px dashed black',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  browse: {
    backgroundColor: '#979797',
    color: '#fff',
    width: 'fit-content',
    borderRadius: '8px',
    padding: '0 20px 6px 20px',
    cursor: 'pointer',
  },
  confirm: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '18px',
    width: 'fit-content',
    borderRadius: '8px',
    padding: '10px 40px',
    cursor: 'pointer',
    marginTop: '60px',
  },
};
