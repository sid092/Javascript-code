// code to call this rest api and display the result.


async function getCall(){
    const response=await fetch("https://api.github.com/users");
    const users=await response.json();
    return users;
}
let a=getCall();
a.then(data=>console.log(data));
console.log(a);