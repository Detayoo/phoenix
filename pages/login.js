import { useState } from "react";
import Router from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { AuthenticationSidebar, TextField, PrimaryButton } from "../components";

const Login = () => {
  const [showPassword, setShowWPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="flex w-full h-screen">
      <AuthenticationSidebar />
      <div className=" flex-1 flex flex-col justify-center text-left px-[8.5rem]">
        <p className="text-[1.4rem] font-semibold">Welcome back!</p>
        <p className="text-sm text-gray-text mt-2 tracking-wide">
          Hey there, down here 👋 Want to hear something cool? <br /> Sign in to
          have access to the website.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, isValid, dirty, setTouched, touched }) => {
            console.log(values);
            return (
              <Form className="flex flex-col gap-y-6 mt-12">
                <TextField
                  name="email"
                  value={values.email}
                  label="Email address"
                  placeholder="Enter your email address"
                  inputClass="auth__input"
                  handleBlur={() => setTouched({ email: true })}
                  errors={errors.email && touched.email}
                />
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  label="Password"
                  placeholder="Enter your password"
                  isPassword={true}
                  inputClass="auth__input"
                  toggleText={showPassword ? "Hide" : "Show"}
                  handleToggle={() => setShowWPassword(!showPassword)}
                  handleBlur={() => setTouched({ password: true })}
                  errors={errors.password && touched.password}
                />
                <div className="flex justify-between items-center text-[0.8rem]">
                  <div className="flex items-center gap-x-2">
                    <Field
                      type="checkbox"
                      name="remember"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px]"
                    />
                    <p>Remember me</p>
                  </div>
                  <p className="text-primary-red font-normal cursor-pointer">
                    Forgot Password?
                  </p>
                </div>

                <PrimaryButton
                  disabled={!(isValid && dirty)}
                  title="Sign in"
                  type="submit"
                  className="self-start mt-2 h-[2.8rem] bg-primary-red text-white rounded-[9px]"
                />
              </Form>
            );
          }}
        </Formik>
        <div className="flex gap-x-1 text-sm mt-6">
          <p className="text-gray-text">Don't have an account?</p>
          <p
            onClick={() => Router.push("/register")}
            className="text-primary-red cursor-pointer"
          >
            Create a free account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
