// maximum consecutive 1's in an array of 0's and 1's.


const arrr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
let count=0;
let temp=0;
for(let i=0;i<arrr.length;i++){
    if (arrr[i] == 1) {
        count++;
        if (count > temp)
            temp = count;
    } else {
        count = 0;
    }
}
console.log(temp)