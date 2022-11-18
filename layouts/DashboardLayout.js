import { AgentSidebar, DashboardHeader, ResellerSidebar } from "../components";

export const DashboardLayout = ({ children, className }) => {
  return (
    <div className={`flex w-full h-screen ${className} `}>
      <AgentSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 w-full overflow-y-auto bg-lightest-gray">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ResellerDashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <ResellerSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 w-full overflow-y-auto bg-lightest-gray">
          {children}
        </div>
      </div>
    </div>
  );
};
