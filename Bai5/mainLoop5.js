document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    var footer=document.getElementById("footer");
    var res=document.createElement("div");    
        
    //input
    var n=document.getElementById("inputN").value;

    //calculate
    var i=0;
    while(i<=n){
        if(isPrime(i))res.innerHTML+=i+" ";
        i++;
    }

    //output
    footer.appendChild(res);
}
//kiểm tra SNT
function isPrime(n){
    if(n<2)return false;
    if(n==2)return true;
    if(n%2==0)return false;
    for(let i=3;i<n;i+=2){
        if(n%i==0)return false;
    }
    return true;
}