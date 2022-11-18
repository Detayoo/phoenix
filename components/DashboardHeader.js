import Image from "next/image";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white h-20 pl-[2.18rem] pr-[2.4rem] sticky top-0 right-0">
      <Image className="cursor-pointer" src="/icons/shrink-sidebar.svg" alt='shrink sidebar icon' width={32} height={24} />
      <div>
        <div className="flex gap-x-4 items-center cursor-pointer">
          <Image src="/img/user-avatar.png" alt='user avatar' width={50} height={50} />
          <div>
            <p className="text-[13px] font-semibold">OLUWAFEMI ALABI</p>
            <p className="font-extralight text-[10px] mt-1text-black opacity-80 tracking-wide">
              BUSINESS ID: 858567
            </p>
          </div>
          <Image src="/icons/arrow-down-icon.svg" alt='arrow down icon' width={15} height={15} />
        </div>
      </div>
    </div>
  );
};
