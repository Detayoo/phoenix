import { useState } from "react";
import { PrimaryButton, Tab, Account } from "../../components";
import { PurchaseLayout } from "../../layouts";
import { AddUserModal } from "../../modals";

const MyAccount = () => {
  const tabList = [
    {
      name: "Basic Info",
    },
    {
      name: "Users",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabList[0]?.name);
  const [showModal, setShowModal] = useState(false);
  const addUser = () => {
    if (activeTab === "Users") {
      setShowModal(true);
    }
  };

  return (
    <>
      <AddUserModal showModal={showModal} setShowModal={setShowModal} />
      <PurchaseLayout
        action="My Account"
        actionType={activeTab === "Basic Info" ? "BASIC INFO" : "USERS"}
        subtitle={
          activeTab === "Basic Info"
            ? "Papstra Service Limited #590993242"
            : "This contains information about the user"
        }
        showBalance={false}
        showButton={true}
        btn={<PrimaryButton title="New User" />}
        btnOnClick={addUser}
        tab={
          <Tab
            tabList={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        }
      >
        <Account activeTab={activeTab} />
      </PurchaseLayout>
    </>
  );
};

export default MyAccount;
