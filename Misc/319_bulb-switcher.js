/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let count = n;
    let bulbs = []
    for(let i = 0; i < n; i++){
        bulbs.push(1)
    }

    const changeLights = num =>{
        let i = num - 1;
        while(i < n ){
            if(bulbs[i] === 0){
                bulbs[i] = 1
                count++
            } else {
                bulbs[i] = 0
                count--
            }
            i += num
        }
    }
    let delta = 2
    while(delta <= n){
        changeLights(delta)
        delta++
    }

    return count
};