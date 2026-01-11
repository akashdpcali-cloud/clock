let hour=document.querySelector(".hour");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");




function update(){
  let now= new Date();
  let hours=now.getHours();
  let minuts=now.getMinutes();
  let seconds=now.getSeconds();
  hour.innerHTML= hours<10 ? ("0"+hours+"h") : (hours+"h");
  min.innerHTML= minuts<10 ? ("0"+minuts+"m") : (minuts+"m");
  sec.innerHTML= seconds<10 ? ("0"+seconds+"s") : (seconds+"s");
}
setInterval(update, 10);
