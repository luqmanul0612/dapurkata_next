/* eslint-disable import/prefer-default-export */
export const formatToCurrency = (amount) =>{
  const options = { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  };
  const formatted = Number(amount).toLocaleString('id-ID', options);
  return formatted;
};