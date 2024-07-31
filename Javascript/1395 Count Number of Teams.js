/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {

    let count = 0;

    for (let i = 1; i < rating.length - 1; i++) {
        let leftLess = 0
        let leftMore = 0
        let rightLess = 0
        let rightMore = 0;
        for (let j = 0; j < i; j++) {
            if (rating[j] < rating[i]) {
                leftLess++
            } else if (rating[j] > rating[i]) {
                leftMore++
            }
        }

        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] < rating[i]) {
                rightLess++
            } else if (rating[j] > rating[i]) {
                rightMore++
            }
        }
        count += leftLess *rightMore
        count += leftMore *rightLess

    }

    return count

};