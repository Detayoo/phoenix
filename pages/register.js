import { useState } from "react";
import Router from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  AuthenticationSidebar,
  TextField,
  PrimaryButton,
  SelectField,
} from "../components";

const Register = () => {
  const [showPassword, setShowWPassword] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    accountType: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    organizationName: Yup.string().required("Organization name is required"),
    accountType: Yup.string().required("Account type is required"),
  });

  return (
    <div className="flex w-full h-screen">
      <AuthenticationSidebar />
      <div className=" flex-1 h-screen flex flex-col justify-center text-left px-[8.5rem] overflow-y-auto">
        <p className="text-[1.4rem] font-semibold">
          Create Account for your Organization
        </p>
        <p className="text-sm text-gray-text tracking-wide mt-2">
          Hey there, down here 👋 We are happy to have you here, <br /> Sign up
          to have access to the dashboard.
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
          {({ values, errors, touched, isValid, dirty, setTouched }) => {
            return (
              <Form className="flex flex-col gap-y-6 mt-9">
                <div className="flex gap-x-8">
                  <TextField
                    name="firstName"
                    value={values.firstName}
                    label="First name"
                    placeholder="Enter your first name"
                    inputClass="auth__input"
                    handleBlur={() => setTouched({ firstName: true })}
                    errors={errors.firstName && touched.firstName}
                  />
                  <TextField
                    name="lastName"
                    value={values.lastName}
                    label="Last name"
                    placeholder="Enter your last name"
                    inputClass="auth__input"
                    handleBlur={() => setTouched({ lastName: true })}
                    errors={errors.lastName && touched.lastName}
                  />
                </div>

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
                  name="phoneNumber"
                  value={values.phoneNumber}
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  inputClass="auth__input"
                  handleBlur={() => setTouched({ phoneNumber: true })}
                  errors={errors.phoneNumber && touched.phoneNumber}
                />

                <TextField
                  name="organizationName"
                  value={values.organizationName}
                  label="Organization Name"
                  placeholder="Enter your organization name"
                  inputClass="auth__input"
                  handleBlur={() => setTouched({ organizationName: true })}
                  errors={errors.organizationName && touched.organizationName}
                />

                <SelectField
                  name="accountType"
                  value={values.accountType}
                  label="Account Type"
                  inputClass={`auth__input`}
                  textClass={
                    values.accountType
                      ? "text-black"
                      : "auth__select__inactive__text"
                  }
                >
                  <option value="">Select an account type</option>
                  <option value="agent">Agent</option>
                </SelectField>

                {/* 
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
                /> */}

                <PrimaryButton
                  disabled={!(isValid && dirty)}
                  title="Create Account"
                  type="submit"
                  className="self-start mt-2 h-[2.8rem] bg-primary-red text-white rounded-[9px]"
                />
              </Form>
            );
          }}
        </Formik>
        <div className="flex gap-x-1 text-sm mt-6">
          <p className="text-gray-text">Already have an account?</p>
          <p
            onClick={() => Router.push("/login")}
            className="text-primary-red cursor-pointer"
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
