function countString(string){
    let cnt = 0;
    for(const char of string){
        if('A' < char && char <'Z'){
            cnt++;
        }
    }
    return cnt;
}

const test = countString("ThreeTwoOneNine");
console.log(test);