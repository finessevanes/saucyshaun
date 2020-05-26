import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeOff, setTimeOff] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Name: ${name} Send To: ${email} Time off: ${timeOff}`);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Time Off Request Form</h1>
        <label>
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Send To:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Time Off:
          <input type="text" onChange={(e) => setTimeOff(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
