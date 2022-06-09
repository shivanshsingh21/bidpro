import React from "react";
import { PrimaryRegistrationForm } from "./Registration.styles";
import { Formik, Form, Field } from 'formik';
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
function RegistrationForm() {
  return(
      <PrimaryRegistrationForm>
          <Formik onSubmit={(values)=>{
              alert(values.fname)
              alert(values.lname)
              alert(values.email)
              alert(values.mobile_no)
              alert(values.houseno)
              alert(values.street)
              alert(values.city)
              alert(values.pin)
              alert(values.password)
          }} initialValues={{ fname:"", lname:"",email: "", mobile_no:"", houseno:"", street:"", city:"", 
          pin:"", password: ""}}>
              <Form><table><tr><td>
              <label>First Name:</label>
                  <Field name="fname" type="text"/></td><td>
                  <label>Last Name:</label>
                  <Field name="lname" type="text"/></td></tr><tr><td>
                  <label>Email:</label>
                  <Field name="email" type="email"/></td><td>
                  <label>Mobile No.:</label>
                  <Field name="mobile_no" type="text"/></td></tr><tr><td>
                  <label>House no:</label>
                  <Field name="houseno" type="text"/></td><td>
                  <label>Street:</label>
                  <Field name="street" type="text"/></td></tr><tr><td>
                  <label>City:</label>
                  <Field name="city" type="text"/></td><td>
                  <label>PinCode:</label>
                  <Field name="Pin" type="text"/></td></tr><tr><td>
                  <label>Password:</label>
                  <Field name="password" type="password"/></td></tr><br></br>
                  <PrimaryButton type="submit">Register</PrimaryButton>
                  </table>
              </Form>
          </Formik>
      </PrimaryRegistrationForm>
  )
}
export default RegistrationForm;