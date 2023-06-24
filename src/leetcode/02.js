function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let result = []
let a 
var addTwoNumbers = function(l1, l2) {
for(let i =0,j=0;i<l1.length,j<l2.length;i++,j++){

    let sum = 0
    a = a?1:0
    if(l1[i]+l2[j]>=10) {
        sum=(l1[i]+l2[j])%10
        a=1
        }else {
            sum=l1[i]+l2[j]+a
            a=0
        }
        result.push(sum)
}
return result
};
let q = [2,3,4],w=[1,2,3]
let l1 = [2,4,3], l2 = [5,6,4]
console.log(new ListNode(...l1))
console.log(addTwoNumbers(l1,l2))
