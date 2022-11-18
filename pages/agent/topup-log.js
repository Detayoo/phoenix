import { useState, useEffect } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { DashboardLayout } from "../../layouts";
import { isEven } from "../../utils";
import { ModalContainer, PopupModal } from "../../modals";
import { FilterTopupLog } from "../../components";
import {
  CalendarField,
  Pagination,
  SelectField,
  TextField,
  ModalInformation,
} from "../../components";
const TopUpLog = () => {
  const data = [
    {
      id: "1",
      date: "02-Sep-2022 02:20pm",
      target: "08140809078",
      transactionType: "Airtime",
      operatorName: "MTN",
      amount: "NGN 5,000",
      successful: "Yes",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Complete",
      systemReference: "R123e4567e89b12d3a4564266141",
      customerReference: "R123e4567e89b12d3a4564266141",
      operatorReference: "R123e4567e89b12d3a4564266141",
    },
    {
      id: "2",
      date: "02-Sep-2022 02:20pm",
      target: "2345233556782",
      transactionType: "Bill Pay",
      operatorName: "EKEDC",
      amount: "NGN 5,000",
      successful: "No",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Inomplete",
      systemReference: "R123e4567e89b12d3a4564266142",
      customerReference: "R123e4567e89b12d3a4564266142",
      operatorReference: "R123e4567e89b12d3a4564266142",
    },
    {
      id: "3",
      date: "02-Sep-2022 02:20pm",
      target: "08140809078",
      transactionType: "Airtime",
      operatorName: "MTN",
      amount: "NGN 5,000",
      successful: "Yes",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Complete",
      systemReference: "R123e4567e89b12d3a4564266143",
      customerReference: "R123e4567e89b12d3a4564266143",
      operatorReference: "R123e4567e89b12d3a4564266143",
    },
    {
      id: "4",
      date: "02-Sep-2022 02:20pm",
      target: "2345233556782",
      transactionType: "Bill Pay",
      operatorName: "EKEDC",
      amount: "NGN 5,000",
      successful: "No",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Incomplete",
      systemReference: "R123e4567e89b12d3a4564266144",
      customerReference: "R123e4567e89b12d3a4564266144",
      operatorReference: "R123e4567e89b12d3a4564266144",
    },
    {
      id: "5",
      date: "02-Sep-2022 02:20pm",
      target: "08140809078",
      transactionType: "Airtime",
      operatorName: "MTN",
      amount: "NGN 5,000",
      successful: "Yes",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Complete",
      systemReference: "R123e4567e89b12d3a4564266145",
      customerReference: "R123e4567e89b12d3a4564266145",
      operatorReference: "R123e4567e89b12d3a4564266145",
    },
    {
      id: "6",
      date: "02-Sep-2022 02:20pm",
      target: "2345233556782",
      transactionType: "Bill Pay",
      operatorName: "EKEDC",
      amount: "NGN 5,000",
      successful: "No",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Incomplete",
      systemReference: "R123e4567e89b12d3a4564266146",
      customerReference: "R123e4567e89b12d3a4564266146",
      operatorReference: "R123e4567e89b12d3a4564266146",
    },
    {
      id: "7",
      date: "02-Sep-2022 02:20pm",
      target: "2345233556782",
      transactionType: "Bill Pay",
      operatorName: "EKEDC",
      amount: "NGN 5,000",
      successful: "No",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Incomplete",
      systemReference: "R123e4567e89b12d3a4564266147",
      customerReference: "R123e4567e89b12d3a4564266147",
      operatorReference: "R123e4567e89b12d3a4564266147",
    },
    {
      id: "8",
      date: "02-Sep-2022 02:20pm",
      target: "08140809078",
      transactionType: "Airtime",
      operatorName: "MTN",
      amount: "NGN 5,000",
      successful: "Yes",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Complete",
      systemReference: "R123e4567e89b12d3a4564266148",
      customerReference: "R123e4567e89b12d3a4564266148",
      operatorReference: "R123e4567e89b12d3a4564266148",
    },
    {
      id: "9",
      date: "02-Sep-2022 02:20pm",
      target: "2345233556782",
      transactionType: "Bill Pay",
      operatorName: "EKEDC",
      amount: "NGN 5,000",
      successful: "No",
      completedIn: "09:41PM",
      channel: "API",
      responseCode: "Recharge Incomplete",
      systemReference: "R123e4567e89b12d3a4564266149",
      customerReference: "R123e4567e89b12d3a4564266149",
      operatorReference: "R123e4567e89b12d3a4564266149",
    },
  ];

  const [selectedTopUp, setSelectedTopUp] = useState();
  const [showPopupModal, setShowPopupModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

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

  const [showFilter, setShowFilter] = useState(false);
  const logList = () => {
    return (
      <div className="mt-6 shadow-md">
        <div className="bg-usage-bg h-11 w-full flex items-center text-sm pl-5">
          <p className="w-[18.5%]">Time</p>
          <p className="w-[15%]">Target</p>
          <p className="w-[9%]">Type</p>
          <p className="w-[15.4%]">Operator Name</p>
          <p className="w-[12.5%]">Amount</p>
          <p className="w-[14%]">Successful</p>
          <p>Completed In</p>
        </div>
        {currentItems?.map((list) => {
          const {
            id,
            date,
            target,
            transactionType,
            operatorName,
            amount,
            successful,
            completedIn,
          } = list;
          return (
            <div
              key={id}
              onClick={() => {
                setSelectedTopUp(list);
                setShowPopupModal(true);
              }}
              className={`h-12 w-full mt-2 flex items-center text-[0.8rem] pl-5 text-black/80 cursor-pointer ${
                isEven(id) ? "bg-white" : "bg-lightest-gray"
              }`}
            >
              <p className="w-[18.5%]">{date}</p>
              <p className="w-[15%]">{target}</p>
              <p className="w-[9%]">{transactionType}</p>
              <p className="w-[15.4%]">{operatorName}</p>
              <p className="w-[12.5%]">{amount}</p>
              <p
                className={`w-[14%] ${
                  successful === "Yes"
                    ? "text-primary-green"
                    : "text-primary-red"
                } `}
              >
                {successful}
              </p>
              <p className="w-[11.5%]">{completedIn}</p>
              <Image src="/icons/eye-icon.svg" width={24} height={24} />
            </div>
          );
        })}

        <Pagination
          array={data}
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
          itemsPerPage={itemsPerPage}
        />
      </div>
    );
  };

  const renderPageBody = () => {
    if (showFilter) {
      return <FilterTopupLog />;
    } else return logList();
  };

  return (
    <>
      <ModalContainer
        showModal={filterModal}
        setShowModal={setFilterModal}
        className={`absolute top-0 right-0 w-full h-screen flex justify-center items-center z-50  `}
      >
        <div
          className={`min-h-[98%] w-[550px] bg-white z-50 rounded-[10px] flex flex-col justify-center items-center relative overflow-y-auto`}
        >
          <div className="h-full w-4/5 px-6">
            <p className="text-[1.125rem]">Filter Options</p>
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
              {({ values, isValid, dirty, setFieldValue }) => {
                return (
                  <Form className="mt-6 text-[0.75rem]">
                    <div className="flex justify-between items-center gap-x-3">
                      <CalendarField
                        label="Start Date/Time"
                        labelClass="text-[0.75rem]"
                        name="startDate"
                        value={values.startDate}
                        htmlFor="startDate"
                        handleBlur={() =>
                          setFieldValue("startDate", values.startDate)
                        }
                        onChange={() =>
                          setFieldValue("startDate", values.startDate)
                        }
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
                        onChange={() =>
                          setFieldValue("endDate", values.endDate)
                        }
                      />
                    </div>
                    <div className="flex justify-between items-center gap-x-3 mt-3">
                      <SelectField
                        name="type"
                        value={values.type}
                        label="Type"
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
                    <div className="flex justify-between items-center gap-x-3 mt-3">
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
                    <div className="flex justify-between items-center gap-x-3 mt-3">
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
                    <div className="flex justify-between items-center gap-x-3 mt-3">
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
                    <div className="flex justify-between items-center gap-x-3 mt-3">
                      <TextField
                        name="operatorReference"
                        value={values.operatorReference}
                        label="Operator Reference"
                        labelClass="text-[0.75rem]"
                        placeholder="Operator reference"
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ModalContainer>
      <PopupModal
        showPopupModal={showPopupModal}
        setShowPopupModal={setShowPopupModal}
        selected={selectedTopUp}
      >
        <ModalInformation
          className="mt-8"
          label="Successful"
          itemClassName={
            selectedTopUp?.successful === "Yes"
              ? "text-primary-green"
              : "text-primary-red"
          }
          item={selectedTopUp?.successful}
        />
        <ModalInformation label="Target" item={selectedTopUp?.target} />
        <ModalInformation label="Type" item={selectedTopUp?.transactionType} />
        <ModalContainer
          label="Operator name"
          item={selectedTopUp?.operatorName + " Nigeria"}
        />
        <ModalInformation label="Channel" item={selectedTopUp?.channel} />
        <ModalInformation
          label="Completed In"
          item={selectedTopUp?.completedIn}
        />
        <ModalInformation
          label="Response Code"
          item={selectedTopUp?.responseCode}
        />
        <ModalInformation
          label="System Reference"
          item={selectedTopUp?.systemReference}
        />
        <ModalInformation
          label="Customer Reference"
          item={selectedTopUp?.customerReference}
        />
        <ModalInformation
          label="Operator Reference"
          item={selectedTopUp?.operatorReference}
        />
      </PopupModal>
      <DashboardLayout>
        <div className="pl-[2.25rem] pr-[2.4rem] flex flex-col bg-lightest-gray">
          <div className="h-[6.25rem] w-full flex items-center justify-between bg-lightest-gray border-b sticky top-0 right-0">
            {showFilter ? (
              <div
                onClick={() => setShowFilter(false)}
                className="bg-usage-bg flex items-center py-3 px-4 rounded-[4px] gap-x-2 text-sm cursor-pointer"
              >
                <Image src="/icons/go-back-arrow.svg" width={20} height={10} />
                <p>Back</p>
              </div>
            ) : (
              <div>
                <p className="text-2xl">Top Ups</p>
                <p className="text-[0.82rem] text-black/70 mt-2 mb-2">
                  Here you can check your Top up logs
                </p>
              </div>
            )}

            {!showFilter && (
              <div
                onClick={() => setShowFilter(true)}
                // onClick={() => setFilterModal(true)}
                className="flex items-center bg-primary-red py-3 px-7 gap-x-3 rounded-[3px] cursor-pointer"
              >
                <Image src="/icons/filter-icon.svg" width={24} height={24} />
                <p className="text-white text-sm">Filter</p>
              </div>
            )}
          </div>

          {renderPageBody()}
        </div>
      </DashboardLayout>
    </>
  );
};

export default TopUpLog;
