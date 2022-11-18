import { useState } from "react";
import Image from "next/image";

import { PrimaryButton, LightButton, Pagination } from "../../components";
import { ResellerSubLayout } from "../../layouts";

const AccountList = () => {
  const data = [
    {
      id: 1,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Ademorin Test Agent",
      type: "Agent",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
    {
      id: 2,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Ayodele Test Agent",
      type: "Agent",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
    {
      id: 3,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Kunle Test Agent",
      type: "Agent",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
    {
      id: 4,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Ademorin Test Agent",
      type: "User",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
    {
      id: 5,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Ademorin Test Agent",
      type: "Agent",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
    {
      id: 6,
      createdAt: "Oct 30, 2022 08:16:57",
      accountName: "Ademorin Test Agent",
      type: "User",
      isActive: "Yes",
      testMode: "No",
      balance: "NGN 40,000.00",
      priceList: "Pricelist",
    },
  ];
  const [search, setSearch] = useState("");

  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const deleteUser = (id) => {
    const newUserList = currentItems?.filter((user) => id !== user.id);
    setCurrentItems(newUserList);
  };
  const itemsPerPage = 3;
  return (
    <ResellerSubLayout
      action="Accounts"
      tab="Here you can manage your accounts"
      hasSubtitle={false}
      showBalance={true}
      actionType="Account lists"
    >
      <div className="w-full bg-white pt-6">
        <div className="w-full px-7 flex items-center">
          <form className="flex gap-x-5 items-center w-full">
            <div className="flex flex-1 items-center pl-2 h-10  border rounded-[3px] gap-x-3">
              <input
                className="flex-1 h-full outline-none text-sm placeholder:text-sm placeholder:text-black/50 placeholder:font-normal"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="h-10 flex gap-x-4 items-center">
              <PrimaryButton
                title="Create Account"
                className="h-[2.45rem] font-normal"
              />
              <LightButton
                title="Download List"
                className="h-[2.45rem] font-normal"
              />
              <LightButton
                title="Filter"
                image
                src="/icons/red-filter.svg"
                className="h-[2.45rem] font-normal"
              />
            </div>
          </form>
        </div>
        <div className="bg-usage-bg h-11 mt-6 px-7 text-sm flex items-center">
          <p className="w-[16%]">Created at</p>
          <p className="w-[17%]">Account Name</p>
          <p className="w-[7.5%]">Type</p>
          <p className="w-[10%]">isActive?</p>
          <p className="w-[10%]">Test Mode</p>
          <p className="w-[14%]">Balance</p>
          <p className="w-[11%]">Pricelist</p>
          <p className="flex-1">Actions</p>
        </div>

        {currentItems?.map((user) => {
          const {
            createdAt,
            accountName,
            type,
            isActive,
            testMode,
            balance,
            priceList,
            id,
          } = user;
          return (
            <div
              key={id}
              className={`bg-lightest-gray h-12 px-7 text-[0.75rem] flex items-center`}
            >
              <p className="w-[16%]">{createdAt}</p>
              <p className="w-[17%] text-primary-red text-opacity-80">
                {accountName}
              </p>
              <p className="w-[7.5%]">{type}</p>
              <p className="w-[10%]">{isActive}</p>
              <p className="w-[10%]">{testMode}</p>
              <p className="w-[14%]">{balance}</p>
              <p className="w-[11%] text-primary-red text-opacity-80">
                {priceList}
              </p>
              <div className="flex-1 flex items-center gap-x-2">
                <Image
                  src="/icons/fund-transfer.svg"
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
                <Image
                  src="/icons/blue-edit-icon.svg"
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
                <Image
                  onClick={() => deleteUser(id)}
                  src="/icons/light-delete-icon.svg"
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
              </div>
            </div>
          );
        })}
        <Pagination
          array={data}
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          setItemOffset={setItemOffset}
          itemOffset={itemOffset}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </ResellerSubLayout>
  );
};

export default AccountList;
