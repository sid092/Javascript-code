// code to find the repeated number.


const arrr=[0,1,2,3,4,5,6,7,7,8,9,10];
let count=0;
for(let i=0;i<arrr.length;i++){
    for(let j=i+1;j<arrr.length;j++){
        if(arrr[i]==arrr[j]){
            console.log(arrr[i]);
            break;
        }
    }
}
