export const Tab = ({ tabList, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center -mb-[16px] mt-4 gap-x-1">
      {tabList?.map((tab) => (
        <p
          key={tab?.name}
          onClick={() => setActiveTab(tab?.name)}
          className={`flex justify-center py-2 w-32 border-b-[2px] tracking-wide cursor-pointer ${
            activeTab === tab?.name
              ? "border-primary-red font-[600]"
              : "border-b font-normal text-black/40"
          }  `}
        >
          {tab?.name}
        </p>
      ))}
    </div>
  );
};
