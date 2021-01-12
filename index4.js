// code to call this rest api and display the result.


function getCall(){
    url="https://api.github.com/users";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getCall();