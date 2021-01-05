document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    var sum=0;
    var i=0;
    while(sum<=10000){
        sum+=i;
        i++;
    }
    //output
    var footer=document.getElementById("footer");
    var res=document.createElement("div");    
    res.innerHTML=i;
    
    footer.appendChild(res);
}
