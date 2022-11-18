import { useState } from "react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const DashboardCard = ({
  divClassName,
  title,
  number,
  figureInNaira,
  analyticArrow,
  percentage,
  logo,
}) => {
  return (
    <div
      className={`bg-white drop-shadow-sm flex flex-col items-center justify-between px-[1.5%] 2xl:px-[2%] w-[30%] h-[15.6rem] ${divClassName} `}
    >
      <div className="w-full flex flex-col pt-6 pb-4 border-b border-dashed">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <Image src={logo} width={40} height={40} />
            <p className="text-[0.75rem] text-black/80">{title}</p>
          </div>
          <p className="text-[1.25rem] font-medium">{number}</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-3 pb-4 text-[0.75rem] ml-1">
        <p className="text-black/80">Amount</p>
        <p className="text-[1.125rem] font-medium">{figureInNaira}</p>
        <div className="flex items-center gap-x-1">
          <Image src={analyticArrow} width={24} height={24} />
          <p>{percentage}</p>
          <p className="text-black/50 ml-2">Since last week</p>
        </div>
      </div>
    </div>
  );
};

export const PrimaryWalletBalance = ({
  divClassName,
  title,
  balance,
  analyticArrow,
  percentage,
  logo,
}) => {
  const [copied, setCopied] = useState(false);
  const [accountNumber, setAccountNumber] = useState(3764867560);

  return (
    <div
      className={`bg-white drop-shadow-sm flex flex-col items-center px-[1.5%] 2xl:px-[2%] w-[30%] h-[15.6rem] ${divClassName} `}
    >
      <div className="w-full flex flex-col pt-5 pb-4 border-b border-dashed">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <Image src={logo} width={40} height={40} />
            <p className="text-[0.75rem] text-black/80">{title}</p>
          </div>
          <p className="text-[1.35rem] font-medium tracking-wide">{balance}</p>
        </div>
      </div>

      <div className="w-full flex flex-col pb-4 text-[0.75rem] mt-4">
        <div>
          <p className="mb-5 text-black/60">Your Virtual Account Number</p>
          <div className="h-8 flex items-center justify-between">
            <p className="text-sm">Providus Bank</p>
            <div className="text-sm bg-[#0F62FE]/5 h-6 w-[130px] px-2 flex items-center justify-between cursor-pointer">
              <CopyToClipboard
                text={accountNumber}
                onCopy={() => setCopied(true)}
              >
                <button className="flex gap-x-2 items-center">
                  {accountNumber}
                  <Image src="/icons/copy-icon.svg" width={16} height={16} />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
