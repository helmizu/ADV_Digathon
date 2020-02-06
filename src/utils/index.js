export const noop = () => {};

export const percentToDecimal = number => {
  let percent = number;
  if (typeof number === 'string') { percent = Number(number); }
  return percent / 100;
};

export const formatPriceNumber = (price = 0, withExt = false) => {
  const number = price.toFixed(3);
  const numberWithPoint = parseFloat(number)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return withExt ? `${numberWithPoint}.00` : `${numberWithPoint}`;
};

export const decimalToPercent = (decimal = 0) => {
  const percentage = decimal * 100;
  return `${Math.round(percentage)}`;
};

export default { noop, percentToDecimal, formatPriceNumber, decimalToPercent };
