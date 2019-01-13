function cacheSavings (callback){
    let count = 0;
    let savedObj = {
        count: 0,
    }
    return function(arg){
        if (arg in savedObj !== true){
            let result = callback(arg)
            savedObj.count ++
            savedObj[arg] = result
            return result
        } 
        else {
            return savedObj[arg]
        }
    }
}