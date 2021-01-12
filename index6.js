// code to sort the object by id

function compare_item(a, b){
    if(a.id < b.id){
            return -1;
    }else if(a.id > b.id){
            return 1;
    }else{
            return 0;
    }
}
var obj =[ 
        {id : "9", name :"ab2"},
        {id : "5", name :"abc3"},
        {id : "4", name: "abc"},
        {id : "6", name :"abc5"}
]
console.log(obj.sort(compare_item));