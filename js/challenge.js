function changeCounter(up){
  // console.log("counter");
  const counter = document.getElementById('counter');
  const currentCount = document.getElementById('counter').textContent;
  counter.textContent = parseInt(currentCount) + (up? 1 : -1)
}
document.addEventListener("DOMContentLoaded",function(){
  const inter= setInterval(() => changeCounter(true),1000);
  document.getElementById('plus').addEventListener("click" ,() => changeCounter(true) );
  document.getElementById('minus').addEventListener("click" ,() => changeCounter(false) );
  document.getElementById('heart').addEventListener("click" ,() => console.log("heart") );
  document.getElementById('pause').addEventListener("click" ,() => console.log("pause") );
});
