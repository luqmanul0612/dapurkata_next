export const formatToCurrency = (amount, frac = 2) => {
  const options = {
    minimumFractionDigits: frac,
    maximumFractionDigits: frac
  };
  const formatted = Number(amount).toLocaleString('id-ID', options);
  return formatted;
};