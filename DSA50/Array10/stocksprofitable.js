const maxProfitTime = (prices) => {
  let maxProfit = 0;
  let buyTimePrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyTimePrice) {
      buyTimePrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buyTimePrice);
    }
  }
  return maxProfit;
};

console.log(maxProfitTime([2, 2, 2, 2]));
