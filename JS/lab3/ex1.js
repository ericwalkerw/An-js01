
const _findWay = (garden, step, path, paths)=> {
    for (let i = 0; i < 3; i++) {
        if(garden[step][i] === 0){
            path.push(i);
            if(path.length ===5){
                paths.push([... path]);
            }
            else{
                _findWay(garden,step+1,path,paths);
            }
            path.pop();
        }
    }
}

const findWay = (garden) => {
    const paths = [];
    _findWay(garden,0,[],paths);
    return paths;
}

findWay([
    [0,1,1],
    [0,1,0],
    [0,0,1],
    [0,1,1],
    [0,0,1],
]).forEach(val => console.log(val));


let test = [ 
[0,1,1],
[0,1,0],
[0,1,1],
[0,1,1],
[0,0,1],
]

test.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        if(element.filter(val => val === 0)){
            console.log(i);
        }
        
    }
});