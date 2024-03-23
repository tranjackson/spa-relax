import * as React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Button from "../components/Button";

// Create styled component for the Book Appointment Page layout
const FormContainer = styled.div`
  width: 450px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  input, textarea {
    background-color: #f2f2f2; // Set the background color for inputs and textareas
  }
`;

const Buttonarea = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      typeOfPackage: "Manicure", // Default value
      phoneNumber: "",
      message: "",
      buttonText: "Submit", // Initial button text
      buttonColor: "primary", // Initialize button color to 'primary'
    };
  }

  handleFieldChange = (event) => {
    // Generalized field update method
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    const { name, typeOfPackage, phoneNumber, message } = this.state;

    // Construct an array with the input's id before each value
    const formDataArray = [
      `Name: ${name}`,
      `Type of Package: ${typeOfPackage}`,
      `Phone Number: ${phoneNumber}`,
      `Message: ${message}`,
    ];

    console.log(formDataArray);

    // Update the button's text and color
    this.setState({
      buttonText: "Sent!", // Updates the button text for an onClick event
      buttonColor: "clicked", // Updates the button color
    });
  };

  render() {
    const {
      name,
      typeOfPackage,
      phoneNumber,
      message,
      buttonText,
      buttonColor,
    } = this.state;

    return (
      <FormContainer>
        <Card color="color-4">
          <p className="lead">Contact us to book your appointment!</p>

          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for bottom margin */}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name" // Add 'name' attribute
              className="form-control"
              value={name}
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for bottom margin */}
            <label htmlFor="typeOfPackage">Type of Package:</label>
            <select
              id="typeOfPackage"
              name="typeOfPackage" // Add 'package' attribute
              className="form-control"
              value={typeOfPackage}
              onChange={this.handleFieldChange}
            >
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Massage">Massage</option>
              <option value="Facial">Facial</option>
            </select>
          </div>

          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for bottom margin */}
            <label htmlFor="phoneNumber">Phone Number: (###-###-####)</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber" // Add 'phone' attribute
              className="form-control"
              value={phoneNumber}
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="form-group mb-3">
            {" "}
            {/* Added mb-3 for bottom margin */}
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message" // Add 'message' attribute
              className="form-control"
              value={message}
              onChange={this.handleFieldChange}
            ></textarea>
          </div>
          <Buttonarea>
            <Button color={buttonColor} onClick={this.handleSubmit}>
              {buttonText}
            </Button>
          </Buttonarea>
        </Card>
      </FormContainer>
    );
  }
}

export default Book;
