export const prefixZero = (num: number) => {
  if (num > 9) return num.toString();

  return `0${num}`;
};
