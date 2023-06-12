// 给定任意字符串，找到连续重复最多的字母

function repeatStr(str){
    const repeatItem = {}
    for(let i =0,j=1;j<str.length;i++,j++){
        if(str[i]===str[j]){

            repeatItem[str[i]]=1
            while(str[i]===str[j]){
            repeatItem[str[i]]+=1
            i+=1
            j+=1
            }
        }
    }
    const max = Math.max(...Object.values(repeatItem))
    const index = Object.values(repeatItem).findIndex((item)=>item===4)
    const maxLetter = Object.keys(repeatItem)[index]
    const obj={}
    obj[maxLetter]=max
    return obj
}
    
let a = 'asdddwwwerrtttt'
const res = repeatStr(a)
console.log(res)