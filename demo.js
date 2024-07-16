// arr creation & initilization
let arr=[23,51,1,2,4,3,53,98,36,100]

// arr manipulation
arr.push(96);
console.log(arr);
arr.unshift(22);
console.log(arr);
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)

//arr searching
console.log("2 in the index of "+arr.indexOf(2));
console.log(arr.includes(4))
 
//arr filtering
for(i=0;i<arr.length;i++){
    if(arr[i]<50)
        console.log(arr[i])
}

//arr mapping
nums=arr.map(n=>n*2)
console.log(nums)