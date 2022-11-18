import { useState, useEffect } from "react";
import Image from "next/image";

import { DashboardLayout } from "../../layouts";
import { isEven } from "../../utils";
import { ModalContainer, PopupModal } from "../../modals";
import {
  Pagination,
  ModalInformation,
  FilterTransactions,
} from "../../components";

const Transactions = () => {
  const data = [
    {
      id: "1",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f1018c90364c459791fb....",
      target: "0136027756",
      amount: "+NGN 5,000",
      type: "Credit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 45,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "2",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f2018c90364c459791fb....",
      target: "0136027756",
      amount: "-NGN 5,000",
      type: "Debit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 40,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "3",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f3018c90364c459791fb....",
      target: "0136027756",
      amount: "+NGN 5,000",
      type: "Credit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 45,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "4",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f4018c90364c459791fb....",
      target: "0136027756",
      amount: "-NGN 5,000",
      type: "Debit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 40,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "5",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f5018c90364c459791fb....",
      target: "0136027756",
      amount: "+NGN 5,000",
      type: "Credit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 45,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "6",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f6018c90364c459791fb....",
      target: "0136027756",
      amount: "-NGN 5,000",
      type: "Debit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 40,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "7",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f7018c90364c459791fb....",
      target: "0136027756",
      amount: "NGN 5,000",
      type: "Credit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 45,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "8",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f8018c90364c459791fb....",
      target: "0136027756",
      amount: "-NGN 5,000",
      type: "Debit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 40,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "9",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f9018c90364c459791fb....",
      target: "0136027756",
      amount: "NGN 5,000",
      type: "Credit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 45,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
    {
      id: "10",
      date: "02-Sep-2022 02:20pm",
      transactionId: "f2118c90364c459791fb....",
      target: "0136027756",
      amount: "-NGN 5,000",
      type: "Debit",
      walletId: "FSD0901124",
      balanceAfterTx: "NGN 40,000",
      source: "ePin Purchase",
      description: "Thank you",
    },
  ];
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState();
  const [showPopupModal, setShowPopupModal] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const transactionsList = () => {
    return (
      <div className="mt-6 shadow-md">
        <div className="bg-usage-bg h-11 w-full flex items-center text-sm pl-5">
          <p className="w-[17%]">Time</p>
          <p className="w-[19%]">Transaction ID</p>
          <p className="w-[11%]">Target</p>
          <p className="w-[14.5%]">Amount</p>
          <p className="w-[8.3%]">Type</p>
          <p className="w-[11.2%]">Wallet ID</p>
          <p>Balance After TX</p>
        </div>
        {currentItems?.map((list) => {
          const {
            id,
            date,
            transactionId,
            target,
            amount,
            type,
            walletId,
            balanceAfterTx,
          } = list;
          return (
            <div
              key={id}
              onClick={() => {
                setSelectedTransaction(list);
                setShowPopupModal(true);
              }}
              className={`h-12 w-full mt-2 flex items-center text-[0.75rem] pl-5 text-black/80 cursor-pointer ${
                isEven(id) ? "bg-white" : "bg-lightest-gray"
              }`}
            >
              <p className="w-[17%]">{date}</p>
              <p className="w-[19%]">{transactionId}</p>
              <p className="w-[11%]">{target}</p>
              <p
                className={`w-[14.5%] ${
                  type === "Credit" ? "text-primary-green" : "text-primary-red"
                } `}
              >
                {amount}
              </p>
              <p className="w-[8.3%]">{type}</p>
              <p className="w-[11.2%]">{walletId}</p>
              <p className="w-[14.5%]">{balanceAfterTx}</p>
              <Image src="/icons/eye-icon.svg" width={24} height={24} />
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
    );
  };

  const renderPageBody = () => {
    if (showFilter) {
      return <FilterTransactions />;
    } else return transactionsList();
  };

  return (
    <>
      <PopupModal
        showPopupModal={showPopupModal}
        setShowPopupModal={setShowPopupModal}
        selected={selectedTransaction}
        heading={false}
      >
        <ModalInformation
          className="mt-6"
          label="Transactions ID"
          item={selectedTransaction?.transactionId}
        />
        <ModalInformation label="Target" item={selectedTransaction?.target} />
        <ModalInformation
          label="Amount"
          item={selectedTransaction?.amount}
          itemClassName={`tracking-wider
            ${
              selectedTransaction?.type === "Credit"
                ? "text-primary-green"
                : "text-primary-red"
            }
          `}
        />
        <ModalContainer label="Type" item={selectedTransaction?.type} />
        <ModalInformation
          label="Wallet ID"
          item={selectedTransaction?.walletId}
        />
        <ModalInformation
          label="Balance After Transaction"
          item={selectedTransaction?.balanceAfterTx}
        />
        <ModalInformation label="Source" item={selectedTransaction?.source} />
        <ModalInformation
          label="Description"
          item={selectedTransaction?.description}
        />
      </PopupModal>
      <DashboardLayout>
        <div className="pl-[2.25rem] pr-[2.4rem] flex flex-col bg-lightest-gray">
          <div className="relative h-[6.25rem]">
            <div className="h-[6.25rem] w-full flex items-center justify-between bg-lightest-gray border-b sticky top-10 right-0 ">
              {showFilter ? (
                <div
                  onClick={() => setShowFilter(false)}
                  className="bg-usage-bg flex items-center py-3 px-4 rounded-[4px] gap-x-2 text-sm cursor-pointer"
                >
                  <Image
                    src="/icons/go-back-arrow.svg"
                    width={20}
                    height={10}
                  />
                  <p>Back</p>
                </div>
              ) : (
                <p className="text-2xl">Transactions</p>
              )}
              {!showFilter && (
                <div
                  onClick={() => setShowFilter(true)}
                  className="flex items-center bg-primary-red py-3 px-7 gap-x-3 rounded-[3px] cursor-pointer"
                >
                  <Image src="/icons/filter-icon.svg" width={24} height={24} />
                  <p className="text-white text-sm">Filter</p>
                </div>
              )}
            </div>
          </div>
          {renderPageBody()}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Transactions;
