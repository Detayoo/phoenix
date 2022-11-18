export const calculateAmount = (values) => Math.floor(values / 1.0309);

export const isEven = (n) => {
  if (n % 2 === 0) return true;
};

export const ExchangeRate = () => (
  <p className="-mt-4 text-[0.88rem] text-exchange-rate-text">
    NB: Exchange rate - NGN 1.00 = NGN 0.97
  </p>
);
