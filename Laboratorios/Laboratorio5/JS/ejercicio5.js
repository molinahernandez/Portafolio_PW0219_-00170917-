function palindroma(str){
    const iter =[...str.toLOwerCase()];
    for(let char of iter){
        if(char !==iter.pop()){return false}
    }
    return true
}