import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { PrimaryButton, GrayButton } from "./Button";
import { SelectField } from "./SelectField";
import { TextField, CalendarField } from "./TextInput";

export const FilterTopupLog = () => {
  const initialValues = {
    startDate: "",
    endDate: "",
    account: "",
    type: "",
    channel: "",
    responseCode: "",
    success: "",
    operatorReference: "",
    target: "",
    operatorName: "",
    customerReference: "",
    systemReference: "",
  };

  const validationSchema = Yup.object({
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    account: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    channel: Yup.string().required("Required"),
    responseCode: Yup.string().required("Required"),
    success: Yup.string().required("Required"),
    operatorReference: Yup.string().required("Required"),
    target: Yup.string().required("Required"),
    operatorName: Yup.string().required("Required"),
    customerReference: Yup.string().required("Required"),
    systemReference: Yup.string().required("Required"),
  });

  const typeOptions = [
    { name: "", label: "" },
    { name: "airtime", label: "Airtime" },
    { name: "data", label: "Data" },
    { name: "billPay", label: "Bill Pay" },
    { name: "fundTransfer", label: "Fund Transfer" },
  ];
  const accountOptions = [
    { name: "", label: "" },
    { name: "debit", label: "Debit" },
    { name: "credit", label: "Credit" },
  ];
  const channelOptions = [
    { name: "", label: "" },
    { name: "api", label: "API" },
    { name: "portal", label: "Portal" },
  ];
  const successOptions = [
    { name: "", label: "" },
    { name: "yes", label: "Yes" },
    { name: "no", label: "No" },
  ];
  const responseCodeOptions = [
    { name: "", label: "" },
    { name: "rechargeComplete", label: "Recharge Complete" },
    { name: "rechargeFailed", label: "Recharge Failed" },
    { name: "operatorFailure", label: "Operator Failure" },
    { name: "operatorError", label: "Operator Error" },
    { name: "fraudPrevention", label: "Fraud Prevention" },
    { name: "unsupportedDenomination", label: "Unsupported Denomination" },
    { name: "msisdnNotPrepaid", label: "MSISDN Not Prepaid" },
    { name: "msisdnInvalid", label: "MSISDN Invalid" },
  ];

  return (
    <div className="pt-[2rem] flex flex-col bg-lightest-gray">
      <div
        className={`w-full bg-white z-50 py-10 flex flex-col justify-center items-center`}
      >
        <div className="h-full w-[76%] px-6">
          <p className="text-[1.125rem] font-semibold">Filtering Options</p>
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
              console.log(values);
              return (
                <Form className="mt-6 text-[0.75rem]">
                  <div className="flex justify-between gap-6">
                    <CalendarField
                      label="Start Date/Time"
                      labelClass="text-[0.75rem]"
                      name="startDate"
                      value={values.startDate}
                      htmlFor="startDate"
                      onChange={(startDate) =>
                        setFieldValue("startDate", startDate)
                      }
                      onSelect={(startDate) =>
                        setFieldValue("startDate", startDate)
                      }
                      handleBlur={() => setTouched({ startDate: true })}
                      error={errors.startDate && touched.startDate}
                    />
                    <CalendarField
                      label="End Date/Time"
                      labelClass="text-[0.75rem]"
                      name="endDate"
                      value={values.endDate}
                      htmlFor="endDate"
                      handleBlur={() => setTouched({ endDate: true })}
                      onChange={(endDate) => {
                        setFieldValue("endDate", endDate);
                        setTouched({ startDate: true });
                      }}
                      onSelect={(endDate) => {
                        setFieldValue("endDate", endDate);
                      }}
                      error={errors.endDate && touched.endDate}
                    />
                  </div>
                  <div className="flex justify-between gap-x-6 mt-7">
                    <SelectField
                      name="account"
                      value={values.account}
                      label="Account"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ account: true })}
                      error={errors.account && touched.account}
                    >
                      {accountOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                    <SelectField
                      name="type"
                      value={values.type}
                      label="Type"
                      placeholder="select type"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ type: true })}
                      error={errors.type && touched.type}
                    >
                      {typeOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                  </div>
                  <div className="flex justify-between gap-x-6 mt-7">
                    <SelectField
                      name="channel"
                      value={values.channel}
                      label="Channel"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ channel: true })}
                      error={errors.channel && touched.channel}
                    >
                      {channelOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                    <SelectField
                      name="responseCode"
                      value={values.responseCode}
                      label="Response Code"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ responseCode: true })}
                      error={errors.responseCode && touched.responseCode}
                    >
                      {responseCodeOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                  </div>

                  <div className="flex justify-between gap-x-6 mt-7">
                    <SelectField
                      name="success"
                      value={values.success}
                      label="Success"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ success: true })}
                      error={errors.success && touched.success}
                    >
                      {successOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                    <TextField
                      name="operatorReference"
                      value={values.operatorReference}
                      label="Operator Reference"
                      labelClass="text-[0.75rem]"
                      placeholder="Operator reference"
                      handleBlur={() => setTouched({ operatorReference: true })}
                      error={
                        errors.operatorReference && touched.operatorReference
                      }
                    />
                  </div>

                  <div className="flex justify-between gap-x-6 mt-7">
                    <TextField
                      name="target"
                      value={values.target}
                      label="Target"
                      labelClass="text-[0.75rem]"
                      placeholder="Target"
                      handleBlur={() => setTouched({ target: true })}
                      error={errors.target && touched.target}
                    />
                    <TextField
                      name="operatorName"
                      value={values.operatorName}
                      label="Operator Name"
                      labelClass="text-[0.75rem]"
                      placeholder="Wallet ID"
                      handleBlur={() => setTouched({ operatorName: true })}
                      error={errors.operatorName && touched.operatorName}
                    />
                  </div>

                  <div className="flex justify-between gap-x-6 mt-7">
                    <TextField
                      name="customerReference"
                      value={values.customerReference}
                      label="Customer Reference"
                      labelClass="text-[0.75rem]"
                      placeholder="Customer reference"
                      handleBlur={() => setTouched({ customerReference: true })}
                      error={
                        errors.customerReference && touched.customerReference
                      }
                    />
                    <TextField
                      name="systemReference"
                      value={values.systemReference}
                      label="System Reference"
                      labelClass="text-[0.75rem]"
                      placeholder="System reference"
                      handleBlur={() => setTouched({ customerRsystem: true })}
                      error={errors.systemReference && touched.systemReference}
                    />
                  </div>
                  <div className="flex justify-between mt-10">
                    <GrayButton
                      type="button"
                      title="Cancel"
                      className="w-[12rem]"
                    />
                    <PrimaryButton
                      type="submit"
                      title="Apply Filter"
                      className="w-[12rem]"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
