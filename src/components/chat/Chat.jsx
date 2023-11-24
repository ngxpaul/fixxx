import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MediaStreamProvider } from './contexts/MediaStreamContext';
import { AudioAnalyserProvider } from './contexts/AudioAnalyserContext';
import { InputAudioProvider } from './contexts/InputAudioContext';

<ReactDOM className="render"></ReactDOM>




const Chat = () => {
  return (
      <div className="grid grid-cols-2 gap-4 p-2">
        <MediaStreamProvider video={false} audio={true}>
<InputAudioProvider>
  <AudioAnalyserProvider>
    <App />
  </AudioAnalyserProvider>
</InputAudioProvider>
</MediaStreamProvider>
      </div>
  );
};

export default Chat;







//
