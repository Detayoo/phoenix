import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextField, CustomSelectField, FixedButton } from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { calculateAmount, ExchangeRate } from "../../../utils";
import { TransactionsModal } from "../../../modals";

const BillPay = () => {
  const [service, setService] = useState([]);
  const [provider, setProvider] = useState([]);
  const [type, setType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Question");
  const [initialAmount, setInitialAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();

  const initialValues = {
    service: "",
    serviceProvider: "",
    serviceType: "",
    cardNumber: "",
    topupAmount: "",
  };

  const validationSchema = Yup.object({
    service: Yup.string().required("Required"),
    serviceProvider: Yup.string().required("Required"),
    serviceType: Yup.string().required("Required"),
    cardNumber: Yup.string().required("Required"),
    topupAmount: Yup.string().required("Required"),
  });

  const serviceOptions = [
    {
      name: "Internet",
      logo: "/icons/internet-icon.svg",
    },
    {
      name: "Cable Tv",
      logo: "/icons/cable-tv-icon.svg",
    },
    {
      name: "Electricity",
      logo: "/icons/electricity-icon.svg",
    },
    {
      name: "Games",
      logo: "/icons/games-icon.svg",
    },
  ];

  const providerOptions = [
    {
      name: "Eko Electicity",
      logo: "/icons/eko-electricity-icon.svg",
    },

    {
      name: "Abuja Electicity",
      logo: "/icons/abuja-electricity-icon.svg",
    },

    {
      name: "Kaduna Electicity",
      logo: "/icons/kaduna-electricity-icon.svg",
    },
    {
      name: "Enugu Electicity",
      logo: "/icons/enugu-electricity-icon.svg",
    },
    {
      name: "Ikeja Electicity",
      logo: "/icons/ikeja-electricity-icon.svg",
    },
    {
      name: "Ibadan Electicity",
      logo: "/icons/ibadan-electricity-icon.svg",
    },
  ];

  const serviceTypeOptions = [
    {
      name: "Eko Electicity",
      logo: "/icons/eko-electricity-icon.svg",
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
        topup={service?.name}
        confirmationMessage={`You are about to transfer NGN ${initialAmount} for NGN ${finalAmount}`}
        successMessage={`You are about to transfer NGN ${initialAmount} for NGN ${finalAmount}`}
      />
      <PurchaseLayout
        action="Bills Payment"
        actionType="Pay your bills seamlessly"
        subtitle="Select one of the categories below"
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
              {({ values, setFieldValue, isValid, dirty }) => {
                const reducedAmount = calculateAmount(values.topupAmount);
                useEffect(() => {
                  if (service) {
                    setFieldValue("service", service.name);
                  }
                  if (provider) {
                    setFieldValue("serviceProvider", provider.name);
                  }
                  if (type) {
                    setFieldValue("serviceType", type.name);
                  }
                  setFinalAmount(reducedAmount.toLocaleString());
                  setInitialAmount(Number(values.topupAmount).toLocaleString());
                }, [
                  service,
                  provider,
                  type,
                  values.topupAmount,
                  reducedAmount,
                ]);
                return (
                  <Form className="flex flex-col gap-y-6">
                    <CustomSelectField
                      label="Select service"
                      selectedOption={service}
                      setSelectedOption={setService}
                      options={serviceOptions}
                      defaultPlaceholder="Select any service of your choice"
                      imageHeight={38}
                    />

                    <CustomSelectField
                      label="Select service provider"
                      selectedOption={provider}
                      setSelectedOption={setProvider}
                      options={providerOptions}
                      defaultPlaceholder="Select the provider of your choice"
                      imageHeight={38}
                    />
                    <CustomSelectField
                      label="Select service"
                      selectedOption={type}
                      setSelectedOption={setType}
                      options={serviceTypeOptions}
                      defaultPlaceholder="Select any service of your choice"
                      imageHeight={38}
                    />
                    <TextField
                      name="cardNumber"
                      value={values.cardNumber}
                      label="Card number"
                      placeholder="Enter your smartcard number"
                    />
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
                      title={`Purchase ${
                        values.topupAmount ? values.topupAmount : "0"
                      }.00 ${service ? service?.name : "7"} for NGN ${
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

export default BillPay;
