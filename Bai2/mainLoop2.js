document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    //input
    var x= document.getElementById("inputX").value;
    var n=document.getElementById("inputN").value;

    //calculate
    var sum=0;
    for(let i=1;i<=n;i++){
        sum+=Math.pow(x,i);
    }

    //output
    var footer=document.getElementById("footer");
    var res=document.createElement("div");    
    res.innerHTML=sum;
    
    footer.appendChild(res);
}