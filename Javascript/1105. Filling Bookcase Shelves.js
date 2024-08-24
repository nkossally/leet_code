/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    const dp = [0]

    for(let i = 1; i <= books.length; i++){
        dp[i] = dp[i - 1] + books[i - 1][1]

        let totalWidth = 0
        let maxHeight = 0
        for(let j = i; j >= 1; j--){
            const book = books[j - 1]
            totalWidth += book[0]
            maxHeight = Math.max(book[1], maxHeight)
            if(totalWidth <= shelfWidth){
                dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight)
            } else {
                break
            }
        }
    }

    return dp[books.length]
};