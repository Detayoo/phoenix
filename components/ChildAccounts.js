import { useState } from "react";
import Image from "next/image";
import router from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { PrimaryButton, GrayButton } from "./Button";
import { TextField } from "./TextInput";
import { SelectField } from "./SelectField";
import { isEven } from "../utils";

export const ChildAccounts = ({ childAccountSetting, setShowModal }) => {
  const initialValues = {
    accountName: "",
    accountType: "",
    legalType: "",
    phoneNumber: "",
    address: "",
    city: "",
    localGovernment: "",
    postCode: "",
    country: "",
  };
  const validationSchema = Yup.object({
    accountName: Yup.string().required("Required"),
    accountType: Yup.string().required("Required"),
    legalType: Yup.string().required("Legal type is required"),
    phoneNumber: Yup.string().required("Primary phone number"),
    email: Yup.string().email("Primary email address").required("Required"),
    senderId: Yup.string().required("Sender ID is required"),
    address: Yup.string().required("Address is required"),
  });
  const data = [
    {
      id: 1,
      accountName: "Kunle Test Agent",
      legalType: "Company",
      type: "Agent",
      status: "Active",
    },
    {
      id: 2,
      accountName: "Tayo Test Agent",
      legalType: "Company",
      type: "Agent",
      status: "Active",
    },
  ];
  const [accountInfo, setAccountInfo] = useState({});
  const initiateTransfer = (client) => {
    setAccountInfo(client);
    setShowModal(true);
  };

  const [usersList, setUsersList] = useState(data);
  const [search, setSearch] = useState("");
  const users = usersList?.filter((user) => {
    return (
      user?.accountName
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      user?.legalType.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });
  const [canEditACL, setCanEditACL] = useState(false);
  const deleteUser = (id) => {
    const newUserList = usersList?.filter((user) => id !== user.id);
    setUsersList(newUserList);
  };

  const listAccounts = () => {
    return (
      <>
        <div className=""></div>
        <div className="w-full bg-white pt-6">
          <form className="flex w-full px-7 items-center">
            <div className="flex flex-1 items-center pl-2 h-9 border rounded-l-[3px] gap-x-3">
              <Image src="/icons/search-icon.svg" width={24} height={24} />
              <input
                className="flex-1 h-full outline-none text-sm placeholder:text-sm placeholder:text-black/50 placeholder:font-normal"
                placeholder="search user by account name or legal type"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <PrimaryButton
              title="Search"
              className="h-[2.25rem] w-36 rounded-l-none font-normal"
            />
          </form>

          <div className="bg-usage-bg h-11 mt-6 px-7 text-sm flex items-center">
            <p className="w-[25.5%]">Account Name</p>
            <p className="w-[21%]">Legal Type</p>
            <p className="w-[20%]">Type</p>
            <p>Status</p>
          </div>

          {users?.map((user) => {
            const { accountName, legalType, type, status, id } = user;
            return (
              <div
                key={id}
                className={`h-12 px-7 text-[0.82rem] flex items-center ${
                  isEven(id) ? "bg-white" : "bg-lightest-gray"
                } `}
              >
                <p className="w-[25.5%]">{accountName}</p>
                <p className="w-[21%]">{legalType}</p>
                <p className="w-[20%]">{type}</p>
                <p
                  className={`w-[8%] py-1 flex items-center justify-center rounded-sm text-white ${
                    status === "Active"
                      ? "bg-exchange-rate-text"
                      : "bg-black/40"
                  } `}
                >
                  {status}
                </p>
                <div className="flex-1 flex items-center gap-x-4 ml-28 2xl:ml-48">
                  <Image
                    onClick={() => initiateTransfer(user)}
                    src="/icons/fund-transfer.svg"
                    width={35}
                    height={35}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/icons/edit-icon.svg"
                    width={22}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    onClick={() => deleteUser(id)}
                    src="/icons/delete-icon.svg"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const addAccount = () => {
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
            {({ values }) => {
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

                    <div className="flex gap-x-7 mt-4">
                      <p className="text-sm text-right">
                        Can edit his own ACL?
                      </p>
                      <Image
                        onClick={() => setCanEditACL(!canEditACL)}
                        className="cursor-pointer transition ease-in-out duration-1000"
                        src={
                          canEditACL
                            ? "/icons/active-toggle.svg"
                            : "/icons/inactive-toggle.svg"
                        }
                        width={64}
                        height={30}
                      />
                    </div>
                  </div>

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

                  <div className="flex justify-end items-center gap-x-7">
                    <div className="flex mr-7 gap-x-3">
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

  const renderPage = () => {
    if (childAccountSetting === "list-accounts") {
      return listAccounts();
    } else return addAccount();
  };

  return renderPage();
};
