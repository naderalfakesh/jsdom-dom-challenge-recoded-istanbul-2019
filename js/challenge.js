function changeCounter(up){
  // console.log("counter");
  const counter = document.getElementById('counter');
  const currentCount = document.getElementById('counter').textContent;
  counter.textContent = parseInt(currentCount) + (up? 1 : -1)
}

function addlikes(){
  let lastLi = 0;
  let times = 1;
  const currentCount = document.getElementById('counter').textContent;
  const li = document.createElement("li");

  if(document.querySelectorAll('.likes li')[0] ){
    lastLi = document.querySelectorAll('.likes li');
    lastLi = lastLi[lastLi.length-1].textContent;
    times = lastLi.split(" ")[4];
    lastLi = lastLi.split(" ")[1];
  }

  if(currentCount == lastLi){
    times++;
  }
  else{
    li.textContent= `Number ${currentCount} is clicked ${times} times.`
    li.id = `count-${currentCount}`
    document.getElementsByClassName('likes')[0].appendChild(li);
  }


}
document.addEventListener("DOMContentLoaded",function(){
  const inter= setInterval(() => changeCounter(true),1000);
  document.getElementById('plus').addEventListener("click" ,() => changeCounter(true) );
  document.getElementById('minus').addEventListener("click" ,() => changeCounter(false) );
  document.getElementById('heart').addEventListener("click" ,() => addlikes() );
  document.getElementById('pause').addEventListener("click" ,() => console.log("pause") );
});
