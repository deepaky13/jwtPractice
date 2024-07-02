import React from "react";
import { FormRow, Logo, SubmitBtn } from "../components";
import { Link, redirect, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);

    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register </h4>

        <FormRow type="text" name="name" defaultValue="will" />
        <FormRow type="text" name="lastName" defaultValue="smith" />
        <FormRow type="text" name="location" defaultValue="california" />
        <FormRow type="email" name="email" defaultValue="willsmith@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
