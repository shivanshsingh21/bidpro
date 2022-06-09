import React from "react";
import { PrimaryLoginForm } from "./LoginForm.styles";
import { Formik, Form, Field } from 'formik';
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";

function LoginForm() {
    return(
        <PrimaryLoginForm>
            <Formik onSubmit={(values)=>{
                alert(values.email)
                alert(values.password)
            }} initialValues={{ email: "", password: ""}}>
                <Form>
                    <Field name="email" type="email" Placeholder="E-MAIL"/>
                     <Field name="password" type="password"Placeholder="PASSWORD"/>
                   <PrimaryButton type="submit">Login</PrimaryButton>
                   
                </Form>
            </Formik>
        </PrimaryLoginForm>
    )
}

export default LoginForm;