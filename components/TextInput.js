import { useState } from "react";
import Image from "next/image";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";

export const TextField = ({
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
  onChange,
  handleBlur,
  isPassword = false,
  handleToggle,
  toggleText,
  error,
  ...rest
}) => {
  const [active, setActive] = useState("");
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
          className={`w-full h-11 border-[1px] border-black/50 rounded-[5px] mt-[0.4rem] flex items-center gap-2 px-3 ${
            value && active !== name
              ? "bg-white border-black/25"
              : active === name
              ? "border-[#CC0000]"
              : error
              ? "border-primary-red bg-input-red-bg"
              : "bg-input-gray border-0"
          } ${inputClass}`}
        >
          {onChange ? (
            <Field
              onFocus={() => setActive(name)}
              onBlur={() => {
                setActive("");
                handleBlur();
              }}
              onChange={onChange}
              type={type}
              name={name}
              placeholder={placeholder}
              className={`flex-1 h-full bg-transparent text-black/80 text-sm font-[400] px-1 py-1 outline-none placeholder:text-[13px] placeholder:text-black placeholder:opacity-30 ${textClass}`}
              {...rest}
            />
          ) : (
            <Field
              onFocus={() => setActive(name)}
              onBlur={() => {
                setActive("");
              }}
              type={type}
              name={name}
              placeholder={placeholder}
              className={`flex-1 h-full bg-transparent text-black/80 text-sm font-[400] px-1 py-1 outline-none placeholder:text-[13px] placeholder:text-black placeholder:opacity-30 ${textClass}`}
              {...rest}
            />
          )}
          {isPassword && (
            <p
              onClick={handleToggle}
              className="text-sm mr-4 text-black/70 cursor-pointer"
            >
              {toggleText}
            </p>
          )}
        </div>
      </div>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export const TextArea = ({
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
  // optional,
  optionalMessage,
  label,
  error,
  maxLength,
  ...rest
}) => {
  const [optional, setOptional] = useState(true);
  return (
    <div className={`w-full ${divClass}`}>
      <label
        htmlFor={htmlFor}
        className={`text-sm font-extra flex gap-x-1 ${labelClass}`}
      >
        {label} {optional && <p className="text-black/50">(optional)</p>}
      </label>
      <div
        className={`rounded-[7px] border-[1px] ${
          error ? "border-input-red-bg" : "border-transparent"
        } ${outerDivClass} `}
      >
        <div
          className={`w-full border-[1px] rounded-[5px] mt-[0.4rem] flex items-center gap-2 px-3 ${
            error
              ? "border-primary-red bg-input-red-bg"
              : value
              ? "bg-white"
              : "bg-input-gray border-none"
          } ${inputClass}`}
        >
          <Field
            as="textarea"
            type={type}
            name={name}
            placeholder={placeholder}
            className={`flex-1 h-full bg-transparent text-black/80 text-sm font-[400] px-1 py-1 outline-none placeholder:text-[14px] placeholder:text-black placeholder:opacity-30 ${textClass}`}
            maxLength={maxLength}
            {...rest}
          />
        </div>
      </div>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export const CalendarField = ({
  type = "text",
  name,
  htmlFor,
  value,
  startDate,
  placeholder,
  divClass,
  textClass,
  labelClass,
  label,
  error,
  loader,
  onChange,
  handleBlur,
  onSelect,
  ...rest
}) => {
  const [focus, setFocus] = useState("");

  return (
    <div className={`w-full ${divClass}`}>
      <label className={`text-sm ${labelClass}`}>{label}</label>
      <div
        className={`mt-2 ${
          error
            ? "border-input-red-bg"
            : focus === name
            ? "bg-white"
            : "bg-white"
        }`}
      >
        <div
          className={`w-full h-10 border rounded-[5px] flex items-center gap-2 px-3 ${
            error
              ? "border-input-border-red bg-input-red-bg"
              : focus === name
              ? "border-input-border-purple bg-white"
              : value
              ? "bg-white border-black"
              : "bg-input-gray border-input-gray"
          }`}
        >
          <div className="flex-1 h-full relative flex items-center">
            <DatePicker
              name={name}
              dateFormat="dd/MM/yyyy"
              selected={value}
              id={htmlFor}
              startDate={startDate || null}
              placeholderText={placeholder}
              wrapperClassName="calendar__wrapper"
              popperClassName="calendar__popper"
              className={`w-full h-full bg-transparent text-black/80 font-[400] outline-none ${textClass}`}
              onChange={onChange}
              onFocus={() => setFocus(name)}
              onBlur={() => {
                setFocus("");
                handleBlur();
              }}
              onSelect={onSelect}
              {...rest}
            />
          </div>
          <label
            htmlFor={htmlFor}
            className="m-0 p-0 inline-block relative w-[24px] h-[24px] cursor-pointer"
          >
            <Image
              src="/icons/input-calendar-icon.svg"
              alt=""
              layout="fill"
              onClick={() => setFocus(name)}
            />
          </label>
        </div>
      </div>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};
