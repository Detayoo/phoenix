import Image from "next/image";

import { UsageCard, Analytics } from "../../components";
import { ResellerDashboardLayout } from "../../layouts";
import { isEven } from "../../utils";

const Dashboard = () => {
  const productUsageData = [
    {
      id: 1,
      productType: "Airtime",
      amount: "NGN 50,000.00",
      count: "12",
    },
    {
      id: 2,
      productType: "Data",
      amount: "NGN 10,000.00",
      count: "125",
    },
    {
      id: 3,
      productType: "Bill Pay",
      amount: "NGN 50,000.00",
      count: "12",
    },
    {
      id: 4,
      productType: "Fund Transfer",
      amount: "NGN 10,000.00",
      count: "125",
    },
  ];

  const recentTransactionsData = [
    {
      id: 1,
      accountName: "FCMB",
      accountBalance: "NGN50,000,000.00",
      totalSuccessfulTransactions: "NGN5,000,000.00",
    },
    {
      id: 2,
      accountName: "GTBANK",
      accountBalance: "NGN10,000,000.00",
      totalSuccessfulTransactions: "NGN5,000,000.00",
    },
    {
      id: 3,
      accountName: "FIRSTBANK",
      accountBalance: "NGN50,000,000.00",
      totalSuccessfulTransactions: "NGN5,000,000.00",
    },
    {
      id: 4,
      accountName: "WEMA BANK",
      accountBalance: "NGN 10,000,000.00",
      totalSuccessfulTransactions: "NGN2,000,000.00",
    },
  ];

  const topPerformance = [
    {
      id: 1,
      productType: "Nigeria-MTN",
      amount: "NGN 36,326.786.42",
      count: "45,788",
    },
    {
      id: 2,
      productType: "Nigeria-Airtel",
      amount: "NGN 56,400.786.42",
      count: "16,257",
    },
    {
      id: 3,
      productType: "Nigeria-Globacom",
      amount: "NGN 56,400.786.42",
      count: "1,687",
    },
    {
      id: 4,
      productType: "Nigeria-9mobile",
      amount: "NGN 6,956.786.42",
      count: "139",
    },
    {
      id: 5,
      productType: "Nigeria-Globacom",
      amount: "NGN 36,326.786.42",
      count: "1,687",
    },
  ];

  return (
    <ResellerDashboardLayout>
      <div className="pl-[2.25rem] pr-[2.4rem] pb-[4rem] flex flex-col bg-lightest-gray">
        <Analytics>
          <div className="bg-white h-16 flex items-center gap-x-20 mt-4 mb-6 pl-12">
            <div className="flex items-center gap-x-3 text-2xl">
              <p className="text-white bg-primary-red py-1 px-3 rounded-[3px] mr-2">
                1
              </p>
              <Image src="/icons/agents-icon.svg" width={24} height={24} />
              <p>Agents</p>
            </div>
            <div className="flex items-center gap-x-3 text-2xl">
              <p className="text-white bg-primary-red py-1 px-3 rounded-[3px] mr-2">
                1
              </p>
              <Image src="/icons/users-icon.svg" width={24} height={24} />
              <p>Users</p>
            </div>
          </div>
        </Analytics>
        <div className="flex w-full gap-x-5 mt-9">
          <UsageCard
            title="Product Usage"
            subtitle="Below is an overview of the product usage in the 24 hours"
            className="w-[47.3%] h-[27.5rem]"
          >
            <div className="flex w-full h-11 items-center bg-usage-bg text-sm pl-5 text-left">
              <Image
                src="/icons/dashboard-box-icon.svg"
                width={25}
                height={25}
              />
              <p className="w-[31.5%] ml-6">Product Type</p>
              <p className="w-[37%]">Amount</p>
              <p className="flex-1 ml-1">Count</p>
            </div>
            <div className="mt-4">
              {productUsageData.map(({ productType, amount, count, id }) => (
                <div
                  key={id}
                  className={`flex w-full h-11 items-center bg-white text-sm pl-5 text-black/70 text-left mt-1 ${
                    isEven(id) ? "bg-white" : "bg-lightest-gray"
                  }  `}
                >
                  <Image
                    src="/icons/dashboard-box-icon.svg"
                    width={25}
                    height={25}
                  />
                  <p className="w-[31.5%] ml-6">{productType}</p>
                  <p className="w-[37%]">{amount}</p>
                  <p className="flex-1 ml-1">{count}</p>
                </div>
              ))}
            </div>
          </UsageCard>

          <UsageCard
            title="Recent Transactions"
            subtitle="Below is an overview of the recent transactions in the 24 hours"
            className="w-[47.3%] flex-1 flex flex-col"
          >
            <div className="flex w-full h-11 justify-center items-center gap-x-7 bg-usage-bg text-sm px-5 text-left">
              <p className="w-[28%]">Account Name</p>
              <p className="w-[33%]">Account Balance</p>
              <p className="flex-1">Total Successful Transactions</p>
            </div>

            <div className="mt-4">
              {recentTransactionsData?.map(
                ({
                  accountName,
                  accountBalance,
                  totalSuccessfulTransactions,
                  id,
                }) => (
                  <div
                    key={id}
                    className={`flex w-full h-11 items-center bg-white text-[0.75rem] pl-5 text-black/70 text-left mt-1 ${
                      isEven(id) ? "bg-white" : "bg-lightest-gray"
                    } `}
                  >
                    <p className="w-[31.5%]">{accountName}</p>
                    <p className="w-[37%]">{accountBalance}</p>
                    <p className="flex-1 ml-1">{totalSuccessfulTransactions}</p>
                  </div>
                )
              )}
            </div>
          </UsageCard>
        </div>

        <UsageCard
          title="Top Performance"
          subtitle="Below is an overview of the product top performance"
          className="w-full flex-1 flex flex-col mt-7"
        >
          <div className="flex w-full h-11 justify-center items-center gap-x-7 bg-usage-bg text-sm px-5 text-left">
            <Image src="/icons/dashboard-box-icon.svg" width={25} height={25} />
            <p className="w-[33%]">Account Name</p>
            <p className="w-[33%]">Account Balance</p>
            <p className="flex-1">Total Successful Transactions</p>
          </div>

          <div className="mt-4">
            {topPerformance?.map(({ productType, amount, count, id }) => (
              <div
                key={id}
                className={`flex w-full h-11 items-center gap-x-7 bg-white text-sm px-5 text-black/70 text-left mt-1 ${
                  isEven(id) ? "bg-white" : "bg-lightest-gray"
                } `}
              >
                <Image
                  src="/icons/dashboard-box-icon.svg"
                  width={25}
                  height={25}
                />
                <p className="w-[33%]">{productType}</p>
                <p className="w-[33%]">{amount}</p>
                <p className="flex-1">{count}</p>
              </div>
            ))}
          </div>
        </UsageCard>
      </div>
    </ResellerDashboardLayout>
  );
};

export default Dashboard;
