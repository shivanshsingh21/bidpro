import { PrimaryRegistrationForm } from "./Registration.styles";
import { Formik, Form, Field } from "formik";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Bidder", label: "Bidder" },
  { value: "Buyer", label: "Buyer" },
];
function RegistrationForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <PrimaryRegistrationForm>
      <Formik
        onSubmit={(values) => {
          alert(values.fname);
          alert(values.lname);
          alert(values.email);
          alert(values.mobile_no);
          alert(values.houseno);
          alert(values.street);
          alert(values.city);
          alert(values.pin);
          alert(values.password);
        }}
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          mobile_no: "",
          houseno: "",
          street: "",
          city: "",
          pin: "",
          password: "",
        }}
      >
        <Form>
          <table>
            <tr>
              <td colSpan={2} className="main2">
                FREE SIGN UP
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="main3">
                Sign-up takes less than 30 seconds.
              </td>
            </tr>
            <tr>
              <td>
                <label>First Name:</label>
                <Field name="fname" class="main" type="text" />
              </td>
              <td>
                <label>Last Name:</label>
                <Field name="lname" class="main" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
                <Field name="email" class="main" type="email" />
              </td>
              <td>
                <label>Mobile No:</label>
                <Field name="mobile_no" class="main" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label>House no:</label>
                <Field name="houseno" class="main" type="text" />
              </td>
              <td>
                <label>Street:</label>
                <Field name="street" class="main" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label>City:</label>
                <Field name="city" class="main" type="text" />
              </td>
              <td>
                <label>PinCode:</label>
                <Field name="Pin" class="main" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Category:</label>
                <div className="app">
                  <Select defaultValue={selectedOption} options={options} />
                </div>
              </td>
              <td>
                <label>Password:</label>
                <Field name="password" class="main" type="password" />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="main4">
                <Field class="main4" name="checked" type="checkbox" />I accept
                the Terms and Conditions and the Privacy Policy of BidBid.com
              </td>
            </tr>

            <br></br>
            <PrimaryButton type="submit">Register</PrimaryButton>
          </table>
        </Form>
      </Formik>
    </PrimaryRegistrationForm>
  );
}
export default RegistrationForm;
