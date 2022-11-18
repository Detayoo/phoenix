import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Image from "next/image";

export const SelectField = ({
  type = "text",
  name,
  htmlFor,
  value,
  placeholder,
  divClass,
  textClass,
  labelClass,
  inputClass,
  outerDivClass,
  label,
  error,
  ...rest
}) => {
  return (
    <div className={`w-full ${divClass}`}>
      <label htmlFor={htmlFor} className={`text-sm font-extra ${labelClass}`}>
        {label}
      </label>
      <div
        className={`rounded-[7px] ${
          error ? "border-input-red-bg" : "border-transparent"
        } ${outerDivClass} `}
      >
        <div
          className={`w-full h-11 border-[1px] rounded-[5px] mt-[0.4rem] flex items-center gap-2 px-3 ${
            error
              ? "border-primary-red bg-input-red-bg"
              : value
              ? "bg-white border-black/25"
              : "bg-input-gray border-0"
          } ${inputClass}`}
        >
          <Field
            as="select"
            type={type}
            name={name}
            placeholder={placeholder}
            className={`flex-1 h-full bg-transparent font-[400] text-sm px-1 py-1 text-black outline-none placeholder:text-[14px] placeholder:text-black placeholder:opacity-10 ${textClass}`}
            {...rest}
          />
        </div>
      </div>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export const CustomSelectField = ({
  label,
  selectedOption,
  setSelectedOption,
  defaultPlaceholder,
  options,
  imageHeight,
  imageWidth,
  displayLogo = true,
}) => {
  const [showList, setShowList] = useState(false);
  console.log(showList);

  return (
    <>
      <div>
        <p className="text-sm mb-2">{label}</p>
        <div
          onClick={() => setShowList(!showList)}
          className={`flex justify-between items-center px-4 h-11 rounded-[5px] cursor-pointer ${
            selectedOption?.name
              ? "bg-white border border-black/50"
              : showList
              ? "bg-input-gray border border-primary-btn-disabled"
              : "bg-input-gray border-none"
          } `}
        >
          <div
            className={`text-sm flex w-full justify-between items-center gap-x-6  ${
              selectedOption?.name ? "text-black" : "text-black/30"
            } `}
          >
            <div className="flex items-center justify-center gap-x-3">
              {selectedOption?.name && (
                <>
                  {displayLogo && (
                    <Image
                      src={selectedOption?.logo}
                      alt="selected option logo"
                      width={imageWidth || 50}
                      height={imageHeight || 45}
                      className="drop-shadow-md"
                    />
                  )}
                </>
              )}
              {selectedOption?.name || defaultPlaceholder}
            </div>
            <Image
              src="/icons/arrow-down-icon.svg"
              alt="arrow down icon"
              width={14}
              height={14}
            />
          </div>
        </div>
      </div>
      {showList && (
        <div className="bg-white -mt-6 shadow-md flex flex-col">
          {options.map((provider) => {
            return (
              <div
                key={provider?.name}
                className="flex items-center gap-x-6 px-8 cursor-pointer py-[0.65rem]"
                onClick={() => {
                  setSelectedOption(provider);
                  setShowList(false);
                }}
              >
                <Image
                  src={provider?.logo}
                  width={48}
                  height={45}
                  className=""
                />
                <div>
                  <p className="text-sm">{provider?.name}</p>
                  <p className="text-[12px] text-black/60">
                    {provider?.slogan}
                  </p>
                </div>
                {provider?.price && (
                  <p className="ml-auto text-[0.85rem]">({provider?.price})</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
