import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  TextField,
  CustomSelectField,
  TextArea,
  FixedButton,
  PrimaryButton,
  OtherButton,
  WhiteLoader,
} from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { calculateAmount } from "../../../utils";
import { TransactionsModal } from "../../../modals";

const BuyData = () => {
  const [network, setNetwork] = useState([]);
  const [pickNetwork, setPickNetwork] = useState(false);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Question");
  const [initialAmount, setInitialAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    phoneNumber: "",
    networkProvider: "",
    dataPackage: "",
    SMS: "",
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Required")
      .min(10, "Phone number is too short"),
    networkProvider: Yup.string().required("Required"),
    dataPackage: Yup.string().required("Required"),
  });

  const dataPackageOptions = [
    {
      name: "100MB",
      slogan: "Validity data plan 100mb for 1day",
      logo: "/icons/mtn-logo.svg",
      price: "N97.00",
    },
    {
      name: "200MB",
      slogan: "Validity data plan 200mb for 2-days",
      logo: "/icons/mtn-logo.svg",
      price: "NGN213.00",
    },
  ];

  const networkProviderOptions = [
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
        topup="Airtime"
        confirmationMessage={`You are about to buy ${initialAmount} data top up for NGN ${finalAmount}`}
        successMessage={`You just bought ${initialAmount} data topup for NGN ${finalAmount}`}
      />
      <PurchaseLayout
        action="Buy Data"
        actionType="Data Recharge"
        subtitle="Provide the following requirements to purchase data"
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
              {({ values, errors, setFieldValue, isValid, dirty }) => {
                const reducedAmount = calculateAmount(
                  values?.dataPackage?.slice(0, -2)
                );

                useEffect(() => {
                  if (network) {
                    setFieldValue("networkProvider", network?.name);
                  }
                  if (data) {
                    setFieldValue("dataPackage", data?.name);
                  }
                  setInitialAmount(values.dataPackage);
                  setFinalAmount(reducedAmount);
                }, [network, data, values.dataPackage, reducedAmount]);
                return (
                  <Form className="flex flex-col gap-y-6">
                    <div className="flex  gap-x-2">
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
                        selectedOption={network}
                        setSelectedOption={setNetwork}
                        options={networkProviderOptions}
                        defaultPlaceholder="Select network provider of your choice"
                      />
                    )}

                    <CustomSelectField
                      label="Data package"
                      selectedOption={data}
                      setSelectedOption={setData}
                      options={dataPackageOptions}
                      defaultPlaceholder="Select data package of your choice"
                      displayLogo={false}
                    />

                    <FixedButton
                      onClick={() => setShowModal(true)}
                      type="button"
                      title={`Purchase ${
                        values.dataPackage ? values.dataPackage : "0.00"
                      } data top up for NGN ${
                        reducedAmount ? reducedAmount : "0"
                      }.00 `}
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

export default BuyData;
