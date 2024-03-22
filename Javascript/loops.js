const testForLoop = () =>{
    for(let i = 0; i < 5; i++){
        if(i === 2) return ("banana")
        for(let j = 0; j < 5; j++){
            console.log(j)
            if(j === 5) return "pizza"
        }
    }
}

console.log(testForLoop())