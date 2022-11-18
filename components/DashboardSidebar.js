import { useState } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";

import { resellerRoutes } from "../utils";

export const ResellerSidebar = () => {
  const ActiveLink = (href) => useRouter().pathname.startsWith(href);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = (title) => {
    setShowDropdown(true);
    return true;
  };

  return (
    <div className="w-[19.55%] h-screen bg-white flex flex-col">
      <div className="h-[6.2rem] w-full flex justify-center items-center sticky top-0 left-0 text-[24px] font-extrabold">
        LOGO
      </div>
      <hr />
      <div className="flex-1 mt-[2rem] overflow-y-auto">
        {resellerRoutes?.map((route) => {
          const { title, url, icon, activeIcon, arrow, activeArrow, dropdown } =
            route;
          return (
            <Link href={url} key={title}>
              <div
                onClick={() => {
                  handleDropdown(title);
                }}
                className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mb-5 cursor-pointer ${
                  ActiveLink(url)
                    ? "bg-dashboard-active-bg border-primary-red"
                    : "hover:bg-[#f9f9f9]"
                }`}
              >
                <div
                  className={`w-[7px] h-full rounded-[5px] ${
                    ActiveLink(url) ? "bg-primary-red" : "bg-white"
                  } `}
                ></div>
                <div className="flex items-center ml-8 gap-5">
                  <div className="relative w-6 h-6 ">
                    <Image
                      src={ActiveLink(url) ? activeIcon : icon}
                      alt="sidebar icon"
                      layout="fill"
                    />
                  </div>
                  <p
                    className={`text-[14px] font-medium ${
                      ActiveLink(url)
                        ? "text-primary-red opacity-100"
                        : title === "Log Out"
                        ? "text-primary-red"
                        : "text-black opacity-70"
                    }`}
                  >
                    {title}
                  </p>
                </div>
                {arrow && (
                  <div className=" flex justify-center">
                    <Image
                      src={ActiveLink(url) ? activeArrow : arrow}
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const AgentSidebar = () => {
  const [status, setStatus] = useState(useRouter().pathname);
  const goToProducts = () => {
    if (!status.startsWith("/products")) {
      Router.push("/agent/products/buy-airtime");
      setStatus("/agent/products/buy-airtime");
    } else return;
  };

  const goToBulkTopup = () => {
    if (!status.startsWith("/agent/bulk-top-up")) {
      Router.push("/agent/bulk-top-up/upload-csv");
      setStatus("/agent/bulk-top-up/upload-csv");
    } else return;
  };

  return (
    <div className="w-[19.55%] h-screen bg-white flex flex-col">
      {/* LOGO */}
      <div className="h-[6.2rem] w-full flex justify-center items-center sticky top-0 left-0 text-[24px] font-extrabold">
        LOGO
      </div>
      <hr />
      <div className="flex-1 mt-[2rem] overflow-y-auto">
        {/* DASHBOARD */}
        <div
          onClick={() => {
            Router.push("/agent/dashboard");
            setStatus("/agent/dashboard");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mb-5 cursor-pointer ${
            status === "/agent/dashboard"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/dashboard" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/dashboard"
                  ? "/icons/active-dashboard-icon.svg"
                  : "/icons/dashboard-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/dashboard"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Dashboard
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div
          onClick={goToProducts}
          className={`relative flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mb-5 cursor-pointer ${
            status.startsWith("/agent/products")
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status.startsWith("/agent/products")
                ? "bg-primary-red"
                : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status.startsWith("/agent/products")
                  ? "/icons/active-products-icon.svg"
                  : "/icons/products-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status.startsWith("/agent/products")
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Products
            </p>
          </div>
          <div className="relative w-6 h-6 ml-auto mr-10">
            <Image
              className=""
              src={
                status.startsWith("/agent/products")
                  ? "/icons/active-arrow-down-icon.svg"
                  : "/icons/chevron-right.svg"
              }
              layout="fill"
            />
          </div>
        </div>

        {/* PRODUCTS' DROPDOWN */}
        <div>
          <div
            className={`left-0 flex flex-col justify-between border-black/20 border-l ml-[25%] pl-[28px] animation ${
              status.startsWith("/agent/products")
                ? "opacity-100 visible h-[180px]"
                : "opacity-0 invisible h-0 -ml-[200px]"
            } `}
          >
            <div
              onClick={() => Router.push("/agent/products/buy-airtime")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/products/buy-airtime"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/products/buy-airtime"
                    ? "/icons/active-buy-airtime-icon.svg"
                    : "/icons/buy-airtime-icon.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Buy Airtime</p>
            </div>
            <div
              onClick={() => Router.push("/agent/products/buy-data")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/products/buy-data"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/products/buy-data"
                    ? "/icons/active-buy-data-icon.svg"
                    : "/icons/buy-data-icon.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Buy Data</p>
            </div>
            <div
              onClick={() => Router.push("/agent/products/bill-pay")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/products/bill-pay"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/products/bill-pay"
                    ? "/icons/active-bill-pay-icon.svg"
                    : "/icons/bill-pay-icon.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Bill Pay</p>
            </div>
            <div
              onClick={() => Router.push("/agent/products/fund-transfer")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/products/fund-transfer"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/products/fund-transfer"
                    ? "/icons/active-fund-transfer-icon.svg"
                    : "/icons/fund-transfer-icon.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Fund Transfer</p>
            </div>
          </div>
        </div>

        {/* BULK TOP UP */}
        <div
          onClick={goToBulkTopup}
          className={`relative flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mb-5 animation cursor-pointer ${
            status.startsWith("/agent/bulk-top-up")
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } ${status.startsWith("/agent/products") ? "mt-4" : "mt-0"} `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status.startsWith("/agent/bulk-top-up")
                ? "bg-primary-red"
                : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status.startsWith("/agent/bulk-top-up")
                  ? "/icons/active-bulk-top-up-icon.svg"
                  : "/icons/bulk-top-up-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status.startsWith("/agent/bulk-top-up")
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Bulk Top up
            </p>
          </div>
          <div className="relative w-6 h-6 ml-auto mr-11">
            <Image
              src={
                status.startsWith("/agent/bulk-top-up")
                  ? "/icons/active-arrow-down-icon.svg"
                  : "/icons/chevron-right.svg"
              }
              layout="fill"
            />
          </div>
        </div>

        {/* BULK TOP UP DROPDOWN */}
        <div>
          <div
            className={`left-0 flex flex-col justify-between border-black/20 border-l ml-[25%] mt-2 pl-[28px] animation ${
              status.startsWith("/agent/bulk-top-up")
                ? "opacity-100 visible h-[70px]"
                : "opacity-0 invisible h-0 -ml-[200px]"
            } `}
          >
            <div
              onClick={() => Router.push("/agent/bulk-top-up/upload-csv")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/bulk-top-up/upload-csv"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/bulk-top-up/upload-csv"
                    ? "/icons/active-upload-csv.svg"
                    : "/icons/upload-csv.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Upload CSV</p>
            </div>
            <div
              onClick={() => Router.push("/agent/bulk-top-up/background-jobs")}
              className={`flex items-center gap-x-2 cursor-pointer ${
                status === "/agent/bulk-top-up/background-jobs"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              <Image
                src={
                  status === "/agent/bulk-top-up/background-jobs"
                    ? "/icons/active-background-jobs.svg"
                    : "/icons/background-jobs.svg"
                }
                width={24}
                height={24}
              />
              <p className="text-[12px]">Background Jobs</p>
            </div>
          </div>
        </div>

        {/* MY ACCOUNT */}
        <div
          onClick={() => {
            Router.push("/agent/my-account");
            setStatus("/agent/my-account");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mb-5 cursor-pointer ${
            status === "/agent/my-account"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          }
          
          ${status.startsWith("/agent/bulk-top-up") ? "mt-4" : "mt-0"}`}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/my-account" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/my-account"
                  ? "/icons/active-my-account-icon.svg"
                  : "/icons/my-account-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/my-account"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              My Account
            </p>
          </div>
        </div>

        {/* TOP UP LOG */}
        <div
          onClick={() => {
            Router.push("/agent/topup-log");
            setStatus("/agent/topup-log");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mt-4 mb-5 cursor-pointer ${
            status === "/agent/topup-log"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/topup-log" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/topup-log"
                  ? "/icons/active-topup-log-icon.svg"
                  : "/icons/top-up-log-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/topup-log"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Top up Log
            </p>
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div
          onClick={() => {
            Router.push("/agent/transactions");
            setStatus("/agent/transactions");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mt-4 mb-5 cursor-pointer ${
            status === "/agent/transactions"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/transactions" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/transactions"
                  ? "/icons/active-transactions-icon.svg"
                  : "/icons/transactions-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/transactions"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Transactions
            </p>
          </div>
        </div>

        {/* PROMO LIST */}
        <div
          onClick={() => {
            Router.push("/agent/promo-list");
            setStatus("/agent/promo-list");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mt-4 mb-5 cursor-pointer ${
            status === "/agent/promo-list"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/promo-list" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/promo-list"
                  ? "/icons/active-promo-list-icon.svg"
                  : "/icons/promo-list-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/promo-list"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Promo List
            </p>
          </div>
        </div>

        {/* PRICE LIST */}
        <div
          onClick={() => {
            Router.push("/agent/price-list");
            setStatus("/agent/price-list");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] mt-4 mb-5 cursor-pointer ${
            status === "/agent/price-list"
              ? "bg-dashboard-active-bg border-primary-red"
              : "hover:bg-[#f9f9f9]"
          } `}
        >
          <div
            className={`w-[7px] h-[2.8rem] rounded-[5px] ${
              status === "/agent/price-list" ? "bg-primary-red" : "bg-white"
            } `}
          ></div>
          <div className="flex items-center ml-8 gap-5">
            <Image
              src={
                status === "/agent/price-list"
                  ? "/icons/active-price-list-icon.svg"
                  : "/icons/price-list-icon.svg"
              }
              width={24}
              height={24}
            />
            <p
              className={`text-sm ${
                status === "/agent/price-list"
                  ? "text-primary-red"
                  : "text-black/60"
              } `}
            >
              Price List
            </p>
          </div>
        </div>

        {/* LOG OUT */}
        <div
          onClick={() => {
            // Router.push("/login");
          }}
          className={`flex items-center rounded-[5px] gap-x-5 w-full h-[2.8rem] text-sm mt-4 mb-5 cursor-pointer hover:bg-[#f9f9f9]`}
        >
          <div className={`w-[7px] h-[2.8rem] rounded-[5px] "bg-white"`}></div>
          <div className="flex items-center ml-8 gap-5">
            <Image src={"/icons/logout-icon.svg"} width={24} height={24} />
            <p className="text-primary-red">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
