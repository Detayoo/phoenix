import Image from "next/image";

import { PrimaryButton, OutlineButton } from "../components";
import ModalContainer from "./ModalContainer";

export const Question = ({
  showModal,
  setShowModal,
  setStatus,
  initialValue,
  finalValue,
  type,
  topup,
  confirmationMessage,
}) => {
  return (
    <ModalContainer
      showModal={showModal}
      setShowModal={setShowModal}
      setStatus={setStatus}
      className={`absolute top-0 right-0 text-2xl w-full h-screen flex justify-center items-center z-50 `}
    >
      <div
        className={`h-[428px] w-[500px] bg-white z-50 flex flex-col justify-center items-center`}
      >
        <Image
          src="/icons/confirm-transaction.svg"
          alt="confirm transaction"
          width={112}
          height={100}
        />
        <p className="text-2xl font-semibold mt-7">Are you sure?</p>
        <div className="text-sm text-black/70 mt-7 px-4 text-center">
          {type === "single top up" ? (
            <>{confirmationMessage}</>
          ) : (
            "We are about to process your topup, should we go ahead? "
          )}
        </div>
        <div className="flex gap-x-10 mt-10">
          <OutlineButton
            onClick={() => setShowModal(false)}
            type="button"
            title="Cancel"
            className="bg-lighter-gray rounded-[3px]"
          />
          <PrimaryButton
            type="button"
            title="Yes, go ahead"
            className="rounded-[3px]"
            onClick={() => setStatus("Successful")}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export const SuccessfulTransaction = ({
  showModal,
  setShowModal,
  setStatus,
  initialValue,
  finalValue,
  successMessage,
}) => {
  return (
    <ModalContainer
      showModal={showModal}
      setShowModal={setShowModal}
      setStatus={setStatus}
      className={`absolute top-0 right-0 text-2xl w-full h-screen flex justify-center items-center z-50`}
    >
      <div
        className={`h-[440px] w-[500px] bg-white z-50 flex flex-col justify-center items-center`}
      >
        <Image
          src="/icons/thumbs-up.gif"
          alt="failed transaction"
          width={270}
          height={150}
        />
        <p className="text-2xl font-semibold mt-7">Successful</p>
        <div className="text-sm text-black/70 mt-7 px-20 text-center">
          {successMessage}
        </div>
        <PrimaryButton
          onClick={() => {
            setShowModal(false);
            setStatus("Question");
          }}
          type="button"
          title="OK"
          className="rounded-[3px] mt-10 px-1"
        />
      </div>
    </ModalContainer>
  );
};

export const FailedTransaction = ({
  showModal,
  setShowModal,
  setStatus,
  initialValue,
  finalValue,
  failureMessage,
}) => {
  return (
    <ModalContainer
      showModal={showModal}
      setShowModal={setShowModal}
      setStatus={setStatus}
      className={`absolute top-0 right-0 text-2xl w-full h-screen flex justify-center items-center z-50 `}
    >
      <div
        className={`h-[428px] w-[500px] bg-white z-50 flex flex-col justify-center items-center`}
      >
        <Image
          src="/icons/failed-transaction.svg"
          alt="failed transaction"
          width={112}
          height={100}
        />
        <p className="text-2xl font-semibold mt-7">Oh no!</p>
        <div className="text-sm text-black/70 mt-7 px-20 text-center">
          {failureMessage}
        </div>
        <PrimaryButton
          onClick={() => setShowModal(false)}
          type="button"
          title="OK"
          className="rounded-[3px] mt-10 px-1"
        />
      </div>
    </ModalContainer>
  );
};

export const TransactionsModal = ({
  showModal,
  setShowModal,
  status,
  setStatus,
  initialValue,
  finalValue,
  confirmationMessage,
  successMessage,
  failureMessage,
  type,
  topup,
}) => {
  return (
    <>
      {status === "Question" && (
        <Question
          showModal={showModal}
          setShowModal={setShowModal}
          setStatus={setStatus}
          initialValue={initialValue}
          finalValue={finalValue}
          confirmationMessage={confirmationMessage}
          type={type}
          topup={topup}
        />
      )}
      {status === "Successful" && (
        <SuccessfulTransaction
          showModal={showModal}
          setShowModal={setShowModal}
          setStatus={setStatus}
          initialValue={initialValue}
          finalValue={finalValue}
          successMessage={successMessage}
        />
      )}
      {status === "Failed" && (
        <FailedTransaction
          showModal={showModal}
          setShowModal={setShowModal}
          setStatus={setStatus}
          initialValue={initialValue}
          finalValue={finalValue}
          failureMessage={failureMessage}
        />
      )}
    </>
  );
};
