import { useState } from "react";
import Image from "next/image";

import { Pagination } from "../../../components";
import { PurchaseLayout } from "../../../layouts";
import { isEven } from "../../../utils";

const BackgroundJobs = () => {
  const data = [
    {
      id: 1,
      batchName: "NNPC",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 10,
    },
    {
      id: 2,
      batchName: "Toyota",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 40,
    },
    {
      id: 3,
      batchName: "NNPC",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 50,
    },
    {
      id: 4,
      batchName: "Toyota",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 30,
    },
    {
      id: 5,
      batchName: "NNPC",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 20,
    },
    {
      id: 6,
      batchName: "NNPC",
      uploadTime: "02-Sep-2022 02:20pm",
      numberOfTransactions: 100,
    },
  ];

  const bulkData = [
    {
      id: 1,
      phoneNumber: "08140809078",
      amount: "NGN100",
      referenceNumber: "123456",
    },
    {
      id: 2,
      phoneNumber: "08120709078",
      amount: "NGN200",
      referenceNumber: "734283",
    },
    {
      id: 3,
      phoneNumber: "08140880978",
      amount: "NGN300",
      referenceNumber: "235467",
    },
    {
      id: 4,
      phoneNumber: "08140809067",
      amount: "NGN200",
      referenceNumber: "273747",
    },
    {
      id: 5,
      phoneNumber: "08027800485",
      amount: "NGN500",
      referenceNumber: "834756",
    },
    {
      id: 6,
      phoneNumber: "08140809078",
      amount: "NGN1000",
      referenceNumber: "723838",
    },
  ];

  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  return (
    <PurchaseLayout
      action="Bulk Top up"
      actionType="Batched Job"
      subtitle="Below is the information from the csv file you saved"
      showBalance={false}
    >
      <div className="px-12 h-11 bg-usage-bg mt-16 mb-3 flex items-center text-sm">
        <p className="w-[25%]">Batch Name</p>
        <p className="w-[30%]">Uploaded Time</p>
        <p className="w-[30%]">Numbers of transaction record</p>
      </div>

      {data?.map((item) => {
        const { batchName, uploadTime, numberOfTransactions, id } = item;
        return (
          <div
            key={id}
            className={`${
              isEven(id) ? "bg-white" : "bg-[#fcfcfc]"
            } px-12 h-12 bg-usage-bg flex items-center text-black/70 text-sm`}
          >
            <p className="w-[25%]">{batchName}</p>
            <p className="w-[30%] text-[0.75rem]">{uploadTime}</p>
            <p className="w-[30%] text-[0.75rem]">{numberOfTransactions}</p>
            <div className="flex gap-x-7">
              <p className="underline decoration-black/70 cursor-pointer">
                View
              </p>
              <p className="text-primary-red underline decoration-primary-red cursor-pointer">
                Execute
              </p>
            </div>
          </div>
        );
      })}

      <div className="mt-20 bg-usage-bg h-20 flex flex-col justify-center pl-12 gap-y-1">
        <p className="font-semibold">Background Jobs</p>
        <p className="text-black/80 text-[0.75rem]">
          Here you can check your Background Jobs
        </p>
      </div>

      <div className="px-12 h-11 bg-usage-bg mt-16 flex items-center text-[0.8rem]">
        <p className="w-[20%]">Job ID</p>
        <p className="w-[20%]">Created On</p>
        <p className="w-[15%]">State</p>
        <p className="w-[18%]">Completed</p>
        <p className="w-[18%]">Requested by</p>
        <p className="flex-1">Finished On</p>
      </div>

      <div className="min-h-[320px] bg-white flex flex-col gap-y-4 justify-center items-center">
        <Image src="/icons/background-jobs-list.svg" width={60} height={60} />
        <p className="text-sm text-black/60">
          Your background jobs will show up here
        </p>
      </div>

      <Pagination
        array={data}
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        setItemOffset={setItemOffset}
        itemOffset={itemOffset}
        itemsPerPage={itemsPerPage}
      />
    </PurchaseLayout>
  );
};

export default BackgroundJobs;
