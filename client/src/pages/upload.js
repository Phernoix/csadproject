import React from 'react';
import ReactDOM from 'react-dom';
import FileUpload from '../components/fileUpload.js';
import Footer from '../components/footer.js';

const Upload = () => {
    return(
    <div>
    <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Challenge of the day:
    </h4>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>   
    <p>Upload a photo of you exercising so we can display it on our website!</p>
    </div>
    <FileUpload />
  </div>
  <Footer/>
  </div>
  );

};
  
export default Upload;