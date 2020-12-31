document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    var footer=document.getElementById("footer");
 
    //khÔng có input

    //calculate
    for(let i=1;i<=10;i++){
        if (i%2){
            //div xanh   
            var res=document.createElement("div"); 
            res.style.height="30px";
            res.style.backgroundColor="blue";
        }
        else{
            //div đỏ
            var res=document.createElement("div"); 
            res.style.height="30px";
            res.style.backgroundColor="red";
        }
        footer.appendChild(res);
    }
}