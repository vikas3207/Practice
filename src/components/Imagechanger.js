import React, { useState, useEffect, useRef } from 'react';
import '../cssfiles/Imagechanger.css'

export default function Imagechanger() {
  const [imageSrc, setImageSrc] = useState('https://media.istockphoto.com/id/1302958092/photo/change-arrow-with-smaller-but-many-obstacles.jpg?b=1&s=170667a&w=0&k=20&c=XqBz2k8YeS47RCW5Yex0IEFQcMFwxnoWOVtnOTS3SPM=');
  const inputRef = useRef(null);

  useEffect(() => {
    if (imageSrc) {
      inputRef.current.value = null;
    }
  }, [imageSrc]);

  const handleInputChange = (event) => {
    const selectedFile = event.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
       setImageSrc(objectUrl);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className='main-div'>
        <h6>You can change the Image</h6>
     <img src={imageSrc} alt="selected" width="250px" height="250px"/>
      <br></br>
      <button className='btn' onClick={handleButtonClick}>Change Image</button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
    </div>
  );
}