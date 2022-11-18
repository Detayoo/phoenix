import { useState } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  TextField,
  GrayButton,
  OutlineButton,
  PrimaryButton,
} from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { isEven } from "../../../utils";

const BulkTopup = () => {
  const initialValues = {
    contactFile: "",
    batchNumber: "",
  };

  const validationSchema = Yup.object({
    // contactFile: Yup.string().required("Required"),
    batchNumber: Yup.string().required("Required"),
  });

  const data = [
    {
      id: 1,
      phoneNumber: "08140809078",
      amount: "NGN 100",
      referenceNumber: "123456",
    },
    {
      id: 2,
      phoneNumber: "09034958674",
      amount: "NGN 200",
      referenceNumber: "734283",
    },
    {
      id: 3,
      phoneNumber: "08102345686",
      amount: "NGN 300",
      referenceNumber: "235467",
    },
    {
      id: 4,
      phoneNumber: "08027800485",
      amount: "NGN 200",
      referenceNumber: "273747",
    },
    {
      id: 5,
      phoneNumber: "08140809078",
      amount: "NGN 500",
      referenceNumber: "834756",
    },
    {
      id: 6,
      phoneNumber: "08140809078",
      amount: "NGN 1000",
      referenceNumber: "723838",
    },
  ];

  const [fileData, setFileData] = useState(data);

  const handleDelete = (id) => {
    const newList = fileData.filter((list) => list.id !== id);
    setFileData(newList);
  };

  return (
    <PurchaseLayout
      action="Bulk Top up"
      actionType="Upload your files"
      subtitle="Files should be in CSV"
      showBalance={false}
    >
      <div className="w-full flex justify-center items-center bg-white pt-[4.25rem]">
        <div className="w-[58.6%] pb-20">
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
            {({ values, isValid, dirty }) => {
              return (
                <Form className="flex flex-col gap-y-6">
                  <div
                    className={`bg-light-gray mt-1 h-[350px] relative w-full flex items-center border border-[#BDBDBD] border-dashed border-spacing-4 rounded-[8px] ${
                      values.contactFile
                        ? "flex-col justify-center"
                        : "flex-col justify-around pt-9"
                    } `}
                  >
                    <Image
                      src={
                        values.contactFile
                          ? "/icons/file-uploaded-icon.svg"
                          : "/icons/folder-icon.svg"
                      }
                      alt="folder icon"
                      width={64}
                      height={64}
                      className=""
                    />
                    <p className="font-[500] mt-4">
                      {values.contactFile
                        ? "File Successfully Uploaded"
                        : "Import Your Contact File"}
                    </p>
                    <p className="text-[0.88rem] tracking-wide text-black/70 text-center mt-8 px-36 2xl:px-[32%]">
                      {values.contactFile
                        ? `Your csv file has been successfully  uploaded`
                        : `Every number needs to include a country code for a
                      successful import`}
                    </p>
                    {!values.contactFile && (
                      <>
                        <OutlineButton
                          title="Choose File"
                          className="border-[1px] border-black h-10 font-[700] mt-7"
                        />
                        <p className="text-sm text-black/60 mt-3">(CSV)</p>
                        <p className="absolute top-10"></p>
                        <TextField
                          type="file"
                          accept=".csv"
                          htmlFor="contactFile"
                          className="-mt-40 ml-40 opacity-0 w-[40%] cursor-pointer"
                          inputClass="bg-input-gray border-input-gray border-none"
                          name="contactFile"
                          value={values.contactFile}
                          // label="Batch Number"
                          placeholder="Enter the batch number for your file"
                        />
                      </>
                    )}
                  </div>
                  <TextField
                    name="batchNumber"
                    value={values.batchNumber}
                    label="Batch Number"
                    placeholder="Enter the batch number for your file"
                    divClass="mt-4"
                  />

                  <div className="bg-white flex items-end justify-end gap-x-7 h-[4.5rem] pb-1 sticky bottom-0 z-20">
                    <GrayButton
                      title="Save"
                      className="w-28 bg-[#CACACA] border-[#CACACA] text-black/100"
                      disabled={true}
                    />
                    <PrimaryButton
                      title="Execute Bulk Top up"
                      className="w-52"
                      disabled={!(isValid && dirty)}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>

          <div className="bg-white my-8 shadow-md pt-5">
            <div className="px-6">
              <p className="mt-1">CS FILE DATA</p>
              <p className="text-[0.75rem] text-black/70 tracking-wide mb-2">
                Below is the csv file that contains all the information needed.
              </p>
            </div>
            <div className="bg-usage-bg h-11 flex items-center px-6 text-sm mb-3">
              <p className="w-[29.3%]">Phone number</p>
              <p className="w-[24.2%]">Amount</p>
              <p className="w-[34%]">Reference number</p>
              <p>Actions</p>
            </div>
            {fileData.map((list) => {
              const { id, phoneNumber, amount, referenceNumber } = list;
              return (
                <div
                  key={id}
                  className={`h-12 flex items-center px-6 text-[0.8rem] text-black/70 ${
                    isEven(id) ? "bg-white" : "bg-lightest-gray"
                  } `}
                >
                  <p className="w-[29.3%]">{phoneNumber}</p>
                  <p className="w-[24.2%]">{amount}</p>
                  <p className="w-[34%]">{referenceNumber}</p>
                  <p
                    onClick={() => handleDelete(id)}
                    className="underline decoration-primary-red text-primary-red text-sm cursor-pointer"
                  >
                    Remove
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PurchaseLayout>
  );
};

export default BulkTopup;
