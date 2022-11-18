import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { PrimaryButton, GrayButton } from "./Button";
import { PurchaseLayout } from "../layouts";
import { SelectField } from "./SelectField";
import { TextField, CalendarField } from "./TextInput";

export const FilterTransactions = () => {
  const initialValues = {
    startDate: "",
    endDate: "",
    type: "",
    source: "",
    walletId: "",
    target: "",
    transactionsId: "",
  };

  const validationSchema = Yup.object({
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    source: Yup.string().required("Required"),
    walletId: Yup.string().required("Required"),
    target: Yup.string().required("Required"),
    transactionsId: Yup.string().required("Required"),
  });

  const typeOptions = [
    { name: "", label: "" },
    { name: "debit", label: "Debit" },
    { name: "credit", label: "Credit" },
  ];

  const sourceOptions = [
    { name: "", label: "" },
    { name: "affiliateSystem", label: "Affiliate system" },
    { name: "ePinPurchase", label: "ePin purchase" },
    { name: "refundSystem", label: "Refund system" },
    { name: "system", label: "System" },
    { name: "topupRequest", label: "Topup Request" },
    { name: "systemTopup", label: "System topup" },
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
                    <SelectField
                      name="source"
                      value={values.source}
                      label="Source"
                      labelClass="text-[0.75rem]"
                      handleBlur={() => setTouched({ source: true })}
                      error={errors.source && touched.source}
                    >
                      {sourceOptions?.map((option) => {
                        return (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        );
                      })}
                    </SelectField>
                  </div>
                  <div className="flex justify-between gap-x-6 mt-7">
                    <TextField
                      name="walletId"
                      value={values.walletId}
                      label="Wallet ID"
                      labelClass="text-[0.75rem]"
                      placeholder="Wallet ID"
                      handleBlur={() => setTouched({ walletId: true })}
                      error={errors.walletId && touched.walletId}
                    />

                    <TextField
                      name="target"
                      value={values.target}
                      label="Target"
                      labelClass="text-[0.75rem]"
                      placeholder="Target"
                      handleBlur={() => setTouched({ target: true })}
                      error={errors.target && touched.target}
                    />
                  </div>

                  <div className="flex justify-between mt-7">
                    <TextField
                      name="transactionsId"
                      value={values.transactionsId}
                      label="Transactions ID"
                      labelClass="text-[0.75rem]"
                      placeholder="Transactions ID"
                      handleBlur={() => setTouched({ transactionsId: true })}
                      error={errors.transactionsId && touched.transactionsId}
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
