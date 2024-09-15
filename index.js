// audio = new Audio(''+loveaudio.src)
funcLoveIn = 0

var klik = true;
document.getElementById("loveIn").onclick = function() {
  if(klik){
    if(funcLoveIn == 0){
      funcLoveIn = 1;
      loveIn.style = "transition:all .8s ease;transform:scale(15);opacity:0";
      ket.style = "display:none";
      setTimeout(() => {
        onload()
      }, 800);
    }
  }else{
    klik = true;
    document.getElementById("loveIn").innerHTML = '<a href="#" class="love">&#10084;</a>'
  }
}

document.getElementById("present").onclick = function() {
  event.preventDefault();
  present.style = "transition:all .8s ease;transform:scale(15);opacity:0";
  say_hi.style = "transition:all .4s ease;opacity:0";
  hadiah.style = "transition:all .4s ease;opacity:0";
  setTimeout(() => {
    window.location.href = 'flower.html';
  }, 400);
}

