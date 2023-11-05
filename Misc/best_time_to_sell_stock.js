var maxProfit = function(prices) {
    leftIdx = 0;
    rightIdx = prices.length - 1;
    let profit = 0;
    while(leftIdx < rightIdx) {

        while( prices[rightIdx - 1] && prices[rightIdx - 1] > prices[rightIdx]){
            rightIdx--;
        }
        while( prices[leftIdx + 1] && prices[leftIdx + 1] < prices[leftIdx]){
            leftIdx++;
        }
        if(rightIdx > leftIdx && prices[rightIdx] > prices[leftIdx]){
            profit = prices[rightIdx] - prices[leftIdx];
        }
        const leftProfit = maxProfit(prices.slice(leftIdx+1))
        const rightProfit = maxProfit(prices.slice(leftIdx, rightIdx));
        profit = Math.max(profit, leftProfit, rightProfit)
    }
    return profit;
};