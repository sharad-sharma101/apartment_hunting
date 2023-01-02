function apartmentHunting(blocks, reqs) {
    // Write your code here.
    
    //  Initialize recored
    let recored = {}
    for(let req of reqs) 
           recored[req] = blocks.map((e) => Number.MAX_SAFE_INTEGER );
    
    // distance of nearest requirment from every block  
  
       // 1. from left to right 
            for(let i = 1; i < blocks.length; i++){
              for(let req of reqs){
                    let curr = blocks[i];
                    if(curr[req])   recored[req][i] = 0;
                    else     recored[req][i] = recored[req][i - 1] + 1;
            }}

       // 2. from right to left 
            for(let j = blocks.length - 2; j >= 0; j--){
                for(let req of reqs)
                    recored[req][j] = Math.min(recored[req][j], recored[req][j + 1] + 1);
            }
  

    
    // to store maximum distince for every block 
    let result = []
        
    for(let i = 0; i < blocks.length; i++){
        let maxDist = -1e9;
        for(let req of reqs)
            maxDist = Math.max(maxDist, recored[req][i]);
        result[i] = maxDist;
    }

    // minimum among result 
    return result.indexOf(Math.min(...result))

}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
