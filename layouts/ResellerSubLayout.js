import { ResellerDashboardLayout } from "./DashboardLayout";

export const ResellerSubLayout = ({
  tab,
  action,
  actionType,
  subtitle,
  hasSubtitle = true,
  children,
  showBalance = true,
  showButton = false,
  showActionType = true,
  btn,
  btnOnClick,
}) => {
  return (
    <ResellerDashboardLayout>
      <div className="pl-[2.25rem] pr-[2.4rem] flex flex-col bg-lightest-gray">
        <div className="flex justify-between items-center bg-lightest-gray pt-[2.2rem] pb-[0.85rem] border-b-[2px] sticky top-0  z-20">
          <div>
            <p className="text-2xl font-medium">{action}</p>
            <div>{tab}</div>
          </div>
          {showBalance && (
            <p className="text-[12px] text-white bg-primary-red h-12 flex items-center justify-center px-[1.6rem] rounded-[5px] tracking-wide font-normal">
              Primary Wallet Balance:
              <span className="text-[1rem] tracking-wider ml-2">NGN 0.00</span>
            </p>
          )}
          {showButton && <div onClick={btnOnClick}>{btn}</div>}
        </div>
        <div className="flex-1 mt-[1.88rem] drop-shadow-sm">
          {showActionType && (
            <div
              className={`flex flex-col justify-center items-center bg-light-gray tracking-wide ${
                hasSubtitle ? "h-[4.75rem]" : "h-[3rem]"
              } `}
            >
              <p className="font-medium">{actionType}</p>
              {hasSubtitle && (
                <p className="text-[12px] text-black opacity-80 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </ResellerDashboardLayout>
  );
};
