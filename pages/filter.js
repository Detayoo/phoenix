import { useState, useEffect } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { DashboardLayout, PurchaseLayout } from "../layouts";
import { isEven } from "../utils";
import { ModalContainer, PopupModal } from "../modals";
import {
  CalendarField,
  Pagination,
  SelectField,
  TextField,
  ModalInformation,
  GrayButton,
  PrimaryButton,
} from "../components";

const Filter = () => {
  const initialValues = {
    startDate: "",
    endDate: "",
    type: "",
    channel: "",
    success: "",
    responseCode: "",
    target: "",
    operatorName: "",
    customerReference: "",
    systemReference: "",
    operatorReference: "",
  };

  const validationSchema = Yup.object({
    // phoneNumber: Yup.string().required("Required"),
    // topupAmount: Yup.string().required("Required"),
    // networkProvider: Yup.string().required("Required"),
  });

  const typeOptions = [
    { name: "", label: "" },
    { name: "airtime", label: "Airtime" },
    { name: "data", label: "Data" },
    { name: "billPay", label: "Bill Pay" },
    { name: "fundTransfer", label: "Fund Transfer" },
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
    <>
      <PurchaseLayout
        // action={
        //   <PrimaryButton title="Back" image="/icon/left-arrow-icon.svg" className='order-1' />
        // }
        showBalance={false}
        showActionType={false}
      >
        <div className="pl-[2.25rem] pt-[2rem] pr-[2.4rem] flex flex-col bg-lightest-gray">
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
                {({ values, isValid, dirty, setFieldValue, setTouched }) => {
                  console.log(values.startDate)
                  return (
                    <Form className="mt-6 text-[0.75rem]">
                      <div className="flex justify-between items-center gap-x-6">
                        <CalendarField
                          label="Start Date/Time"
                          labelClass="text-[0.75rem]"
                          name="startDate"
                          value={values.startDate}
                          htmlFor="startDate"
                          // handleBlur={() =>
                          //   setFieldValue("startDate", values.startDate)
                          // }
                          onChange={(startDate) =>
                            setFieldValue("startDate", startDate)
                          }
                          onSelect={(startDate) =>
                            setFieldValue("startDate", startDate)
                          }
                          handleBlur={()=> setTouched({startDate: true})}
                        />
                        <CalendarField
                          label="End Date/Time"
                          labelClass="text-[0.75rem]"
                          name="endDate"
                          value={values.endDate}
                          htmlFor="endDate"
                          handleBlur={() =>
                            setFieldValue("endDate", values.endDate)
                          }
                          onChange={(endDate) =>
                            setFieldValue("endDate", endDate)
                          }
                          onSelect={(endDate) => {
                            setFieldValue("endDate", endDate);
                          }}
                        />
                      </div>
                      <div className="flex justify-between items-center gap-x-6 mt-3">
                        <SelectField
                          name="type"
                          value={values.type}
                          label="Type"
                          placeholder="select type"
                          labelClass="text-[0.75rem]"
                        >
                          {typeOptions?.map((option) => {
                            return (
                              <option key={option.name} value={option.name}>
                                {option.label}
                              </option>
                            );
                          })}
                        </SelectField>
                        <SelectField
                          name="channel"
                          value={values.channel}
                          label="Channel"
                          labelClass="text-[0.75rem]"
                        >
                          {channelOptions?.map((option) => {
                            return (
                              <option key={option.name} value={option.name}>
                                {option.label}
                              </option>
                            );
                          })}
                        </SelectField>
                      </div>
                      <div className="flex justify-between items-center gap-x-6 mt-3">
                        <SelectField
                          name="success"
                          value={values.success}
                          label="Success"
                          labelClass="text-[0.75rem]"
                        >
                          {successOptions?.map((option) => {
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
                          label="Response code"
                          htmlFor="responseCode"
                          labelClass="text-[0.75rem]"
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
                      <div className="flex justify-between items-center gap-x-6 mt-3">
                        <TextField
                          name="target"
                          value={values.target}
                          label="Target"
                          placeholder="Target MSISDN"
                          labelClass="text-[0.75rem]"
                        />
                        <TextField
                          name="operatorName"
                          value={values.operatorName}
                          label="Operator name"
                          placeholder="Operator Name"
                          labelClass="text-[0.75rem]"
                        />
                      </div>
                      <div className="flex justify-between items-center gap-x-6 mt-3">
                        <TextField
                          name="customerReference"
                          value={values.customerReference}
                          label="Customer Reference"
                          placeholder="Customer reference"
                          labelClass="text-[0.75rem]"
                        />
                        <TextField
                          name="systemReference"
                          value={values.systemReference}
                          label="System reference"
                          placeholder="System reference"
                          labelClass="text-[0.75rem]"
                        />
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <TextField
                          name="operatorReference"
                          value={values.operatorReference}
                          label="Operator Reference"
                          labelClass="text-[0.75rem]"
                          placeholder="Operator reference"
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
      </PurchaseLayout>
    </>
  );
};

export default Filter;
