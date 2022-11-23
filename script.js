var count=0;
setInterval(()=>{
let len=document.getElementsByClassName(`slide`);
if(count<12)
{     
 len[count].style.display="block";
 if(count===1)
 {
    len[0].style.display="none"; 
 } 
 else if(count===2)  
 {
    len[1].style.display="none";  
 }
 else if(count===3)
 {
    len[2].style.display="none";  
 }
 else if(count===4)
 {
    len[3].style.display="none";   
 } 
 else if(count===5)
 {
    len[4].style.display="none";   
 }
 else if(count===6){
    len[5].style.display="none"; 
 }
 else if(count===7){
   len[6].style.display="none"; 
}
else if(count===8){
   len[7].style.display="none"; 
}
else if(count===9){
   len[8].style.display="none"; 
}
else if(count===10){
   len[9].style.display="none"; 
}
else if(count===11){
   len[10].style.display="none"; 
}
else{
   len[11].style.display="none"; 
}
 console.log(count);
count++;

}
else
{
    count=0;
}


},1000);