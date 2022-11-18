import { Fragment } from "react";
import Image from "next/image";

export const PrimaryButton = ({
  type = "button",
  title,
  loading,
  disabled,
  image,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled ? true : false}
      className={`outline-none rounded-[5px] min-w-[8rem] h-[3rem] px-4 py-1 text-[0.88rem] text-white inline-flex items-center justify-center gap-1 ${
        disabled
          ? "bg-primary-btn-disabled border-btn-disabled"
          : "bg-primary-red border-primary-red"
      }  border-[1px] ${className}`}
      onClick={onClick}
    >
      {loading ? (
        <SecondaryButtonLoader />
      ) : (
        <Fragment>
          {title}
          {!!image && (
            <Image
              src={`/icons/arrow-right-${disabled ? "gray" : "white"}.svg`}
              alt="Arrow Right Icon"
              width={30}
              height={24}
            />
          )}
        </Fragment>
      )}
    </button>
  );
};

export const LightButton = ({
  type = "button",
  title,
  loading,
  disabled,
  image,
  className,
  onClick,
  src,
}) => {
  return (
    <button
      type={type}
      disabled={disabled ? true : false}
      className={`outline-none rounded-[5px] min-w-[8rem] h-[3rem] px-4 py-1 text-[0.88rem] text-primary-red inline-flex items-center justify-center gap-2 ${
        disabled
          ? "bg-primary-btn-disabled border-btn-disabled"
          : "bg-light-btn border-light-btn-border"
      }  border-[1px] ${className}`}
      onClick={onClick}
    >
      {loading ? (
        <SecondaryButtonLoader />
      ) : (
        <Fragment>
          {!!image && (
            <Image src={src} alt="Arrow Right Icon" width={18} height={18} />
          )}
        </Fragment>
      )}
      {title}
    </button>
  );
};

export const GrayButton = ({
  type = "button",
  title,
  loading,
  disabled,
  image,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled ? true : false}
      className={`outline-none rounded-[5px] min-w-[8rem] h-[3rem] px-4 py-1 text-[0.88rem] inline-flex items-center justify-center gap-1 ${
        disabled
          ? "bg-gray-btn border-lightest-gray text-black/60"
          : "bg-[#cacaca] border-gray-btn text-black"
      }  border-[1px] ${className}`}
      onClick={onClick}
    >
      {loading ? (
        <SecondaryButtonLoader />
      ) : (
        <Fragment>
          {title}
          {!!image && (
            <Image
              src={`/icons/arrow-right-${disabled ? "gray" : "white"}.svg`}
              alt="Arrow Right Icon"
              width={30}
              height={24}
            />
          )}
        </Fragment>
      )}
    </button>
  );
};

export const OutlineButton = ({ title, className, ...rest }) => {
  return (
    <button
      className={`outline-btn rounded-[5px] min-w-[8rem] h-[3rem] px-4 py-1 border-[1px] text-[0.88rem] ${
        className ? className : ""
      }`}
      {...rest}
    >
      {title}
    </button>
  );
};

export const FixedButton = ({
  type = "button",
  title,
  loading,
  disabled,
  image,
  className,
  onClick,
}) => {
  return (
    <div className="bg-white flex items-end justify-end h-[4.5rem] pb-1 sticky bottom-0 z-20">
      <button
        type={type}
        disabled={disabled ? true : false}
        className={`outline-none rounded-[5px] min-w-[8rem] h-[3rem] px-4 py-1 text-[0.88rem] tracking-wide text-white inline-flex items-center justify-center gap-1 ${
          disabled
            ? "bg-primary-btn-disabled border-btn-disabled"
            : "bg-primary-red border-primary-red"
        }  border-[1px] ${className}`}
        onClick={onClick}
      >
        {loading ? (
          <SecondaryButtonLoader />
        ) : (
          <Fragment>
            {title}
            {!!image && (
              <Image
                src={`/icons/arrow-right-${disabled ? "gray" : "white"}.svg`}
                alt="Arrow Right Icon"
                width={30}
                height={24}
              />
            )}
          </Fragment>
        )}
      </button>
    </div>
  );
};
