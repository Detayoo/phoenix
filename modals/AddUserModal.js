import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { TextField, GrayButton, PrimaryButton } from "../components";
import ModalContainer from "./ModalContainer";

export const AddUserModal = ({ showModal, setShowModal }) => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    accessControl: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is required").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  });

  return (
    <ModalContainer
      showModal={showModal}
      setShowModal={setShowModal}
      className="flex justify-center w-full h-screen items-center"
    >
      <div className="bg-white z-50 w-[44%] py-7 h-[95%] rounded-[3px] overflow-y-auto">
        <p className="font-semibold text-center mb-4">Add New User</p>
        <p className="bg-usage-bg h-10 flex items-center pl-12 font-[700]">
          Basic Info
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
          {({
            values,
            errors,
            isValid,
            dirty,
            setFieldValue,
            setTouched,
            touched,
          }) => {
            return (
              <Form className="mt-6 text-[0.75rem] flex flex-col gap-y-5">
                <TextField
                  label="Username (email)"
                  labelClass="text-[0.75rem]"
                  divClass="px-12"
                  name="email"
                  value={values.email}
                  placeholder="Enter your email"
                  handleBlur={() => setTouched({ email: true })}
                  error={errors.email && touched.email}
                />
                <TextField
                  type="password"
                  name="password"
                  value={values.password}
                  label="Password"
                  labelClass="text-[0.75rem]"
                  divClass="px-12"
                  placeholder="Enter your password"
                  handleBlur={() => setTouched({ password: true })}
                  error={errors.password && touched.password}
                />
                <TextField
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  label="Confirm Password"
                  labelClass="text-[0.75rem]"
                  divClass="px-12"
                  placeholder="Please confirm your password with at least 6 characters"
                  handleBlur={() => setTouched({ confirmPassword: true })}
                  error={errors.confirmPassword && touched.confirmPassword}
                />

                <p className="bg-usage-bg h-10 mt-4 flex items-center pl-12 text-base font-[700]">
                  Additional Info
                </p>

                <TextField
                  name="firstName"
                  value={values.firstName}
                  label="First Name"
                  labelClass="text-[0.75rem]"
                  divClass="px-12"
                  placeholder="Enter your first name"
                  handleBlur={() => setTouched({ firstName: true })}
                  error={errors.firstName && touched.firstName}
                />
                <TextField
                  name="lastName"
                  value={values.lastName}
                  label="Last Name"
                  labelClass="text-[0.75rem]"
                  divClass="px-12"
                  placeholder="Enter your last name"
                  handleBlur={() => setTouched({ lastName: true })}
                  error={errors.lastName && touched.lastName}
                />

                <p className="bg-usage-bg h-10 mt-4 flex items-center pl-12 text-base font-[700]">
                  Access Control
                </p>

                <div className="pl-12 flex flex-col gap-y-7 mt-2">
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="dashboardAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>Dashboard Control</p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="posAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>POS Access</p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="accountAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>Account Access</p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="transactionAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>Transaction Access</p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="topupLogAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>TopupLog Access</p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    <Field
                      type="checkbox"
                      name="accessControl"
                      value="balanceAccess"
                      className="h-[1.2rem] w-[1.2rem] accent-black mt-[2px] text-sm"
                    />
                    <p>Balance Access</p>
                  </div>
                </div>

                <div className="flex justify-between mt-10 px-12">
                  <GrayButton
                    onClick={() => setShowModal(false)}
                    type="button"
                    title="Cancel"
                    className="w-[12rem]"
                  />
                  <PrimaryButton
                    type="submit"
                    title="Save Changes"
                    className="w-[12rem]"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalContainer>
  );
};
