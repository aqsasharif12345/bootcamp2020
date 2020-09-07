import React from 'react';
import './App.css';

import { initNotification } from './services/firebaseservice';

function App() {
  return (
    <div className="App">
      <h1>HEllo wOrld</h1>
      <button onClick = {initNotification}>
         Configure Notifications
         </button>
    </div>
  );
}

export default App;