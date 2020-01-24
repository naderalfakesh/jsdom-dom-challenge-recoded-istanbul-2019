function changeCounter(up){
  // console.log("counter");
  const counter = document.getElementById('counter');
  const currentCount = document.getElementById('counter').textContent;
  counter.textContent = parseInt(currentCount) + (up? 1 : -1)
}

function addlikes(){
  let lastLiCount = 0;
  let times = 1;
  const currentCount = document.getElementById('counter').textContent;
  const li = document.createElement("li");

  if(document.querySelectorAll('.likes li')[0] ){
    let lastLi = document.querySelectorAll('.likes li');
    lastLi = lastLi[lastLi.length-1].textContent;
    lastLiCount = lastLi.split(" ")[1];
    times = lastLi.split(" ")[4];
  }

  if(currentCount == lastLiCount){
    times++;
    document.getElementById(`count-${currentCount}`).textContent = `Number ${currentCount} is clicked ${times} times.`
  }
  else{
    li.textContent= `Number ${currentCount} is clicked ${1} time.`
    li.id = `count-${currentCount}`
    document.getElementsByClassName('likes')[0].appendChild(li);
  }


}

function pause(){
  console.log(inter);
}

document.addEventListener("DOMContentLoaded",function(){
  const inter= setInterval(() => changeCounter(true),1000);
  document.getElementById('plus').addEventListener("click" ,() => changeCounter(true) );
  document.getElementById('minus').addEventListener("click" ,() => changeCounter(false) );
  document.getElementById('heart').addEventListener("click" ,() => addlikes() );
  document.getElementById('pause').addEventListener("click" ,() => pause() );

  function pause(){
    console.log(inter);
  }
});
