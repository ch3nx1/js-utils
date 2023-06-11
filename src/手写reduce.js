const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.rewriteReduce = function (fn, ...rest) {
    if(Object.prototype.toString.call(fn)!=='[object Function]'){
        throw new Error(fn+'is not a function')
    }
    const arr = this
    let initIndex =rest.length===1?0:1
    let acc=rest.length===1?rest[0]:arr[0]
    for (let i =initIndex;i<arr.length;i++){
        acc = fn(acc,arr[i],i,arr)
    }
    return acc
};

const res = arr.rewriteReduce((pre,curr)=>pre+curr)
const ret = arr.reduce((pre,curr)=>pre+curr)

console.log(res)
console.log(ret)