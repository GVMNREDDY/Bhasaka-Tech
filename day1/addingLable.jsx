import React, { useState } from "react";
import "./AddingLabel.css";

const AddingLable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    message: "",
  });

  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "designation" && e.target.value === "other") {
      setToggle(!toggle);
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      designation: "",
      message: "",
    });
    setMessage("");
    setToggle(false);
  };

  console.log("Form submitted:", formData);
  return (
    <>
      <div className="MainContainer">
        <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label for="designation">
              Designation:
              <select
                id="designation"
                name="designation"
                onChange={handleChange}
                value={formData.designation}
                required
              >
                <option value="">Select</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </label>
            {toggle ? (
              <label>
                Please specify your designation:
                <input
                  type="text"
                  name="designation"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minLength={8}
                  maxLength={20}
                  placeholder="Enter your designation"
                  required
                />
              </label>
            ) : (
              <></>
            )}
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <div className="checkbox-container">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddingLable;
