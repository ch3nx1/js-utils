/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i =0;i<nums.length;i++){
    
            let other = nums.slice(i+1).findIndex((item)=>{
                return item===target-nums[i]
            })
            if(other>-1){
                other=other+i+1
                return[i,other]
            }
        }
    };