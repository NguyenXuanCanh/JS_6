document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    //input
    var n=document.getElementById("inputN").value;

    //calculate
    var ans=1;
    while(n){
        ans*=n;
        n--;
    }

    //output
    var footer=document.getElementById("footer");
    var res=document.createElement("div");    
    res.innerHTML=ans;
    
    footer.appendChild(res);
}