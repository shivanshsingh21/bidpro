import React from "react";
import { PrimaryLoginForm } from "./LoginForm.styles";
import { Formik, Form, Field } from 'formik';
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import { PrimaryCheckBox } from "../../atoms/forms/CheckBox/CheckBox.styles";

function LoginForm() {
    return(
        <PrimaryLoginForm>
            <Formik onSubmit={(values)=>{
                alert(values.email)
                alert(values.password)
            }} initialValues={{ email: "", password: ""}}>
                <Form> <table> <tr><td>
                    <Field name="email" type="email" class=
                    "main" Placeholder="E-MAIL"/>
                    <PrimaryCheckBox typeof="checked"></PrimaryCheckBox></td><td>
                     <Field name="password" type="password"class=
                    "main"Placeholder="PASSWORD"/></td><td>
                   <PrimaryButton type="submit">Login</PrimaryButton></td></tr>
                   </table> 
                </Form>
            </Formik>
        </PrimaryLoginForm>
    )
}

export default LoginForm;