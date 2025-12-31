import { useState } from "react";
import "./form.css";
//FeedbackForm is a function that describes what the form will look like
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    feedback: "",
  });
  //handleChange runs whenever a user types something in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); // Updates the form data box with the new value
  };

  //runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); //Stops the form from doing its default action i.e. refreshing the page
    console.log("Feedback submitted:", formData); //Shows the form data in the console
    // Reset the form after submission
    setFormData({
      name: "",
      mobileNumber: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-label">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name} //Binds the form field value to the state
            onChange={handleChange} //Updates the state when the user types
            required
          />
          <label>Mobile Number:</label>
          <input
            type="number"
            name="mobileNumber"
            placeholder="Enter your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid e-mail id"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Feedback:</label>
          <textarea
            name="feedback"
            placeholder="Start typing...."
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
