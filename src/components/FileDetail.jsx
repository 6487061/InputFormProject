export default function FileDetail({ isPdf, isCorrectFileNameFormat, isWithinSizeLimit, fileName, clerFile }) {
  return (
    <div style={styles.file_detail}>
      <div style={styles.file_list}>
        <h1>General Request</h1>
        <div style={styles.file_item}>
          <div style={styles.file_f}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50}>
              <title>file-pdf-box</title>
              <path
                fill="#D9D9D9"
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z"
              />
            </svg>
            <div>
              <h4 style={{ margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%', maxWidth: '200px' }}>{fileName}</h4>
              {fileName != 'FileName' ? <span style={{ fontSize: '12px' }}>Success</span> : <sapn>&#160;</sapn>}
            </div>
          </div>
          <svg onClick={clerFile} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} style={{ cursor: 'pointer' }}>
            <title>delete-outline</title>
            <path fill="#979797" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
          </svg>
        </div>
      </div>
      <div style={styles.file_check}>
        <div style={styles.file_check_item}>
          <div style={styles.check_icon}>
            {isPdf != null ? (
              isPdf ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>check</title>
                  <path fill="#7C7C7C" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>close</title>
                  <path fill="#7C7C7C" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              )
            ) : null}
          </div>
          <h4>PDF File</h4>
        </div>
        <div style={styles.file_check_item}>
          <div style={styles.check_icon}>
            {isWithinSizeLimit != null ? (
              isWithinSizeLimit ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>check</title>
                  <path fill="#7C7C7C" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>close</title>
                  <path fill="#7C7C7C" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              )
            ) : null}
          </div>
          <h4>File within 10 MB</h4>
          {/* <h4>File name format: Form_Branch_ID</h4> */}
        </div>
        <div style={styles.file_check_item}>
          <div style={styles.check_icon}>
            {isCorrectFileNameFormat != null ? (
              isCorrectFileNameFormat ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>check</title>
                  <path fill="#7C7C7C" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}>
                  <title>close</title>
                  <path fill="#7C7C7C" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              )
            ) : null}
          </div>
          <h4>File name format: Form_Branch_ID</h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  file_detail: {
    display: 'flex',
    justifyContent: 'center',
  },
  file_list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '500px',
    width: '100%',
    // backgroundColor: 'red',
  },
  file_item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    border: '2px solid #B1B1B1',
    borderRadius: '10px',
    maxWidth: '300px',
    width: '100%',
    margin: '20px 0',
  },
  file_f: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    // color: '#fff',
  },

  //
  file_check: {
    maxWidth: '500px',
    width: '100%',
    // backgroundColor: 'green',
  },
  file_check_item: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    color: '#7C7C7C',
  },
  check_icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: '2px solid #7C7C7C',
    borderRadius: '30px',
    width: '30px',
    height: '30px',
  },
};
