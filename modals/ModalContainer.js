export const ModalContainer = ({
  showModal = false,
  setShowModal,
  children,
  className,
  status,
  setStatus,
}) => {
  return (
    <div
      className={`fixed top-0 w-full h-full animation z-50 ${
        showModal ? "opacity-100 visible" : "opacity-0 invisible"
      } ${className} `}
    >
      {children}
      <div
        className={`absolute w-full h-screen top-0 left-0 bg-faint-black animation`}
        onClick={() => {
          setShowModal(false);
          {
            status && setStatus("Question");
          }
        }}
      ></div>
    </div>
  );
};

export default ModalContainer;
