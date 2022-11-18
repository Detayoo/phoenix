import { BasicInfo } from "./BasicInfo";
import { Users } from "./Users";
import { ChildAccounts } from "./ChildAccounts";

export const Account = ({ activeTab, childAccountSetting, setShowModal }) => {
  const renderDetails = () => {
    if (activeTab === "Basic Info") {
      return <BasicInfo />;
    } else if (activeTab === "Users") {
      return <Users />;
    } else if (activeTab === "Child Accounts") {
      return (
        <ChildAccounts
          childAccountSetting={childAccountSetting}
          setShowModal={setShowModal}
        />
      );
    }
  };

  return renderDetails();
};
