'use strict';


function kMarsh(grid) {
    const up = []
    const left = [];
    for(let i = 0; i < grid.length; i++){
        up.push([0]);
        left.push([0]);
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j <grid[0].length; j++){
            up[i][j] = 0;
            left[i][j] = 0;
            
            if(j !== 0 && grid[i][j - 1] !== "x"){
                left[i][j] = left[i][j - 1] + 1
            }
    
            if(i !== 0 && grid[i - 1][j] !== "x"){
                up[i][j] = up[i - 1][j] + 1
            }
        }
    }
    
    let maxPerim = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j <grid[0].length; j++){

            if(grid[i][j] !== "x"){
                for(let m = 1; m <= up[i][j]; m++){
                    let width = Math.min(left[i - m][j], left[i][j]);
                    let length = up[i][j - width] >= m ? m : 0;
                    while(length === 0 && width > 0){
                        width--;
                        length =  up[i][j - width] >= m ? m : 0;
                    }
                    if(length > 0 && width > 0){
                        maxPerim = Math.max(maxPerim, 2*(length + width))
   
                    }                    
                }
            }
            
       
            
           
        }
    }
    
    if(maxPerim){
        console.log(maxPerim)
    } else {
        console.log("impossible")
    }

}

kMarsh([".x",".."])