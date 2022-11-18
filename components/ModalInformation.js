export const ModalInformation = ({ className, label, itemClassName, item }) => {
  return (
    <div className={`flex justify-between items-center mt-4 ${className} `}>
      <p className={`text-black/50`}>{label}</p>
      <p className={`font-semibold ${itemClassName} `}>{item}</p>
    </div>
  );
};
