function changeCounter(up){
  // console.log("counter");
  const counter = document.getElementById('counter');
  const currentCount = document.getElementById('counter').textContent;
  counter.textContent = parseInt(currentCount) + (up? 1 : -1)
}

function addlikes(){
  const currentCount = document.getElementById('counter').textContent;
  let lastLi = document.querySelectorAll('.likes li') || 0;
  lastLi = lastLi[lastLi.length-1].textContent || 0;
  lastLi = lastLi.split(" ")[1] || 0;
  console.log(lastLi)
  const li = document.createElement("li");
  li.textContent= `Number ${currentCount} is clicked ${5} times.`
  document.getElementsByClassName('likes')[0].appendChild(li);
}
document.addEventListener("DOMContentLoaded",function(){
  const inter= setInterval(() => changeCounter(true),1000);
  document.getElementById('plus').addEventListener("click" ,() => changeCounter(true) );
  document.getElementById('minus').addEventListener("click" ,() => changeCounter(false) );
  document.getElementById('heart').addEventListener("click" ,() => addlikes() );
  document.getElementById('pause').addEventListener("click" ,() => console.log("pause") );
});
