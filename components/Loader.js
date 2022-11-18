import Image from "next/image";

export const WhiteLoader = ({ className }) => {
  return (
    <div className={`relative loader__container w-10 h-10 ${className}`}>
      <Image src="/icons/loader-white.svg" alt="Spinner" layout="fill" />
    </div>
  );
};
