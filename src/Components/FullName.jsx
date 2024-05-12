import React, { useState } from "react";
import "./FullName.css";
function FullName() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  console.log(formData);

  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = formData.firstName + " " + formData.lastName;
    setOutput(result);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            required
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            required
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Full Name: {output}</p>
    </div>
  );
}

export default FullName;
