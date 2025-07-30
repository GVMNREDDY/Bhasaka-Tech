import React from "react";
import "./validationstyles.css";

const Validation = () => {
  return (
    <>
    <div className="form-main-div">
      <div class="form-container">
        <h2>User Registration</h2>
        <form action="/submit" method="POST">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="full_name" maxLength={30} required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="">--Select--</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="Password" minLength={8} maxLength={10}  required />
          </div>

          <div class="form-group">
            <label for="bio">Short Bio minimum 20 characters</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              placeholder="Tell us about yourself..."
              minLength={20}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="resume">Upload Resume</label>
            <input type="file" id="resume" name="resume" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Validation;
