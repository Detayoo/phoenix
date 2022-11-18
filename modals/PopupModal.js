import Image from "next/image";

import ModalContainer from "./ModalContainer";

export const PopupModal = ({
  showPopupModal,
  setShowPopupModal,
  selected,
  heading = true,
  children,
}) => {
  return (
    <ModalContainer
      showModal={showPopupModal}
      setShowModal={setShowPopupModal}
      className={`absolute top-0 right-0 w-full h-screen flex justify-center items-center z-50`}
    >
      <div
        className={`h-auto w-[550px] py-12 px-11 bg-white z-50 rounded-[10px] flex flex-col justify-center items-center relative`}
      >
        <div
          className="absolute -top-4 -right-6 cursor-pointer"
          onClick={() => setShowPopupModal(false)}
        >
          <Image src="/icons/close-modal-icon.svg" height={50} width={50} />
        </div>
        <div className="h-full w-full py-8 px-7 text-[0.82rem] bg-lighter-gray rounded-[5px]">
          {heading && (
            <div className="flex justify-between items-center">
              <div className="flex items-center text-black/70 font-normal gap-x-2">
                <Image
                  src="/icons/mobile-airtime-icon.svg"
                  height={30}
                  width={30}
                />
                {selected?.transactionType === "Bill Pay" ? (
                  <p>{selected?.transactionType}</p>
                ) : (
                  <p>Mobile {selected?.transactionType} Top-Up</p>
                )}
              </div>
              <p className="text-[1.1rem]">{selected?.amount}.00</p>
            </div>
          )}
          <div className="w-full flex justify-center items-center">
            <p className="flex justify-center items-center text-center border border-black/10 px-5 py-1 mt-4 rounded-[27px]">
              Sep 02, 2022, 14:21
            </p>
          </div>
          {children}
        </div>
      </div>
    </ModalContainer>
  );
};
