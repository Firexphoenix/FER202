import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput';
import ValidatedForm from './components/ValidatedForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="container mt-5">
      <h1>Form Validation</h1>
      <ValidatedInput />
      <br />
      <h1>Form Validation</h1>
      <ValidatedForm />
      <br />
      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;