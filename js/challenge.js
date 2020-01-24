function increaseCounter(){
  console.log("counter");
  const counter = document.getElementById('counter');
  const currentCount = document.getElementById('counter').innerhtml;
  counter.innerhtml = parseInt(currentCount)+1
}
document.addEventListener("DOMContentLoaded",function(){
  const inter= setInterval(increaseCounter,1000);
});
