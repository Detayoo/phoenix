import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "./TextInput";
import { SelectField } from "./SelectField";
import { GrayButton, PrimaryButton } from "./Button";

export const BasicInfo = () => {
  const initialValues = {
    accountName: "",
    accountType: "",
    legalType: "",
    phoneNumber: "",
    email: "",
    smsSenderId: "",
    address: "",
    city: "",
    localGovernment: "",
    postCode: "",
    country: "",
  };

  const details = { name: "Papstra service limited", accountType: "Agent" };
  const [enableFirewall, setEnableFirewall] = useState(false);
  const [dailyReport, setDailyReport] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object({
    accountName: Yup.string().required("Required"),
    accountType: Yup.string().required("Required"),
    legalType: Yup.string().required("Legal type is required"),
    phoneNumber: Yup.string().required("Primary phone number"),
    email: Yup.string().email("Primary email address").required("Required"),
    senderId: Yup.string().required("Sender ID is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <div className="w-full flex justify-center items-center bg-white py-[3.25rem]">
      <div className="w-[80%]">
        <p className="text-[1.1rem] mb-1">General Properties</p>
        <hr className="mb-8 border-black/40" />
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
          {({ values, setFieldValue }) => {
            useEffect(() => {
              if (details) {
                setFieldValue("accountName", details.name);
                setFieldValue("accountType", details.accountType);
              }
            }, [details]);
            return (
              <Form className="flex flex-col gap-y-6">
                <div className="flex flex-wrap gap-6">
                  <TextField
                    name="accountName"
                    value={values.accountName}
                    label="Account name"
                    placeholder="Account name"
                    disabled={values.accountName}
                    textClass="text-black/40"
                    divClass="w-[48%]"
                  />

                  <TextField
                    name="accountType"
                    value={values.accountType}
                    label="Account Type"
                    placeholder="Account type"
                    disabled={values.accountType}
                    textClass="text-black/40"
                    divClass="w-[48%]"
                  />
                  {router.pathname.startsWith("/reseller") && (
                    <SelectField
                      name="legalType"
                      value={values.legalType}
                      label="Legal Type"
                      divClass="w-[48%]"
                    >
                      <option value="">
                        Type of legal body (company or individual)
                      </option>
                      <option value="company">Company</option>
                    </SelectField>
                  )}

                  <TextField
                    name="phoneNumber"
                    value={values.phoneNumber}
                    label="Phone number"
                    placeholder="Enter your phone number"
                    divClass="w-[48%]"
                  />
                  <TextField
                    name="email"
                    value={values.email}
                    label="Email"
                    placeholder="Enter your email address"
                    divClass="w-[48%]"
                  />
                  <TextField
                    name="smsSenderId"
                    value={values.smsSenderId}
                    label="SMS Sender ID"
                    placeholder="Enter your SMS SenderID"
                    divClass="w-[48%]"
                  />
                  <div className="flex items-center gap-x-7 mt-3">
                    <p className="text-sm text-right">Requires daily report?</p>
                    <Image
                      onClick={() => setDailyReport(!dailyReport)}
                      className="cursor-pointer transition ease-in-out duration-1000"
                      src={
                        dailyReport
                          ? "/icons/active-toggle.svg"
                          : "/icons/inactive-toggle.svg"
                      }
                      width={64}
                      height={30}
                    />
                  </div>
                </div>

                {router.pathname.startsWith("/reseller") && (
                  <>
                    <div className="mt-6">
                      <p className="text-[1.1rem] mb-[0.65rem]">
                        Address Information
                      </p>
                      <hr className="mb-5 border-black/40" />
                    </div>
                    <div className="flex flex-wrap gap-6">
                      <TextField
                        name="address"
                        value={values.address}
                        label="Address"
                        placeholder="Enter your address"
                        divClass="w-[48%]"
                      />

                      <TextField
                        name="city"
                        value={values.city}
                        label="City"
                        placeholder="Enter your city"
                        divClass="w-[48%]"
                      />

                      <TextField
                        name="localGovernment"
                        value={values.localGovernment}
                        label="Local Government"
                        placeholder="Enter your Local Government"
                        divClass="w-[48%]"
                      />

                      <TextField
                        name="postCode"
                        value={values.postCode}
                        label="Postcode"
                        placeholder="Enter your postcode"
                        divClass="w-[48%]"
                      />

                      <TextField
                        name="country"
                        value={values.country}
                        label="Country"
                        placeholder="Enter your country"
                        divClass="w-[48%]"
                      />
                    </div>
                  </>
                )}

                <div className="mt-6">
                  <p className="text-[1.1rem] mb-[0.65rem]">
                    Application Firewall
                  </p>
                  <hr className="mb-5 border-black/40" />
                </div>

                <div className="pl-7">
                  <div className="flex items-center gap-x-7">
                    <p className="text-sm text-right">
                      Enable application <br /> firewall?
                    </p>
                    <Image
                      onClick={() => setEnableFirewall(!enableFirewall)}
                      className="cursor-pointer transition ease-in-out duration-1000"
                      src={
                        enableFirewall
                          ? "/icons/active-toggle.svg"
                          : "/icons/inactive-toggle.svg"
                      }
                      width={64}
                      height={30}
                    />
                  </div>
                  <div className="mt-7 text-sm flex gap-x-7">
                    <p className="ml-4">Whitelisted IP's:</p>{" "}
                    <p className="text-primary-red underline">Add</p>
                  </div>

                  <div className="flex justify-end mr-7 gap-x-3">
                    <GrayButton title="Save Changes" type="submit" />
                    <PrimaryButton title="Reset" type="reset" />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
