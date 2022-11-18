import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  TextField,
  TextArea,
  PrimaryButton,
  WhiteLoader,
  OtherButton,
  CustomSelectField,
  FixedButton,
} from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { TransactionsModal } from "../../../modals";
import { calculateAmount, ExchangeRate } from "../../../utils";

const BuyAirtime = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Question");
  const [initialAmount, setInitialAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [pickNetwork, setPickNetwork] = useState(false);
  const initialValues = {
    phoneNumber: "",
    networkProvider: "",
    topupAmount: "",
    SMS: "",
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Required")
      .min(10, "Phone number is too short"),
    topupAmount: Yup.string().required("Required"),
    networkProvider: Yup.string().required("Required"),
  });

  const options = [
    {
      name: "MTN Network",
      slogan: "Everywhere you go",
      logo: "/icons/mtn-logo.svg",
    },
    {
      name: "Glo Network",
      slogan: "Rule your world",
      logo: "/icons/glo-logo.svg",
    },
    {
      name: "Airtel Network",
      slogan: "The smartphone network",
      logo: "/icons/airtel-logo.svg",
    },
    {
      name: "9mobile Network",
      slogan: "Here for you, Here for Naija",
      logo: "/icons/9mobile-logo.svg",
    },
  ];
  const renderAirtimePurchase = () => {
    return (
      <div className="">
        <TransactionsModal
          showModal={showModal}
          setShowModal={setShowModal}
          status={status}
          setStatus={setStatus}
          initialValue={initialAmount}
          finalValue={finalAmount}
          type="single top up"
          topup="Airtime"
          confirmationMessage={`You are about to buy NGN ${initialAmount} airtime top up for NGN ${finalAmount}`}
          successMessage={`You just bought NGN ${initialAmount} airtime topup for NGN ${finalAmount}`}
        />
        <PurchaseLayout
          action="Buy Airtime"
          actionType="Airtime Recharge"
          subtitle="Provide the following requirements to purchase airtime"
        >
          <div className="w-full flex justify-center items-center bg-white pt-[4.25rem]">
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
                {({ values, errors, isValid, dirty, setFieldValue }) => {
                  const reducedAmount = calculateAmount(values.topupAmount);
                  useEffect(() => {
                    if (selectedOption) {
                      setFieldValue("networkProvider", selectedOption?.name);
                    }
                    setInitialAmount(
                      Number(values.topupAmount).toLocaleString()
                    );
                    setFinalAmount(reducedAmount.toLocaleString());
                  }, [selectedOption, reducedAmount, values.topupAmount]);
                  return (
                    <Form className="flex flex-col gap-y-6">
                      <div className="flex gap-x-2">
                        <TextField
                          name="phoneNumber"
                          value={values.phoneNumber}
                          label="Phone number"
                          placeholder="Enter your phone number"
                        />

                        <PrimaryButton
                          disabled={errors.phoneNumber}
                          onClick={() => setLoading(true)}
                          title={loading ? <WhiteLoader /> : "Validate"}
                          type="button"
                          className="self-end h-[2.8rem] bg-primary-red text-white"
                        />
                      </div>

                      <p
                        onClick={() => setPickNetwork(true)}
                        className="-mt-4 text-exchange-rate-text font-medium text-sm underline decoration-exchange-rate-text underline-offset-3 cursor-pointer"
                      >
                        Not the right telecos?
                      </p>

                      {pickNetwork && (
                        <CustomSelectField
                          label="Network provider"
                          selectedOption={selectedOption}
                          setSelectedOption={setSelectedOption}
                          options={options}
                          defaultPlaceholder="Select network provider of your choice"
                        />
                      )}

                      <TextField
                        name="topupAmount"
                        value={values.topupAmount}
                        label="Top up amount"
                        placeholder="Enter top up amount"
                      />

                      <ExchangeRate />

                      <FixedButton
                        onClick={() => setShowModal(true)}
                        type="button"
                        title={`Purchase NGN ${
                          values.topupAmount ? values.topupAmount : "0"
                        }.00 top up for NGN ${reducedAmount}.00 `}
                        disabled={!(isValid && dirty)}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </PurchaseLayout>
      </div>
    );
  };

  return <>{renderAirtimePurchase()}</>;
};

export default BuyAirtime;
