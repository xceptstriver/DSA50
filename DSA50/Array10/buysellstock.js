const besttime = () => {
  let prices = [7, 1, 5, 3, 6, 4];
  let buydayPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buydayPrice) {
      buydayPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buydayPrice);
    }
  }
  return maxProfit;
};

console.log(besttime());
