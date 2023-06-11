/**
 * 快速排序
 * @param {number[]} arr
 * @return {number[]}
 */

var sortArray = function(arr) {
    if(arr.length<=1)return arr
    quickSort(arr,0,arr.length-1)
    return arr

    function quickSort(arr,start,end){
        if(start>=end)return
        let pivot = partition(arr,start,end)
        quickSort(arr,start,pivot-1)
        quickSort(arr,pivot+1,end)
    }
    function partition(arr,start,end){
        let pivot = arr[start]
        let i=start,j=end+1;
        while(1){
            while(arr[++i]<pivot){
                if(i===end)break
            }
            while(arr[--j]>pivot){
                if(i===start)break
            }
            if(i>=j){
                break
            }
            //交换大于pivot的arr[i]和小于pivot的arr[j]
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
        //arr[j]是最后一个小于pivot的元素
        [arr[start],arr[j]]=[arr[j],arr[start]]
        return j

    }
};

/**
 * 冒泡排序
 * @param {number[]} arr
 * @return {number[]}
 */

var sortArray = function(arr) {
    for(let i =0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    
    return arr
};