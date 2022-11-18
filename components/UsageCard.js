export const UsageCard = ({ children, title, subtitle, className }) => {
  return (
    <div className={`bg-white drop-shadow-sm pt-7 pb-4 h-auto ${className} `}>
      <div className="pl-5">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-black/70 text-[0.75rem] mt-2 mb-4">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};
