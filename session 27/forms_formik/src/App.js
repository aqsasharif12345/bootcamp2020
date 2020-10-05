import React from 'react';
import './App.css';
import FormikForm from './FormikForm';
import FormikFormWithYup from './FormikFormWithYup';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
     {/* <FormikForm /> */}

     <FormikFormWithYup />
    </div>
  );
}

export default App;
