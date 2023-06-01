const sumSquareEvenRootOdd = ns => {
  const sum = ns.reduce((acc, el) => {
    acc += el % 2 === 0 ? el ** 2 : Math.sqrt(el);
    return acc;
  }, 0);

  return Math.round(sum * 100) / 100;
};
