const showpopup = document.getElementsByTagName("span")
console.log(showpopup)
let click =0;
function popup(index){
    if(click==0)
    {
        console.log(showpopup[index])
        showpopup[index].style.display="block";
     click=1;
}
    else{
        showpopup[index].style.display="none";
        click=0;
    }
   
    
}