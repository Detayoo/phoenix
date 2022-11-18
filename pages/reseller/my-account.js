import { useState } from "react";

import { PrimaryButton, Tab, Account } from "../../components";
import { ResellerSubLayout } from "../../layouts/ResellerSubLayout";
import { AddUserModal } from "../../modals";
import { FundTransferModal } from "../../modals";

const MyAccount = () => {
  const [childAccountSetting, setChildAccountSetting] =
    useState("list-accounts");

  const tabList = [
    {
      name: "Basic Info",
    },
    {
      name: "Users",
    },
    {
      name: "Child Accounts",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showTab, setShowTab] = useState(true);
  const [activeTab, setActiveTab] = useState(tabList[0]?.name || null);
  const handleBtnClick = () => {
    if (activeTab === "Child Accounts") {
      setChildAccountSetting("add-account");
      setShowTab(false);
    }
  };
  const addUser = () => {
    if (activeTab === "Users") {
      setShowModal(true);
    }
  };

  return (
    <>
      <FundTransferModal showModal={showModal} setShowModal={setShowModal} />
      <AddUserModal showModal={showModal} setShowModal={setShowModal} />
      <ResellerSubLayout
        action="My Account"
        actionType={
          activeTab === "Basic Info"
            ? "BASIC INFO"
            : childAccountSetting !== "list-accounts"
            ? "New Account"
            : "USERS"
        }
        subtitle={
          activeTab === "Basic Info"
            ? "Papstra Service Limited #590993242"
            : childAccountSetting !== "list-accounts"
            ? "You can add a new account here by filling the form below."
            : "This contains information about the user"
        }
        showBalance={false}
        showButton={true}
        btn={
          <PrimaryButton
            onClick={addUser}
            title={activeTab === "Child Accounts" ? "New Account" : "New User"}
          />
        }
        btnOnClick={handleBtnClick}
        tab={
          showTab ? (
            <Tab
              tabList={tabList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : null
        }
      >
        <Account
          activeTab={activeTab}
          setShowModal={setShowModal}
          childAccountSetting={childAccountSetting}
        />
      </ResellerSubLayout>
    </>
  );
};

export default MyAccount;
