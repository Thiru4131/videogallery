import React, { useState } from 'react';
import { Media } from './media';

const App = () => {
  // Declare a state variable 'file' and its update function 'setFile' using the useState hook
  const [file, setFile] = useState(null);

  return (
    // Wrapper container
    <div className="container">

      {/*Heading*/}
      <center><h1>Video Gallery</h1></center>

      {/*Container for media items*/}
      <div className="media-container">
        {
          // Map over each element in the Media array and render a div for each element
          Media.map((file, index) => (
            <div className="media" key={index} onClick={() => setFile(file)}>
              {/* Render a video element for each media item*/}
              <video src={file.url} muted preload="metadata" poster={file.thumbnail} />
            </div>
          ))
        }
      </div>

       {/*Popup for selected video*/}
      <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
        {/*Close button for the popup*/}
        <span onClick={() => setFile(null)}>&times;</span>
        {
          // Conditional rendering of video element if the 'file' type is 'video'
          file?.type === 'video' ? <video src={file?.url} autoPlay controls /> : null
        }
      </div>
    </div>
  );
};

export default App;
