import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  TextField,
  SelectField,
  TextArea,
  FixedButton,
} from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { TransactionsModal } from "../../../modals";

const FundTransfer = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Question");
  const [initialAmount, setInitialAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const initialValues = {
    bank: "",
    accountNumber: "",
    accountName: "",
    amount: "",
    description: "",
  };

  const validationSchema = Yup.object({
    bank: Yup.string().required("Required"),
    accountNumber: Yup.string().required("Required"),
    accountName: Yup.string().required("Required"),
    amount: Yup.string().required("Required"),
  });
  const transferFee = 20.0;

  return (
    <>
      <TransactionsModal
        showModal={showModal}
        setShowModal={setShowModal}
        status={status}
        setStatus={setStatus}
        initialValue={initialAmount}
        finalValue={finalAmount}
        type="single top up"
        confirmationMessage={`You are about to transfer NGN ${initialAmount} for NGN ${finalAmount}`}
        successMessage={`You are about to transfer NGN ${initialAmount} for NGN ${finalAmount}`}
        // topup="transfer"
      />
      <PurchaseLayout
        action="Fund Transfer"
        actionType="Send money through your account"
        subtitle="Secure and Seamlessly transfer money"
      >
        <div className="w-full flex justify-center items-center bg-white py-[4.25rem]">
          <div className="w-[58.6%]">
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
                const totalAmount = Number(values?.amount) + transferFee;
                useEffect(() => {
                  setInitialAmount(values.amount);
                  setFinalAmount(totalAmount);
                }, [values.amount, totalAmount]);
                return (
                  <Form className="flex flex-col gap-y-6">
                    <SelectField
                      label="Select bank"
                      name="bank"
                      value={values.bank}
                    >
                      <option value="">Select the bank of your choice</option>
                      <option value="gtb">Gtbank Plc</option>
                    </SelectField>
                    <TextField
                      name="accountNumber"
                      value={values.accountNumber}
                      label="Account number"
                      placeholder="Enter your account number"
                      maxLength={10}
                    />
                    {values.accountNumber.length == 10 && (
                      <>
                        <TextField
                          name="accountName"
                          value={values.accountName}
                          label="Account name"
                        />
                        <TextField
                          name="amount"
                          value={values.amount}
                          label="Amount(NGN)"
                          placeholder="NGN 0.00"
                        />
                        <p className="-mt-5 text-sm text-exchange-rate-text">
                          Transfer Fee: {transferFee}.00
                        </p>
                        <TextArea
                          name="description"
                          value={values.description}
                          label="Description (optional)"
                          placeholder="Description"
                          inputClass="h-28"
                        />
                      </>
                    )}
                    <FixedButton
                      onClick={() => setShowModal(true)}
                      type="button"
                      title={`Transfer ${
                        values.amount ? values.amount : "NGN0"
                      }.00 for NGN ${values.amount ? totalAmount : 0}.00 `}
                      disabled={!(isValid && dirty)}
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </PurchaseLayout>
    </>
  );
};

export default FundTransfer;
